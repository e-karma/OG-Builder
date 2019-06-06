/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    FILE_PICKER: {},
  };

  if (environment === 'development') {
    // LOG_MODULE_RESOLVER is needed for pre-1.6.0
    ENV.LOG_MODULE_RESOLVER = false;

    ENV.APP.LOG_RESOLVER = false;
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_MODULE_RESOLVER = false;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.FILE_PICKER = {
      KEY: "AItprscrjQImZp8BTkyZZz",
      PICKER_OPTIONS: {mimetype:'image/*'},
      // We currently use the 'free' plan at Filepicker, which
      // does not allow storage to S3
      // STORE_OPTIONS: {location: 'S3', container: 'startupassets-dev'}
    };
  }

  if (environment === 'production') {
    ENV.FILE_PICKER = {
      KEY: "AItprscrjQImZp8BTkyZZz",
      PICKER_OPTIONS: {mimetype:'image/*'},
      // STORE_OPTIONS: {location: 'S3', container: 'startupassets'}
    };
  }

  return ENV;
};
