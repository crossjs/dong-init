'use strict';

var util = require('../../../util');

module.exports = util.REST.extend({
  attrs: {
    module: 'rbac',
    baseUri: [util.LOC_ORIGIN, 'v0.1', 'users/{user_id}/roles']
  }
});
