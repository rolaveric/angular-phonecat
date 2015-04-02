module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'test/unit/**/*.js'
    ],

    systemjs: {
      configFile: 'app/system.config.js',

      config: {
        paths: {
          'angular-mocks': 'app/bower_components/angular-mocks/angular-mocks.js'
        }
      }
    },

    preprocessors: {
      'test/unit/**/*.js': ['systemjs']
    },

    autoWatch : true,

    frameworks: ['jasmine', 'systemjs'],

    browsers : ['Chrome'],

    plugins : [
            'karma-systemjs',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    logLevel: config.LOG_INFO
  });
};