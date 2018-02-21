
describe('feature test', function() {
  var account;

  beforeEach(function() {
    account = new Account(1234);
    this.originalDateToStringMethod = Date.toString;
    var dummyDate = time.toString();
    Date.prototype.toString = function(){
      return dummyDate;
    };
  });

  afterEach(function() {
    Date.prototype.toString = function(){
    return Date.apply(this.originalDateToStringMethod);
    };
  });

  it('checks the account opening date is set to the time when u create the account', function() {
    expect(account.accountOpeningDate).toEqual(dummyDate);
  });
})
