Application.Collection.extend({
  name: "notes",

  model: Application.Models["note"],

  localStorage: new Backbone.LocalStorage("TODO_THORAX_NOTES_STORE")

});

// Instances of this collection can be created by calling:
// new Application.Collections["notes"]()