'use strict';

var chai = require('chai');
chai.use(require('sinon-chai'));
chai.use(require('chai-subset'));
chai.use(require('chai-as-promised'));

global.expect = chai.expect;
global.sinon = require('sinon');
