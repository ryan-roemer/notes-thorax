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
      }
    },

    // Create note on enter key.
    enterNote: function (ev) {
      if (ev.which === ENTER) {
        this.createNote();
      }
    },

    createNote: function () {
      var $input = this.$("#note-new-input"),
        input = $input.val().trim();

      // Reset value.
      $input.val("");

      // Create note if non-empty input.
      if (input) {
        this.collection.create({ title: input });
      }
    }

  });

}());