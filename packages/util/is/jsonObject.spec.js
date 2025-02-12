'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const jsonObject = '{\n    "Test": "1234",\n    "NestedTest": {\n      "Test": "5678"\n    }\n  }';
describe('isJsonObject', () => {
  it('returns true on empty objects', () => {
    expect((0, _.isJsonObject)({})).toEqual(true);
  });
  it('returns true on JSON objects', () => {
    expect((0, _.isJsonObject)(jsonObject)).toEqual(true);
  });
  it('returns false on JSON parsable value typeof number', () => {
    expect((0, _.isJsonObject)(1234)).toEqual(false);
  });
  it('returns false on JSON parsable value null', () => {
    expect((0, _.isJsonObject)(null)).toEqual(false);
  });
  it('returns false on invalid objects', () => {
    expect((0, _.isJsonObject)('notAnObject')).toEqual(false);
  });
  it('returns false on invalid JSON', () => {
    expect((0, _.isJsonObject)('{"abc", "def"}')).toEqual(false);
  });
});
