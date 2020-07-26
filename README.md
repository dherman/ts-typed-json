# Typed JSON

This library is a set of type definitions and utilities
for dealing with JSON data in a type-safe way with TypeScript.

The most important type definitions are `JSON.Value`, `JSON.Object`,
and `JSON.Array`, which correspond respectively to JSON values,
objects, and arrays, as the names suggest.

The library also exports safely-typed versions of the standard `JSON.parse()` and `JSON.stringify()` functions.

# Basic Usage

```ts
import * as JSON from 'ts-typed-json';
```

# Types

## interface JSON.Object

```ts
interface JSON.Object extends Record<string, JSON.Value> {}
```

## interface JSON.Array

```ts
interface JSON.Array extends Array<JSON.Value> {}
```

## type JSON.Value

```ts
type JSON.Value = null | boolean | number | string | JSON.Object | JSON.Array;
```

# Type Testing API

## function JSON.isNull(x: JSON.Value): x is null

Tests if a JSON value is `null`.

## function JSON.isBoolean(x: JSON.Value): x is boolean

Tests if a JSON value is a boolean.

## function JSON.isNumber(x: JSON.Value): x is number

Tests if a JSON value is a number.

## function JSON.isString(x: JSON.Value): x is string

Tests if a JSON value is a string.

## function JSON.isObject(x: JSON.Value): x is JSON.Object

Tests if a JSON value is a JSON object.

## function JSON.isArray(x: JSON.Value): x is JSON.Array

Tests if a JSON value is a JSON array.

# Type Cast API

## function JSON.asNull(x: JSON.Value): null

Casts a JSON value to `null`, throwing a `TypeError` if it fails.

## function JSON.asBoolean(x: JSON.Value): boolean

Casts a JSON value to a boolean, throwing a `TypeError` if it fails.

## function JSON.asNumber(x: JSON.Value): number

Casts a JSON value to a number, throwing a `TypeError` if it fails.

## function JSON.asString(x: JSON.Value): string

Casts a JSON value to a string, throwing a `TypeError` if it fails.

## function JSON.asObject(x: JSON.Value): JSON.Object

Casts a JSON value to a JSON object, throwing a `TypeError` if it fails.

## function JSON.asArray(x: JSON.Value): JSON.Array

Casts a JSON value to a JSON array, throwing a `TypeError` if it fails.


# Serialization and Deserialization API

## function parse(source: string): JSON.Value

Parses a source string as a JSON value.

## function stringify(value: JSON.Value): string

Serializes a JSON value to a string.

## function loadSync(path: string, encoding: BufferEncoding = 'utf8'): JSON.Value

Synchronously loads a JSON value from the filesystem.

## function load(path: string, encoding: BufferEncoding = 'utf8'): Promise<JSON.Value>

Asynchronously loads a JSON value from the filesystem.
