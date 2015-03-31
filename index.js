var util = require('util'),
    _ = require('underscore'),
    RestAdapter = require('rendr/server/data_adapter/rest_adapter');

function appendAuthentication(api) {
  // Can specify a particular API to use, falling back to default.
  var apiHost = this.options[api.api] || this.options['default'] || this.options;

  var auth = apiHost.auth;
  if (auth && auth.query) {
    api.query = _.defaults(api.query || {}, auth.query);
  }

  return api;
}

function ProxyAdapter(options) {
  options = _.defaults(options, {});
  RestAdapter.call(this, options);
}

util.inherits(ProxyAdapter, RestAdapter);

ProxyAdapter.prototype.apiDefaults = function (api, req) {
  api = appendAuthentication.call(this, api, req);
  return RestAdapter.prototype.apiDefaults.call(this, api, req);
};

module.exports = ProxyAdapter;
