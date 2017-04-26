import Dict from 'ts-dict';

/** JSON data, as returned by `JSON.parse()`. */
export type JsonValue = null | boolean | number | string | JsonObject | JsonArray;

/** JSON object values. */
export interface JsonObject extends Dict<JsonValue> {}

/** JSON array values. */
export interface JsonArray extends Array<JsonValue> {}

/** Tests a JSON value to see if it is a JSON object. */
export function isObject(x: JsonValue): x is JsonObject {
    return !!x && typeof x === 'object' && !Array.isArray(x);
}

/** Tests a JSON value to see if it is a JSON array. */
export function isArray(x: JsonValue): x is JsonArray {
    return Array.isArray(x);
}

/** A more safely typed version of `JSON.parse()`. */
export function parse(source: string): JsonValue {
    return JSON.parse(source);
}

/** A more safely typed version of `JSON.stringify()`. */
export function stringify(value: JsonValue): string {
    return JSON.stringify(value);
}
