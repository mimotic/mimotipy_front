module.exports = function(grunt){

	// modules calls
	grunt.loadNpmTasks('grunt-contrib-connect'); // levantar servidores
	grunt.loadNpmTasks('grunt-contrib-stylus'); // compilar stylus
	grunt.loadNpmTasks('grunt-contrib-watch'); // observar cambios sobre archivos
	grunt.loadNpmTasks('grunt-contrib-jshint'); // validator js files
	grunt.loadNpmTasks('grunt-contrib-cssmin'); // minificar los css
	grunt.loadNpmTasks('grunt-contrib-uglify'); // minificar js
	grunt.loadNpmTasks('grunt-contrib-stylus'); // stylus

	// config modules
	grunt.config.init({

		connect: { // lanza servidor

		    serverMimotipy: {

		     	options: {
			        hostname: 'www',
			        port:8080,
	                livereload: true,
	                open: true,
	                base: 'mimotipy',
		    	}
			},

			serverSfotipy: {

		     	options: {
			        hostname: 'www',
			        port:8080,
	                livereload: true,
	                open: true,
	                base: 'sfotipy',
		    	}
			}
		},

		watch: { // observa cambios sobre archivos

			scriptsMimotipy: {
			   	files: ['mimotipy/**/*', '!mimotipy/css/*'],
			   	tasks: ['stylus'],
			   	options: {
			        livereload: true,
			    },

			},
			scriptsSfotipy: {
			   	files: ['sfotipy/**/*'],
				options: {
			        livereload: true,
			    },
			},

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
		      paths: ['mimotipy/stylus'],
		    },
		    files: {
		      'mimotipy/css/style.css': ['mimotipy/stylus/estilos.styl']
		    }
		  }
		}

	});

	// tareas
	grunt.registerTask('default',['stylus','connect:serverMimotipy','watch:scriptsMimotipy']);

	grunt.task.registerTask('mpy', ['stylus','connect:serverMimotipy','watch:scriptsMimotipy']);
	grunt.task.registerTask('spy', ['connect:serverSfotipy','watch:scriptsSfotipy']);
	grunt.task.registerTask('genstylus', ['stylus']);


};