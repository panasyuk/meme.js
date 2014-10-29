module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        coffee: {
          compile: {
            files: {
              'build/canvas_element.js': 'src/canvas_element.coffee',
              'build/drawable_element.js': 'src/drawale_element.coffee',
              'build/image_element.js': 'src/image_element.coffee',
              'build/text_element.js': 'src/text_element.coffee',
              'build/drawable_element.js': 'src/drawable_element.coffee',
              'build/example.js': 'src/example.coffee',
            }
          }
        },

        haml: {                              // Task
          dist: {                            // Target
            files: {                         // Dictionary of files
              'example.html': 'example.haml'
            }
          }
        },

        concat: {
            dist: {
                src: [
                    'build/canvas_element.js',
                    'build/drawable_element.js',
                    'build/image_element.js',
                    'build/text_element.js',
                ],
                dest: 'dist/meme.js'
            }
        },

        uglify: {
            build: {
                src: 'dist/meme.js',
                dest: 'dist/meme.min.js'
            }
        },

        watch: {
            scripts: {
                files: ['src/*.coffee'],
                tasks: ['coffee', 'concat', 'uglify'],
                options: {
                    spawn: false
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-haml2html');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');

    grunt.registerTask('default', ['coffee', 'concat', 'uglify', 'haml']);
    grunt.registerTask('watcher', ['watch']);
};