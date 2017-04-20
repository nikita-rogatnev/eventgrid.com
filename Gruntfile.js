"use strict";

module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-postcss");
    grunt.loadNpmTasks("grunt-cssnano");
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({

        less: {
            style: {
                files: {
                    "./css/style.css": "./less/style.less"
                }
            }
        },

        postcss: {
            prefix: {
                options: {
                    processors: [require("autoprefixer")({browsers: "last 2 versions"})]
                },
                src: "css/style.css",
                dest: "css/style.css"
            },
            minify: {
                options: {
                    processors: [require("cssnano")()]
                },
                src: "css/style.css",
                dest: "css/style.min.css"
            }
        },

        uglify: {
            my_target: {
                files: {
                    'js/script.min.js': ['js/script.js']
                }
            }
        }

    });

    grunt.registerTask("default", ["less", "postcss", "uglify"]);

};
