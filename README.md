[![Build Status](https://travis-ci.org/pjanuario/rendr-auth-rest-adapter.svg?branch=master)](https://travis-ci.org/pjanuario/rendr-auth-rest-adapter)
[![Dependency Status](https://gemnasium.com/pjanuario/rendr-auth-rest-adapter.svg)](https://gemnasium.com/pjanuario/rendr-auth-rest-adapter)

# rendr-auth-rest-adapter
Since the default rendr data adapter doesn't have support for api authentication, this custom version inherits all the functionality of the traditional [Rendr Rest Adapter]() and also adds support for adding extra information for API authentication.

## Supported authentication methods

**Query String:** It supports appending a query string parameter to the api request.

## How to use it

Install it

    $ npm install rendr-auth-rest-adapter --save

Configure as a data adapter on rendr server. It expects an auth key on the the adapter configuration, such as:

    // it uses the same data adapter configurations as Rest Adapter plus auth key
    var dataAdapterConfig = {
      default: {
        host: 'github.com',
        protocol: 'http',
        auth: {
          query: { clientId: "something" }
        }
      }
    };

    /**
     * Initialize our Rendr server.
     */
    var server = rendr.createServer({
      dataAdapter: new ProxyAdapter(dataAdapterConfig)
    });


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Running Specs

    $ npm test

## Coverage Report

We aim for 100% coverage and we hope it keeps that way! :)

Check the report after running npm test.

    $ open ./coverage/lcov-report/index.html

## Bump versioning

We use [grunt bump package](https://www.npmjs.org/package/grunt-bump) to control package versioning.

Bump Patch version

    $ grunt bump

Bump Minor version

    $ grunt bump:minor

Bump Major version

    $ grunt bump:major

## Credits

Shout out to @pjanuario.
