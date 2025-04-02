import { validate, type JsonSchema } from "./index.ts";

describe("JSON Schema Validator", () => {
  const testCases: { schema: JsonSchema; instance: unknown; expected: boolean }[] = [
    { schema: { type: "number" }, instance: 42, expected: true },
    { schema: { type: "number" }, instance: "hello", expected: false },
    { schema: { type: "string", minLength: 3 }, instance: "hi", expected: false },
    { schema: { type: "string", maxLength: 5 }, instance: "hello", expected: true },
    { schema: { type: "number", minimum: 10 }, instance: 5, expected: false },
    { schema: { type: "number", maximum: 1000 }, instance: 1001, expected: false },
    { schema: { type: "object", required: ["name"] }, instance: {}, expected: false },
    { schema: { type: "object", required: ["name"] }, instance: { name: "John" }, expected: true },
    { schema: { type: "string", enum: ["red", "blue"] }, instance: "green", expected: false },
  ];

  testCases.forEach(({ schema, instance, expected }, index) => {
    test(`Test Case #${index + 1}: ${JSON.stringify(schema)}`, () => {
      const result = validate(schema, instance);
      expect(result.valid).toBe(expected);
    });
  });
});
