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

    });

});

