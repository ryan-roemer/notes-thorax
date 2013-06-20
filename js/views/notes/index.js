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
        "notes:add": function (m) { this.addNote(m); }
      }
    },

    initialize: function () {
      // Cache view and just show on re-render.
      this.$input = this.$("#note-new-input");

      // Bootstrap any existing notes.
      this.addNotes();
    },

    // Add single child note view to front of notes list.
    addNote: function (model) {
      var view = new Application.Views["notes/item"]({ model: model });

      // NOTE: Thorax's view.render() doesn't return `this`.
      view.render();

      this.$("#notes-list tr")
        .filter(":last")
        .after(view.el);
    },

    // Clear and add all notes to notes list.
    addNotes: function () {
      // Clear existing child note items.
      this.$("#notes-list tr.notes-item").remove();

      // Add all notes from collection, sorted old to new.
      this.collection.chain()
        .sortBy(function (m) { return m.get("createdAt"); })
        .each(this.addNote, this);
    },

    // Create note on enter key.
    enterNote: function (ev) {
      if (ev.which === ENTER) {
        this.createNote();
      }
    },

    createNote: function () {
      // Get value, then reset note input.
      var input = this.$input.val().trim();
      this.$input.val("");

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