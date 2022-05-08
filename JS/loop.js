let count = 0;
while (true) {
  const userValue = Number(prompt("Enter your value"));
  let countInput = count++;
  if (SECRET_VALUE > userValue) {
    alert("Your value is lower than Secret Value");
  }
  if (SECRET_VALUE < userValue) {
    alert("Your value is higher than Secret Value");
  }
  if (isNaN(userValue) === true) {
    alert("You did not put number in value");
  }
  if (SECRET_VALUE === userValue) {
    alert("You guessed right");
    alert("Your try count is " + countInput);
    break;
  }
}

