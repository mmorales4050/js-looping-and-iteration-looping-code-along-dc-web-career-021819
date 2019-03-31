// Code your solutions in this file
function printBadges(employees) {
  for (let i = 0; i < employees.length ; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`)
  }
  return employees
}

function tailsNeverFails() {
  let coin = 1
  let counter = -1
  while (coin >= 0.5) {
    coin = Math.random()
    counter++
  }
  return `You got ${counter} tails in a row!`
}
