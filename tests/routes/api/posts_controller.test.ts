import assert from 'assert';
import {expect} from 'chai';
import { afterEach, beforeEach } from 'node:test';

import { describe, it } from 'node:test';

describe('Posts API Tests', () => {
    let sandbox;
    
    beforeEach((done) => { });
    
    afterEach((done) => { });
    
    describe('### GET /posts', () => {
        assert.equal(1 + 1, 2);
    });
    
    describe('### GET /tasks/:taskId', () => {
        assert.equal(1 + 1, 2);
    });
    
    describe('### POST /tasks', () => {
        assert.equal(1 + 1, 2);
    });
    
    describe('### PUT /tasks/:taskId', () => {
        assert.equal(1 + 1, 2);
    });
    
    describe('### DELETE /tasks/:taskId', () => {
        assert.equal(1 + 1, 2);
    });
  });