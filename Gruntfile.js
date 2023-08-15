module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less:{
            development:{
                files:{
                    "main.css": "main.less"
                }
            },
            production:{
                options:{
                    compress: true,
                },
                files:{
                    "main.min.css": "main.less"
                }
            }
        },
        uglify:{
            target:{
                files:{
                    'src/script/main.min.js': 'src/script/main.js'
                }
            }
        }
    })
    grunt.registerTask('olaGrunt', function(){
        console.log('ola, grunt')
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.registerTask('default', ['less', 'uglify'])
}


