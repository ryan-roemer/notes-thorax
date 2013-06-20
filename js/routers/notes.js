(function () {
  'use strict';

  new (Backbone.Router.extend({
    routes: module.routes,
    index: function () {
      this._index || (this._index = new Application.Views["notes/index"]({
        collection: Application.collection
      }));

      Application.setView(this._index);
    }
  }));
}());