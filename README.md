hr.list [![Build Status](https://travis-ci.org/HappyRhino/hr.list.png?branch=master)](https://travis-ci.org/HappyRhino/hr.list)
=============================

> **View** associated to a **Collection**, containing a item associated with each models in the collection.

## Installation

```
$ npm install hr.list
```

## Documentation

#### Define a list

Create a list by extending the `ListView` class.

```js
var ListView = require("hr.list");

var Posts = require("./collection/posts");

// Represent an item from the collection
var PostItem = ListView.Item.extend({
    tagName: "li",

    render: function() {
        this.text(this.model.get("title"));
        return this.ready();
    }
});

// Represent the list of PostItem views
var PostsList = ListView.extend({
    tagName: "ul",
    item: MyListItem,
    collection: Posts
});
```

Create an instance from this list with an empty collection:

```js
var list = new PostsList();
list.collection.add({
    title: "Hello"
});
list.collection.add({
    title: "Hello 2"
});
```

Or from an existing collection:

```js
var list = new PostsList({
    collection: myPosts
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

Clear filter using `list.clearFilter()`.

