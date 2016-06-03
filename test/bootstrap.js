'use strict';

var chai = require('chai');
chai.use(require('sinon-chai'));
chai.use(require('chai-subset'));
chai.use(require('chai-as-promised'));

global.expect = chai.expect;
global.sinon = require('sinon');

// In order to chain multiple .withArgs.returns. cf. https://github.com/sinonjs/sinon/issues/176
global.StubBuilder = class StubBuilder {
    constructor() {
        this._stub = sinon.stub();
    }

    addReturns(args, value) {
        args = Array.isArray(args) ? args : [args];
        this._stub.withArgs.apply(this._stub, args).returns(value);
        return this;
    }

    toStub() {
        return this._stub;
    }
};
