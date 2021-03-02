class CreateUser {
  constructor(firstname, lastname, user, password, repeatPassword) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.user = user;
    this.password = password;
    this.repeatPassword = repeatPassword;
  }

  static verification = (userArr) => {
    for(const value of userArr) {
      if(value === '' || value === ' ') return false;
      return true;
    }
  }

  static userVerification = (user) => {
    const clrUser = user.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');

    if(user.length === clrUser.length && 3 <= user.length <= 12 ) return true;
  }

  static correctPassword = (password, repeatedPassword) => {
    if(8 <= password.length <= 16) return true;
    if(password !== repeatedPassword) return true;
  }

  controller = () => {
    const userArr = [
      this.firstname,
      this.lastname,
      this.cpf,
      this.user,
      this.password,
      this.repeatPassword,
    ];

    if (!CreateUser.verification(userArr)) return window.alert('please insert all datas in the form');
    if(!CreateUser.userVerification(userArr[3])) return window.alert('please insert a valid user');
    if(!CreateUser.correctPassword(userArr[4], userArr[5])) return window.alert(`the passwords do not match`);

    return true;

  }
}

class verifyCpf extends CreateUser{
  constructor(firstname, lastname, cpf, user, password, repeatPassword) {
    super(firstname, lastname, user, password, repeatPassword);
    this.cpf = cpf
  }

  static verification = (cpf) => {
    if(typeof cpf != 'string' || typeof cpf != 'number') return false;
    if(cpf.legth !== 11) return false;
    if(this.isSequence()) return false;
  }

  static isSequence = (cpf) => {
    return cpf.charAt(0).repeat(11) === cpf;
  }

  static removeCharacter = (cpf) => cpf.replace(/\D+/g, '');

  static toArr = (cpf) => Array.from(cpf);

  static removeDigits = (cpf) => cpf.splice(0, 9);

  static multiplyAndSum = (arr) => {
    const multiplies = [11, 10,9,8,7,6,5,4,3,2];
    const multiplieds = [];
    let number = 0;

    arr.forEach((el, index) => {
      arr.length === 10 ? (number = multiplies[index]) : (number = multiplies[index + 1]);
      multiplieds.push(el * number);
    });

    const sum = multiplieds.reduce((accumulator, value) => (accumulator += value), 0);

    return sum;
  }

  static createDigit = (sum) => {
    const digit = 11 - (sum % 11);
    return digit > 9 ? 0 : digit;
  }

  static addDigit = (arr, digit) => [...arr, digit];

  static isValid = (cpf, complete) =>  cpf[9] == complete[9] && cpf[10] == complete[10] ? true : false;

  cpfController = () => {

    if(verifyCpf.verification()) return false;

    const cpfClr = verifyCpf.removeCharacter(this.cpf);
    const cpfArr = verifyCpf.toArr(cpfClr);

    const cpfWithoutDigits = verifyCpf.removeDigits(cpfArr);
    const cpfSum1 = verifyCpf.multiplyAndSum(cpfWithoutDigits);
    const digit1 = verifyCpf.createDigit(cpfSum1);
    const cpfWithFirstDigit = verifyCpf.addDigit(cpfWithoutDigits, digit1);

    const cpfSum2 = verifyCpf.multiplyAndSum(cpfWithFirstDigit);
    const digit2 = verifyCpf.createDigit(cpfSum2);

    const cpfComplete = verifyCpf.addDigit(cpfWithFirstDigit, digit2);
    const resp = verifyCpf.isValid(cpfClr, cpfComplete);
    return resp;
  }

}

function getData() {
  const data = document.querySelectorAll('input');

  const clrData = [];

  for (const input of data) {
    clrData.push(input.value);
  }

  return clrData;
}

function userController() {
  const data = getData();

  const user = new verifyCpf(...data);
  const userResp = user.controller();
  const cpfResp= user.cpfController();

  return userResp && cpfResp ? window.alert('your user has been created with success') : window.alert('please verify your data');
}

document.addEventListener('click', (e) => {
  const target = e.target.classList;

  if (target.contains('create-user')) userController();
});
