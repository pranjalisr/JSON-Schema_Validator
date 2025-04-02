# JSON Schema Validator

## 📌 Overview
This project is a lightweight **JSON Schema Validator** written in TypeScript. It allows you to validate JSON objects against defined schemas, ensuring that the data meets specified criteria such as type, required properties, length constraints, and enumerated values.

## 🚀 Features
- Supports **string, number, and object** types
- Validates **minimum/maximum values** for numbers
- Checks **minLength/maxLength** for strings
- Ensures **required fields** exist in objects
- Supports **enum values** for predefined options
- Provides clear validation results with error locations

## 🛠️ Installation
1. Clone the repository:
2. Install dependencies:
   bun install
   
## 📌 Usage
### Import the Validator
typescript
import { validate, JsonSchema } from "./index";
### Define a Schema and Validate Data
typescript
const schema: JsonSchema = {
    type: "object",
    required: ["name"],
};

const instance = { name: "Mark Joe" };
const result = validate(schema, instance);

console.log(result); // { valid: true, absoluteKeywordLocation: "#", instanceLocation: "#" }
## 🧪 Running Tests
This project includes unit tests using Jest.

Run the tests with:
bun test

## 📄 File Structure
📂 json-schema-validator   
 ┣ 📜 index.ts  # Core validation logic   
 ┣ 📜 jsonSchemaValidator.test.ts # Jest test cases  
 ┣ 📜 package.json   # Project dependencies   
 ┣ 📜 tsconfig.json  # TypeScript configuration    
 ┣ 📜 README.md      # Documentation (this file)    
 
## ✨ Contributing
Feel free to open issues or submit pull requests. Contributions are welcome!

## 📜 License
This project is licensed under the **MIT License**.

---
🚀 Happy coding and happy validating! 🎯
   
