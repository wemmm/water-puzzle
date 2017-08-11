const app = require('../server');
Browser = require('zombie');
let assert = require('chai').assert;
describe('Feature tests', function() {

  before(function() {
    this.server = app.listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000'});
  });

  before(function(done) {
    this.browser.visit('/', function() {
      done();
    });
  });

  after(function(done) {
    this.server.close(done);
  });

  it('has a die hard themed header', function(done) {
    var browser = this.browser;
    browser.assert.text('h1', 'Die Hard 3');
    done();
  });

  it('has a weigh button that can be clicked on', function(done) {
    var browser = this.browser;
    browser.pressButton('Weigh').then(function() {
    assert.ok(browser.success);
    }).then(done, done);
  });

  it('has a fill three litre bottle button that can be clicked on', function(done) {
    var browser = this.browser;
    browser.pressButton('Fill Three Litre Bottle').then(function() {
    assert.ok(browser.success);
    }).then(done, done);
  });

  it('has a fill five litre bottle button that can be clicked on', function(done) {
    var browser = this.browser;
    browser.pressButton('Fill Five Litre Bottle').then(function() {
    assert.ok(browser.success);
    }).then(done, done);
  });

  it('has an empty three litre bottle button that can be clicked on', function(done) {
    var browser = this.browser;
    browser.pressButton('Empty Three Litre Bottle').then(function() {
    assert.ok(browser.success);
    }).then(done, done);
  });

  it('has an empty litre bottle button that can be clicked on', function(done) {
    var browser = this.browser;
    browser.pressButton('Empty Five Litre Bottle').then(function() {
    assert.ok(browser.success);
    }).then(done, done);
  });

  it('has a pour into bottle button that can be clicked on', function(done) {
    var browser = this.browser;
    browser.pressButton('Pour Into Five Litre Bottle').then(function() {
    assert.ok(browser.success);
    }).then(done, done);
  });

  it('has another pour into bottle button that can be clicked on', function(done) {
    var browser = this.browser;
    browser.pressButton('Pour Into Three Litre Bottle').then(function() {
    assert.ok(browser.success);
    }).then(done, done);
  });
});
