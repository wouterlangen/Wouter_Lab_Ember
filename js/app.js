Songs = Ember.Application.create({
	mixmaster: 'Wouter',
	totalReviews : 0,
	ready : function(){
		
	}
});

Songs.Song = Ember.Object.extend({
	title	: null,
	artist	: null,
	genre	: null,
	listens	: 0
});

mySong = Songs.Song.create({
	title	: 'Yellow',
	artist 	: 'Coldplay',
	genre	: 'Rock'
});

Songs.ReviewTextArea = Ember.TextArea.extend({
	placeholder	: 'Enter your review'
});

Songs.songsController = Ember.ArrayController.create({
	content	: [],
	init	: function () {
		// Create instance of Song model
		var song = Songs.Song.create({
			title	: 'Queen of California',
			artist	: 'John Mayer',
			genre	: 'Country'
		});
		this.pushObject(song);
	}
});