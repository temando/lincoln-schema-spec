# Lincoln UI Schema Specification

[![NPM](https://img.shields.io/npm/v/lincoln-schema-spec.svg)](https://npmjs.org/packages/lincoln-schema-spec/)
[![Travis CI](https://img.shields.io/travis/temando/lincoln-schema-spec.svg)](https://travis-ci.org/temando/lincoln-schema-spec)
[![MIT License](https://img.shields.io/github/license/temando/lincoln-schema-spec.svg)](https://en.wikipedia.org/wiki/MIT_License)

This project contains the specification for the [Lincoln UI](https://github.com/temando/open-api-renderer) schema.

This simplified schema is designed to allow UI projects to simply display data and not require large amounts of logic. It is heavily based on the upcoming [OpenAPI v3 specification](https://github.com/oai/OpenAPI-Specification/tree/OpenAPI.next).

- [lincoln-ui+v1](src/lincoln-ui+v1.schema.json)

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
