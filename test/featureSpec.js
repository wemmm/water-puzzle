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
});
