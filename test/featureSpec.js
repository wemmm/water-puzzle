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

  it('has a fill three litre bottle button that updates its current capacity', function(done) {
    var browser = this.browser;
    browser.pressButton('Fill Three Litre Bottle').then(function() {
    assert.ok(browser.success);
    browser.assert.text('h3', '3');
    }).then(done, done);
  });

  it('has a fill five litre bottle button that updates its current capacity', function(done) {
    var browser = this.browser;
    browser.pressButton('Fill Five Litre Bottle').then(function() {
    assert.ok(browser.success);
    browser.assert.text('h4', '5');
    }).then(done, done);
  });

  it('has an empty three litre bottle button sets its capacity to zero', function(done) {
    var browser = this.browser;
    browser.pressButton('Empty Three Litre Bottle').then(function() {
    assert.ok(browser.success);
    browser.assert.text('h3', '0');
    }).then(done, done);
  });

  it('has an empty litre bottle button that sets its capacity to zero', function(done) {
    var browser = this.browser;
    browser.pressButton('Empty Five Litre Bottle').then(function() {
    assert.ok(browser.success);
    browser.assert.text('h4', '0');
    }).then(done, done);
  });

  it('has a pour into bottle button that pours the five litre contents into the three litre bottle', function(done) {
    var browser = this.browser;
    browser.pressButton('Fill Five Litre Bottle').then(function() {
    assert.ok(browser.success);
    })
    browser.pressButton('Pour Into Three Litre Bottle').then(function() {
    assert.ok(browser.success);
    browser.assert.text('h3', '3');
    browser.assert.text('h4', '2');
    }).then(done, done);
  });

  it('has a pour into bottle button that pours the three litre contents into the five litre bottle', function(done) {
    var browser = this.browser;
    browser.pressButton('Fill Three Litre Bottle').then(function() {
    assert.ok(browser.success);
    })
    browser.pressButton('Pour Into Five Litre Bottle').then(function() {
    assert.ok(browser.success);
    browser.assert.text('h3', '0');
    browser.assert.text('h4', '5');
    }).then(done, done);
  });

  it('has a win message', function(done) {
    var browser = this.browser;
    browser.pressButton('Weigh').then(function() {
    assert.ok(browser.success);
    browser.assert.text('h5', 'You Win!');
    }).then(done, done);
  });

  it('has a lose message', function(done) {
    var browser = this.browser;
    browser.assert.text('h7', 'You Lose!');
    done();
  });
});
