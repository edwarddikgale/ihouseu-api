import assert from 'assert';
import {expect} from 'chai';

import { describe, it } from 'node:test';

describe('Simple Math Test', () => {

    it('should return 4', () =>{
        assert.equal(2 + 2, 4);
    });

    it('It should be true', ()=> {
        expect(true || false).to.be.true;
    });

});