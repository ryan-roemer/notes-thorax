Application.Model.extend({
  name: "note",
  defaults: function () {
    return {
      title: "",
      text: "*Edit your note!*",
      createdAt: new Date()
    };
  }
});

// Instances of this model can be created by calling:
// new Application.Models["note"]()