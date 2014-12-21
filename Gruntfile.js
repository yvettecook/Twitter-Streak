module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mocha_casperjs: {
      options: {
      },
      files: {
        src: ['test/**/*']
      }
    },

    jshint: {
      files: ['Gruntfile.js']
    }

  })
  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['mocha_casperjs', 'jshint']);
};
