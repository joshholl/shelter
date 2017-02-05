const test = require('tape');
const sinon = require('sinon');
const target = require('../../server/lib/box-management/index');

test('it registes routes', function(t) {
    t.plan(2);

    let app = { get: sinon.spy() };
    target.register(app)
    
    t.true(app.get.calledOnce);
    t.true(app.get.calledWith('/boxes', sinon.match.func));
    
    t.end();
});