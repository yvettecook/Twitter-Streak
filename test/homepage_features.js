chai = require('chai')
expect = chai.expect
casper_chai = require('casper-chai')
chai.use(casper_chai)

describe('homepage', function(){
  before(function(){
    casper.start('http://localhost:3000/');
  });

  it('says Welcome', function(){
    casper.then(function(){
      expect("body").to.have.text("Welcome");
    });
  });

});
