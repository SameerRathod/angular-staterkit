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
                    'src/dist/user.build.js': ['src/user/**/*.js'],
                    'src/dist/admin.build.js':['src/admin/**/*.js'],
                    'src/dist/vendor.js':['js/**/*.js', ]
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
            files: ['css/*','src/**/*'],
            tasks: ['concat'],
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');



    // Default task(s).
    grunt.registerTask('default', ['concat']);

};

