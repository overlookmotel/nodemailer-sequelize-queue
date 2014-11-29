// --------------------
// Nodemailer Sequelize queue
// Tests
// --------------------

// modules
var chai = require('chai'),
	expect = chai.expect,
	promised = require('chai-as-promised'),
	Support = require(__dirname + '/support'),
	Sequelize = Support.Sequelize,
	Promise = Sequelize.Promise,
	_ = require('lodash'),
	Mailer = require('../lib/');

// init
chai.use(promised);
chai.config.includeStack = true;

// tests

describe(Support.getTestDialectTeaser('Tests'), function () {
	
});
