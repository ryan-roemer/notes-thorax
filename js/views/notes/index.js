(function () {
  'use strict';

  var ENTER = 13;

  Application.View.extend({

    name: "notes/index",

    events: {
      "click #note-create": function () {
        this.createNote();
      },
      "keypress #note-new-input": function (ev) {
        this.enterNote(ev);
      },
      collection: {
        "reset":     function ()  { this.render(); },
        "notes:add": function (m) {
          console.log(m);
         }
      }
    },

    // Create note on enter key.
    enterNote: function (ev) {
      if (ev.which === ENTER) {
        this.createNote();
      }
    },

    createNote: function () {
      // Get value, then reset note input.
      var $input = this.$("#note-new-input"),
        input = $input.val().trim();

      $input.val("");

      if (input) {
        this.create(input);
      }
    },

    create: function (title) {
      var coll = this.collection;

      // Add new model to collection, and corresponding note
      // to DOM after model is saved.
      coll.create({ title: title }, {
        success: function (colData, modelData) {
          // Trigger event on model retrieved from collection.
          coll.trigger("notes:add", coll.get(modelData.id));
        }
      });
    }

  });

}());