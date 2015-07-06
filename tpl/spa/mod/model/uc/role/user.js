'use strict';

var util = require('../../../util');

module.exports = util.REST.extend({
  attrs: {
    module: 'uc',
    baseUri: [util.UC_API_ORIGIN, 'v0.9', 'users/roles/{role_id}']
  }
});
