// Superclass
function Account(agency, account, balance) {
  this.agency = agency;
  this.account = account;
  this.balance = balance;
}

Account.prototype.withdraw = function (value) {
  if (this.balance + this.limit <= value)
    return console.log(`insufficient funds: ${this.balance}`);

  this.balance -= value;
  this.seeBalance();
};

Account.prototype.deposit = function (value) {
  this.balance += value;
  this.seeBalance();
};

Account.prototype.seeBalance = function () {
  console.log(`
  Agency: ${this.agency}
  Account: ${this.account}
  Balance: ${this.balance.toFixed(2)}`);
};

function Cp(agency, account, balance) {
  Account.call(this, agency, account, balance);
}

Cp.prototype = Object.create(Account.prototype);
Cp.prototype.constructor = Cp;

function Cc(agency, account, balance, limit) {
  Account.call(this, agency, account, balance);
  this.limit = limit;
}

Cc.prototype = Object.create(Account.prototype);
Cc.prototype.constructor = Cc;

const cp = new Cp('00101', '3432-2', 0, 1000);
console.log(cp);
