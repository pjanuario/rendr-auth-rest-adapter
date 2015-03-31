var chai = require('chai'),
  should = chai.should(),
  sinon = require('sinon'),
  RestAdapter = require('rendr/server/data_adapter/rest_adapter'),
  AuthRestAdapter = require('../index');

describe('AuthRestAdapter', function() {
  var authRestAdapter,
    request;

  beforeEach(function () {
    request = sinon.stub();
    authRestAdapter = new AuthRestAdapter({request: request});
  });

  it('should be an instance of RestAdapter', function () {
    authRestAdapter.should.be.an.instanceof(RestAdapter);
  });

  describe('.apiDefaults', function () {
    it('should not use authentication when is not defined', function () {
      authRestAdapter.options = {
        host: 'api.test',
        protocol: 'http'
      };

      authRestAdapter.apiDefaults({body: {}})
        .should.have.property('url', 'http://api.test');
    });

    describe('query string authentication', function(){
      it('should use the default api if no deafult on options', function () {
        authRestAdapter.options = {
          host: 'api.test',
          protocol: 'http',
          auth: { query: { foo: 'bar' } }
        };

        authRestAdapter.apiDefaults({body: {}})
          .should.have.property('url', 'http://api.test?foo=bar');
      });

      it('should use the default api if no other is configured', function () {
        authRestAdapter.options.default = {
          host: 'api.test',
          protocol: 'http',
          auth: { query: { foo: 'bar' } }
        };

        authRestAdapter.apiDefaults({body: {}})
          .should.have.property('url', 'http://api.test?foo=bar');
      });

      it('should use the configured api', function () {
        authRestAdapter.options.customApi = {
          host: 'custom.api',
          protocol: 'http',
          auth: { query: { foo: 'bar' } }
        };

        var result = authRestAdapter.apiDefaults({
          api: 'customApi',
          body: {}
        });

        result.should.have.property('url', 'http://custom.api?foo=bar');
      });

      it('should be able to overwrite the query', function () {
        authRestAdapter.options.default = {
          hostname: 'api.test',
          protocol: 'http',
          auth: { query: { foo: 'bar' } }
        };
        var result = authRestAdapter.apiDefaults({
          query: { something: 'else' },
          body: {}
        });

        result.should.have.property('url', 'http://api.test?something=else&foo=bar');
      });
    });
  });
});
