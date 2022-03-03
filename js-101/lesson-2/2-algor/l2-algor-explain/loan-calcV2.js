let rlSync = require('readline-sync');

let userInfo = {
  username: '',
  loan: null,
  monthlyR: null,
  duration: null,
};

function prompt(msg) {
  console.log(`\n=>♡ LOAN ANGEL SAYS : ${msg}`);
}

function greetingMsg() {
  console.log('~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~~$~$~$~$~$~$');
  prompt(`Thank you for choosing Loan Angel's Calculator! ♡`);
  console.log('ଘ(✿˵•́ ᴗ •̀˵)$');
  console.log('\n~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~~$~$~$~$~$~$\n');
}

function farewellMsg() {
  console.log('\n~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~~$~$~$~$~$~$');
  prompt(`Farewell, ${userInfo.username}!`);
  console.log(`May all your loans be fully paid someday~`);
  console.log('ଘ(✿˵•́ o •̀˵)  ~$$$  ~$$  ~$\n');
}

function invalidNum(num) {
  return num === '' || num < 0 || Number.isNaN(Number(num)) || num === null;
}

function invalidName(name) {
  return name === '' || name === null || name === undefined;
}

function getUserName() {
  prompt('What is your name?');
  let userName = rlSync.question();
  while (invalidName(userName)) {
    prompt('Please enter a valid name!');
  }
  userInfo.username = userName.toUpperCase();
}

function getLoanAmount() {
  prompt('How much is your loan?');
  let amount = rlSync.question();
  while (invalidNum(amount) || amount > 10000000) {
    prompt('Please enter a valid amount. No special characters.');
    console.log('(Maximum loan is $10000000)');
    amount = rlSync.question();
  }
  userInfo.loan = Number(amount);
}

function getAPR() {
  prompt('What is the Annual Percentage Rate?');
  console.log('Enter in decimal notation (ex. 0.05 for 5%). 0 interest rate OK:');
  let rate = rlSync.question();
  if (Number(rate) === 0) {
    userInfo.monthlyR = 0;
    return 0;
  }
  while (invalidNum(rate) || Number.isInteger(Number(rate))) {
    prompt('Please enter a valid rate.');
    rate = rlSync.question();
  }
  userInfo.monthlyR = rate / 12;
  return userInfo.monthlyR;
}

function getDuration() {
  prompt('What is your loan duration? (in months):');
  let loanD = rlSync.question();
  while (invalidNum(loanD) || Number(loanD) > 540) {
    console.log('Please enter a valid number and duration. Maximum is 540 months (45 years):');
    loanD = rlSync.question();
  }
  userInfo.duration = Number(loanD);
}

function monthlyP(loanAmt, monthlyRate, loanDur) {
  if (monthlyRate === 0) {
    return loanAmt / loanDur;
  } else {
    return loanAmt * (monthlyRate /
      (1 - Math.pow((1 + monthlyRate), (-loanDur))));
  }
}

function finalMonthly(monthlyPayment) {
  console.log('\n~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~~$~$~$~$~$~$');
  prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);
  console.log('ଘ(✿˵•́ O •̀˵)');
  console.log('\n~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~$~~$~$~$~$~$~$\n');
}

function changeProfile() {
  prompt(`What would you like to change?\n[name] [loan] [apr] [duration]?`);
  let changeChoice = rlSync.question().toLowerCase();
  while (!['name', 'loan', 'apr', 'duration'].includes(changeChoice)) {
    prompt(`Type either 'name', 'loan', 'apr', or 'duration'`);
    changeChoice = rlSync.question().toLowerCase();
  }
  if (changeChoice === 'name') {
    getUserName();
  } else if (changeChoice === 'loan') {
    getLoanAmount();
  } else if (changeChoice === 'apr') {
    getAPR();
  } else if (changeChoice === 'duration') {
    getDuration();
  }
  anotherChange();
}

function anotherChange() {
  prompt(`Would you like to make another change? 'y' or 'n'`);
  let moreChanges = rlSync.question();

  if (moreChanges !== 'y' && moreChanges !== 'n') {
    prompt(`Please enter 'y' or 'n'`);
    moreChanges = rlSync.question().toLowerCase();
  } else if (moreChanges === 'y') {
    changeProfile();
  } else if (moreChanges === 'n') {
    finalMonthly(monthlyP(userInfo.loan, userInfo.monthlyR, userInfo.duration));
    repeat();
  }
}

function changeOrNewProfile() {
  prompt(`Do you want to use your current profile or make a new one? ('new' or 'change')`);
  let changeOrNewProfile = rlSync.question().toLowerCase();
  while (!['new', 'change'].includes(changeOrNewProfile)) {
    prompt(`Enter 'new' or 'change'`);
    changeOrNewProfile = rlSync.question().toLowerCase();
  }
  if (changeOrNewProfile === 'new') {
    while (true) {
      start();
      let mPay = monthlyP(userInfo.loan, userInfo.monthlyR, userInfo.duration);
      finalMonthly(mPay);
      let willRepeat = repeat();
      if (willRepeat === 'n') break;
    }
  } else if (changeOrNewProfile === 'change') {
    changeProfile();
  }
}

function repeat() {
  prompt(`Would you like to do another calculation?\n('y' for yes and 'n' for no)`);
  let again = rlSync.question().toLowerCase();
  if (again !== 'y' && again !== 'n') {
    prompt(`Please enter 'y' or 'n'`);
    again = rlSync.question().toLowerCase();
  } else if (again === 'y') {
    changeOrNewProfile();
  } else {
    farewellMsg();
  }
  return again;
}

greetingMsg();

function start() {
  getUserName();
  getLoanAmount();
  getAPR();
  getDuration();
}

start();
let userMPay = monthlyP(userInfo.loan, userInfo.monthlyR, userInfo.duration);
finalMonthly(userMPay);
repeat();
// console.log(userInfo);