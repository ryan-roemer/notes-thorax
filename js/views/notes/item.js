Application.View.extend({
  name: "notes/item",

  // Set rendered DOM element `id` property to the model's id.
  id: function () { return this.model.id; },

  tagName: "tr",

  className: "notes-item",

  events: {
    "click .note-view":   function () { this.viewNote(); },
    "click .note-edit":   function () { this.editNote(); },
    "click .note-delete": function () { this.deleteNote(); },

    model: {
      "change":   function () { this.render(); },
      "destroy":  function () { this.remove(); }
    }
  },

  viewNote: function () {
    var loc = ["note", this.model.id, "view"].join("/");
    console.log("TODO REPLACE ROUTER", loc);//this.router.navigate(loc, { trigger: true });
  },

  editNote: function () {
    var loc = ["note", this.model.id, "edit"].join("/");
    console.log("TODO REPLACE ROUTER", loc);//this.router.navigate(loc, { trigger: true });
  },

  deleteNote: function () {
    // Destroying model triggers view cleanup.
    this.model.destroy();
  }
});

// Instances of this view can be created by calling:
// new Application.Views["notes/item"]()