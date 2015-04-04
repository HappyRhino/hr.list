List View for HappyRhino
=============================

[![Build Status](https://travis-ci.org/HappyRhino/hr.list.png?branch=master)](https://travis-ci.org/HappyRhino/hr.list)

List is a **View** associated to a **Collection**, containing a item view associated with each models in the collection.

### Example

```js
var ListView = require("hr.list");

var Posts = require("./collection/posts");

var PostItem = ListView.Item.extend({
    tagName: "li",

    render: function() {
        this.text(this.model.get("title"));
        return this.ready();
    }
});

var PostsList = ListView.extend({
    tagName: "ul",
    item: MyListItem,
    collection: Posts
});


var list = new PostsList();
list.collection.add({
    title: "Hello"
});
list.collection.add({
    title: "Hello 2"
});
```

#### Filter items

A filter can be defined when creating the list:

```js
var list = new PostsList({
    // Display only post with more than 100 likes
    filter: function(model) {
        return model.get("likes") > 100;
    }
});
```

Or can be applied at any time:

```js
list.filter(function(model) {
    return model.get("tweets") > 100;
});
```
