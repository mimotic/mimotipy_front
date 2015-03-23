module.exports = function(grunt){

	// modules calls
	grunt.loadNpmTasks('grunt-contrib-connect'); // levantar servidores
	grunt.loadNpmTasks('grunt-contrib-stylus'); // compilar stylus
	grunt.loadNpmTasks('grunt-contrib-watch'); // observar cambios sobre archivos
	grunt.loadNpmTasks('grunt-contrib-jshint'); // validator js files
	grunt.loadNpmTasks('grunt-contrib-cssmin'); // minificar los css
	grunt.loadNpmTasks('grunt-contrib-uglify'); // minificar js
	grunt.loadNpmTasks('grunt-contrib-stylus'); // stylus precompilador CSS !!!

	// config modules
	grunt.config.init({

		connect: { // lanza servidor

		    serverMimotipy: {

		     	options: {
			        hostname: 'www',
			        port:8080,
	                livereload: true,
	                open: true,
	                base: './mimotipy/',
		    	}
			},

			serverSpotipy: {

		     	options: {
			        hostname: 'www',
			        port:8081,
	                livereload: true,
	                open: true,
	                base: './sfotipy/',
		    	}
			}
		},

		watch: { // observa cambios sobre archivos

			sfotipi:{
			   	files: ['sfotipy/**/*'],
				options:{
					livereload: true
				}
			},

			mimotipi:{
			   	files: ['mimotipy/**/*','!mimotipy/css/**/*'],
			   	tasks: ['stylus'],
				options:{
					livereload: true
				}
			}

		},


		jshint: { // lint de javascript
		    all: ['Gruntfile.js', 'js/**/*.js']
		},


		cssmin: { // minificado de css
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'css/',
		      src: ['*.css', '!*.min.css'],
		      dest: 'css/',
		      ext: '.min.css'
		    }]
		  }
		},

	    uglify: { // minificador de js
	      options: {
	        mangle: true
	      },
	      my_target: {
	        files: {
	          'js/functions.min.js': ['js/functions.js']
	        }
	      }
	    },

	    stylus: {
		  compile: {
		    options: {
		      paths: ['mimotipy/stylus']
		    },
		    files: {
		      'mimotipy/css/style.css': ['mimotipy/stylus/style.styl'] // 1:1 compile an concat if has more than 1
		    }
		 }
}

	});

	// tareas
	grunt.task.registerTask('default', ['stylus','connect:serverMimotipy','watch:mimotipi']);


	grunt.task.registerTask('spy', ['connect:serverSpotipy','watch:sfotipi']);
	grunt.task.registerTask('outcss', ['stylus']);


};