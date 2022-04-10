const readline = require('readline');
const rl = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout
  }
);

const fs = require('fs');
fs.writeFileSync('game.txt','Игра началась')

function myLog(file, string) {
  fs.appendFileSync(file, string)
}

let count = 1;
let n = Math.floor(Math.random() * 1000);


async function game() {
  rl.question ('Угадай число от 0 до 1000\n', function (data){
    console.log('Случайное число: '+ n);
    data = parseInt(data);
    console.log(`---Попытка ${count}---`);
    myLog('game.txt', (`Попытка ${count}\n`)); 
    evaluateAnswer(data) 
    });
}


function evaluateAnswer(data){
  if (data == n) {
    console.log ('Поздравляю! Вы угалали число!');
    myLog('game.txt', (data+'- Поздравляю! Вы угалали число!'));
    rl.close();
  } else if (data > n) {
    console.log('Вы ввели число больше.');
    myLog('game.txt', (data+'- Вы ввели число больше.'));
    ++count;
    game();
  } else if (data < n) {
    console.log('Вы ввели число меньше.');
    myLog('game.txt', (data+'- Вы ввели число меньше.'));
    ++count;
    game();
  } 
}


async function main() {
  console.log('Давай сыграем в игру?');

  try {
    await game();
  } catch (error) {
    console.error('Ошибка', error);
  }
}


main();