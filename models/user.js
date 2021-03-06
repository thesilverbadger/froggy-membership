var assert = require('assert');
var utility = require('../lib/utility');

var User = function (args) {

    assert.ok(args.email, "Email is required");

    var user = {};
    user.email = args.email;
    user.createdAt = args.createdAt || new Date();
    user.status = args.status || "pending";
    user.signInCount = args.signInCount || 0;
    user.lastLogInAt = args.lastLogIn || new Date();
    user.currentLogInAt = args.currentLogIn || new Date();
    user.authenticationToken = utility.randomString(18);

    return user;

};

module.exports = User;