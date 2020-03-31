module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                options: {
                    // Replace all 'use strict' statements in the code with a single one at the top
                    banner: "'use strict';\n",
                    process: function(src, filepath) {
                        return '// Source: ' + filepath + '\n' +
                            src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                    },
                },
                files: {
                    'user.build.js': ['src/components/user/**/*.js'],
                    'admin.build.js':['src/components/admin/**/*.js'],
                    'common.js':['js/**/*.js', ]
                },
            },
            css:{
                files: {
                    'admin.css': ['css/*.css', 'components/admin/**/*.css'],
                    'user.css':['css/*.css', 'components/user/**/*.css'],
                },
            }
        },
        watch: {
            files: ['css/*','components/**/*'],
            tasks: ['concat'],
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');



    // Default task(s).
    grunt.registerTask('default', ['concat']);

};

