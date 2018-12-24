module.exports = function(grunt) {
  grunt.initConfig({
    babel: {
      scripts: {
        files: [{
          expand: true,
          cwd: 'src',
          src: '**/*.js',
          dest: 'build/'
        }]
      }
    },
    eslint: {
      scripts: ['src/**/*.js']
    },
    watch: {
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['babel']
      }
    },
    clean: ['build', 'types']
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'babel', 'eslint']);
};
