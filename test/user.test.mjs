// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../server');
// const should = chai.should();

import { describe, it } from 'mocha';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';

chai.use(chaiHttp);

describe('Users', () => {
    /*
     * Test the /GET route
     */
    describe('/GET user', () => {
        it('it should GET all the users', (done) => {
            chai.request(server)
                .get('/api/worko/user')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    // Additional tests for other endpoints...
});
