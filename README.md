[![Build Status](https://travis-ci.org/pjanuario/rendr-auth-rest-adapter.svg?branch=master)](https://travis-ci.org/pjanuario/rendr-auth-rest-adapter)

# rendr-auth-rest-adapter
Custom version of the traditional RestAdapter that inherits all its functionality and also adds support for adding extra parameters for API authentication.

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
