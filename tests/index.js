var $ = require("jquery");
var List = require("../");

describe('List', function() {

    describe('count', function() {

        it('should return correct count (without filter)', function() {
            var l = new List();

            l.collection.reset([
                {
                    'test': 1
                },
                {
                    'test': 2
                },
                {
                    'test': 3
                }
            ]);

            expect(l.count()).to.equal(3);
        });

        it('should return correct count (with filter)', function() {
            var l = new List({
                filter: function(model) {
                    return model.get("test") >= 2;
                }
            });

            l.collection.reset([
                {
                    'test': 1
                },
                {
                    'test': 2
                },
                {
                    'test': 3
                }
            ]);

            expect(l.count()).to.equal(2);
        });

        it('should correcly be rendered', function() {
            var Item = List.Item.extend({
                render: function() {
                    this.html("test "+this.model.get('test'));
                    return this.ready();
                }
            });

            var TestList = List.extend({
                Item: Item
            });

            var l = new TestList({

            });

            l.collection.reset([
                {
                    'test': 1
                },
                {
                    'test': 2
                },
                {
                    'test': 3
                }
            ]);

            var $container = $("<div>", { 'class': "test"});
            $container.appendTo($("body"));
            l.appendTo($container);

            expect($(".test").html()).to.equal("<ul><li>test 1</li><li>test 2</li><li>test 3</li></ul>");
        });

    });

});

