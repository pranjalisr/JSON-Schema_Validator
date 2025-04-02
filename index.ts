interface ValidationResult {
    valid: boolean;
    absoluteKeywordLocation?: string;
    instanceLocation?: string;
}

export interface JsonSchema {
    type: "string" | "number" | "object";
    minLength?: number;
    maxLength?: number;
    minimum?: number;
    maximum?: number;
    required?: string[];
    enum?: unknown[];
}

export function validate(schema: JsonSchema, instance: unknown): ValidationResult {
    let valid = true;
    let absoluteKeywordLocation = "#";
    const instanceLocation = "#";
    
    if(!instance){
        console.log("instance is null")
        process.exit(1)
    }

    if (typeof instance !== schema.type) {
        valid = false;
        absoluteKeywordLocation = "#/type";
    }

    if (schema.enum && Array.isArray(schema.enum) && !schema.enum.includes(instance)) {
        valid = false;
        absoluteKeywordLocation = "#/enum";
    }

    if (schema.type === "string" && typeof instance === "string") {
        if (schema.minLength !== undefined && instance.length < schema.minLength) {
            valid = false;
            absoluteKeywordLocation = "#/minLength";
        }
        if (schema.maxLength !== undefined && instance.length > schema.maxLength) {
            valid = false;
            absoluteKeywordLocation = "#/maxLength";
        }
    }

    if (schema.type === "number" && typeof instance === "number") {
        if (schema.minimum !== undefined && instance < schema.minimum) {
            valid = false;
            absoluteKeywordLocation = "#/minimum";
        }
        if (schema.maximum !== undefined && instance > schema.maximum) {
            valid = false;
            absoluteKeywordLocation = "#/maximum";
        }
    }

    if (schema.type === "object" && typeof instance === "object" && schema.required) {
        for (const key of schema.required) {
            if (!(key in instance)) {
                valid = false;
                absoluteKeywordLocation = `#/required/${key}`;
            }
        }
    }

    return { valid, absoluteKeywordLocation, instanceLocation };
}
