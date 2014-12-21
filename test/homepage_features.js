describe('Homepage', function() {

  before(function() {
    casper.start('http://localhost:300/');
  });

  it('hello world-s', function() {
    casper.then(function() {
      expect(body).to.have.text('Hello world')
    });
  });

})
