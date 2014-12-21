module.exports = function(grunt){

  grunt.initConfig({

    jasmine_node: {
      options: {
        forceExit: true,
      },
      all: ['spec/']
    },

    jshint: {
      files: ['Gruntfile.js']
    }

  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jasmine_node', 'jshint']);

};
