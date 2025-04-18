/*alert(" This my learning 2.0 restart")   //alert
let name = prompt(" What is restart ? ");  //promt
alert('2.0,' + name + ' !')
let userConfirmed = confirm('Do you want to proceed?');  //confirm */

// Alert
alert('Welcome to our website!');

// Prompt
let userName = prompt('What is your name?');
if (userName !== null) {
  // Confirm
  let isConfirmed = confirm('Is your name ' + userName + '?');
  if (isConfirmed) {
    alert('Nice to meet you, ' + userName + '!');
  } else {
    alert('Oh, I must have misunderstood.');
  }
} else {
  alert('You did not enter your name.');
}
