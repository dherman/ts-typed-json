import Dict from 'ts-dict';
import * as fs from 'fs';
import RSVP = require('rsvp');

export { Object_ as Object, Array_ as Array };

/** JSON data, as returned by `JSON.parse()`. */
export type Value = null | boolean | number | string | Object_ | Array_;

/** JSON object values. */
interface Object_ extends Dict<Value> {}

/** JSON array values. */
interface Array_ extends Array<Value> {}

/** Tests a JSON value to see if it is a JSON object. */
export function isObject(x: Value): x is Object_ {
    return !!x && typeof x === 'object' && !Array.isArray(x);
}

/** Tests a JSON value to see if it is a JSON array. */
export function isArray(x: Value): x is Array_ {
    return Array.isArray(x);
}

/** A more safely typed version of `JSON.parse()`. */
export function parse(source: string): Value {
    return JSON.parse(source);
}

/** A more safely typed version of `JSON.stringify()`. */
export function stringify(value: Value): string {
    return JSON.stringify(value);
}

/** Synchronously reads a text file and parses it as JSON. */
export function loadSync(path: string, encoding: string = 'utf8'): Value {
    return parse(fs.readFileSync(path, encoding));
}

const readFile = RSVP.denodeify<string>(fs.readFile);

export async function load(path: string, encoding: string = 'utf8'): Promise<Value> {
    let source = await readFile(path, { encoding: encoding });
    return parse(source);
}
