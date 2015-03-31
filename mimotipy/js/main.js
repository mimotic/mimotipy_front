Mimotipy = {};

Mimotipy.Song = Backbone.Model.extend({});

Mimotipy.SongView = Backbone.View.extend({
	tagName: 'li',
	className: 'item border-bottom',

	template: Handlebars.compile($('#song-template').html()),

	render: function(){
		var html = this.template(this.model.toJSON());
		this.$el.html(html);
	}

});



window.Mimotipy = Mimotipy;