module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			options: {
				includePaths: ['bower_components/foundation/scss']
			},
			dist: {
				options: {
					outputStyle: 'compressed',
					sourceMap: true,
				},
				files: {
					'css/app.css': 'scss/app.scss'
				}
			}
		},

		connect: {
			server: {
				options: {
					//port: 8888,
					keepalive: true,
					useAvailablePort: true,
					livereload: true
					//base: 'www-root'
				}
			}
		},

		watch: {
			grunt: {
				options: {
					reload: true
				},
				files: ['Gruntfile.js']
			},

			sass: {
				files: 'scss/**/*.scss',
				tasks: ['sass'],
				options: {
    				livereload: true
    			}
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['sass']);
	grunt.registerTask('default', ['build','watch']);
}
