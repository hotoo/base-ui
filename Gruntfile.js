/*global module:false*/
module.exports = function(grunt) {
    "use strict";
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: ['src/*.less', 'src/**/*.less'],
                tasks: 'lessTask'
            }
        },
        less: {
            development: {
                files: {
                    'dist/base-ui.css': [ 'src/base-ui.less' ]
                }
            },
            production: {
                options: {
                    yuicompress: true
                },
                files: {
                    'dist/base-ui.min.css': [ 'src/base-ui.less' ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('lessTask', ['less']);
    grunt.registerTask('default', ['watch']);
};
