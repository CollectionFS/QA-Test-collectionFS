test = new Meteor.Collection('test');

if (Meteor.isClient) {

  
  Template.hello.test = function() {
    return test.findOne({ text: 'ok'});
  };

  hello = function() {
    return 'Test :)';
  };


  window.images = images = new FS.Collection('images');

  var documents = new Meteor.Collection('documents');

  Template.hello.images = function() {
    return images.find();
  };

  Template.hello.greeting = function () {
    return "Welcome to collectionFS.";
  };

  Template.hello.events({
    'uploaded #files': function(event, temp) {
      console.log('Event Uploaded: ' + event.file._id);
    },
    'uploaded #dropzone': function(event, temp) {
      console.log('Event Uploaded: ' + event.file._id);
    },
    'click .btnRemove': function(event, temp) {
      this.remove();
    }
  });

  images.acceptDropsOn('hello', '#dropzone');
  images.acceptUploadFrom('hello', '#files');
}

if (Meteor.isServer) {

  var images = new FS.Collection('images', {
    store: new FS.FileSystemStore('images', '~/dev/test/collectionFS/files')
  });

  Meteor.startup(function () {
    // code to run on server at startup
  });
}
