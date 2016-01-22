module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path
          {expand: true, src: ['img/*'], dest: 'build/', filter: 'isFile'},
          {expand: true, src: ['fonts/*'], dest: 'build/', filter: 'isFile'},
          {expand: true, src: ['views/*'], dest: 'build/', filter: 'isFile'},
          {expand: true, src: ['js/*'], dest: 'build/', filter: 'isFile'},
          {expand: true, src: ['css/*'], dest: 'build/', filter: 'isFile'},
          {expand: false, src: ['favicon.ico'], dest: 'build/'}

          // includes files within path and its sub-directories
          //{expand: true, src: ['path/**'], dest: 'dest/'},

          // makes all src relative to cwd
          //{expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'}

          // flattens results to a single level
          //{expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
        ]
      }
    },
    clean: ["build/"],
    serve: {
      'path': 'index.html'
    },
    watch: {
      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['copy']
      },
      scripts: {
        files: ['**/*.js'],
        tasks: ['copy'],
        options: {
          spawn: false
        }
      },
      html: {
        files: ['**/*.html'],
        tasks: ['copy'],
        options: {
          livereload: true
        }
      },
      css: {
        files: ['**.*.css'],
        tasks: ['copy'],
        options: {}
      }
    },
    open: {
      dev: {
        path: 'http://localhost:9000/index.html',
        app: 'Google Chrome'
      },
      build: {
        path: 'localhost:9000/build/index.html',
        app: 'Google Chrome'
      },
      file: {
        path: '/etc/hosts'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.loadNpmTasks('grunt-contrib-connect');

  //copy
  grunt.loadNpmTasks('grunt-contrib-copy');

  //clean
  grunt.loadNpmTasks('grunt-contrib-clean');

  //watch
  grunt.loadNpmTasks('grunt-contrib-watch');

  //serve
  grunt.loadNpmTasks('grunt-serve');

  //open
  grunt.loadNpmTasks('grunt-open');

  ///////////////////////

  // Default task(s).
  grunt.registerTask('default', ['clean', 'copy', 'serve', 'open:dev', 'watch']);

  // Server
  grunt.registerTask('server', ['clean', 'copy', 'open:dev', 'serve', 'watch']);


};