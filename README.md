# Lincoln UI Schema Specification

This project contains the specification for the [Lincoln UI](https://github.com/temando/open-api-renderer) schema.

This simplified schema is designed to allow UI projects to simply display data and not require large amounts of logic. It is heavily based on the upcoming [OpenAPI v3 specification](https://github.com/oai/OpenAPI-Specification/tree/OpenAPI.next).

- [lincoln-ui+v1](lincoln-ui+v1.schema.json)

> This project is relatively immature and does not fully capture all possibilities of the OpenAPI v3 specification.

## Installation

```sh
npm install @temando/lincoln-schema-spec
```

## Usage

```js
var schema = require('@temando/lincoln-schema-spec');

console.log(schema); // POJO, JSON Schema Draft 6
```
