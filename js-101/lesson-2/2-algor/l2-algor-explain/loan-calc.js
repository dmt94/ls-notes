let rlSync = require('readline-sync');

let userInfo = {
  username: 'Daevah',
  loan: null,
  monthlyR: null,
  duration: null,
};

function prompt(msg) {
  console.log(`=>♡ LOAN ANGEL SAYS : ${msg}`);
}

function greetingMsg() {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  prompt(`Thank you for choosing Loan Angel's Calculator! ♡`);
  console.log('ଘ(✿˵•́ ᴗ •̀˵)');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n');
}

function farewellMsg() {
  console.log('\n');
  prompt(`Farewell, ${userInfo.username}! May all your loans be fully paid someday~`);
  console.log('ଘ(✿˵•́ o •̀˵)  ~$$$  ~$$  ~$');
}

function invalidNum(num) {
  return num === '' || num < 0 || Number.isNaN(Number(num)) || num === null;
}

function getLoanAmount() {
  prompt('How much is your loan?');
  let amount = rlSync.question();
  while (invalidNum(amount) || amount > 10000000) {
    prompt("Please enter a valid amount. No special characters. Maximum loan is $10000000");
    amount = rlSync.question();
  }
  userInfo.loan = Number(amount);
}

function getAPR() {
  prompt('What is the Annual Percentage Rate? Enter in decimal notation (ex. 0.05 for 5%):');
  let rate = rlSync.question();
  while (invalidNum(rate) || Number.isInteger(Number(rate))) {
    prompt("Please enter a valid rate.")
    rate = rlSync.question();
  }
  userInfo.monthlyR = rate / 12;
}

function getDuration() {
  prompt('What is your loan duration? (in months):');
  let loanD = rlSync.question();
  while (invalidNum(loanD) || Number(loanD) > 540 || !(Number.isInteger(Number(loanD)))) {
    console.log('Please enter a valid number and duration. Maximum is 540 months (45 years):');
    loanD = rlSync.question();
  }
  userInfo.duration = Number(loanD);
}

function monthlyPayment(loanAmt, monthlyRate, loanDur) {
  if (monthlyRate === 0) {
    return loanAmt / loanDur;
  } else {
    return loanAmt * (monthlyRate /
      (1 - Math.pow((1 + monthlyRate), (-loanDur))));
  }
}

function displayFinalMonthly(monthlyPayment) {
  prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);
  console.log('ଘ(✿˵•́ O •̀˵)')
}

function repeat() {
  prompt(`Would you like to do another calculation?\n('y' for yes and 'n' for no)`);
  let again = rlSync.question().toLowerCase();
  if (again !== 'y' && again !== 'n') {
    prompt(`Please enter 'y' or 'n'`);
    again = rlSync.question().toLowerCase();
  }
  return again;
}

console.clear();

greetingMsg();

while (true) {
  let userLoanAmt = getLoanAmount();
  let userAPR = getAPR();
  let userLoanDur = getDuration();
  let userMonthly = monthlyPayment(userInfo.loan, userInfo.monthlyR, userInfo.duration);

  displayFinalMonthly(userMonthly);

  let calculateAgain = repeat();
  if (calculateAgain === 'n') break;
}

farewellMsg();

console.log(userInfo);