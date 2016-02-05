this.Documents = new Mongo.Collection("documents");


if (Meteor.isClient) {
  

  //Update the session current_date
  // variable every 1000ms.
  Meteor.setInterval(function(){
    Session.set("current_date",new Date());
  },1000);

  Template.date_display.helpers({
    current_date:function(){
     // return new Date();
     return Session.get("current_date");
    }

  });


  Template.editor.helpers({
    docid:function(){
      //console.log(Documents.findOne());

      var doc = Documents.findOne();
      if(doc)
      {
        return doc._id;
      }
      else
      {
        return undefined;
      }
      
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if(!Documents.findOne()){ // no docuemnts yet

        Documents.insert({title:"my new document"});

    }


  });
}
