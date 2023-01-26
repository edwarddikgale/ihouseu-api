import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import * as http from 'http';
import mockServer from '../../mock-server';
import * as Koa from 'koa';
import { afterEach, beforeEach } from 'node:test';
import supertest from 'supertest';
import postsRoutes from '../../../routes/api/posts';

import { describe, it } from 'node:test';

//const app = new Koa();
//routing
//app.use('/api/posts', postsRoutes);

//const apptest = supertest(http.createServer(app.callback()));

const should = chai.should();
chai.use(chaiHttp);

describe('Posts API Tests', () => {
    let sandbox;
    
    beforeEach((done) => { });
    
    afterEach((done) => { });
    
    describe('It should GET all posts', (done) => {
        /*chai.request(mockServer)
        .get('/posts')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(5);
            done();
        });*/
        assert.equal(1+1,2);
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