const readline = require('readline');
const rl = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout
  }
);

const fs = require('fs');
const { mainModule } = require('process');
fs.writeFileSync('game.txt','Игра началась')

function myLog(file, string) {
  fs.appendFileSync(file, string)
}

let count = 1;
let n = Math.floor(Math.random() * 1000);
console.log('Случайное число: '+ n);

function game() {
  return new Promise((resolve, reject) => {
    rl.question('Угадай число от 0 до 1000\n', data => {
      data = parseInt(data);
      console.log(`---Попытка ${count}---`);
      myLog('game.txt', (`Попытка ${count}\n`));
      if (data == n) {
        resolve(console.log ('Поздравляю! Вы угалали число!'));
        myLog('game.txt', (data+'- Поздравляю! Вы угалали число!'));
        rl.close();
      } else if (data > n) {
        resolve(console.log('Вы ввели число больше.'));
        myLog('game.txt', (data+'- Вы ввели число больше.'));
        ++count;
        game();
      } else if (data < n) {
       resolve(console.log('Вы ввели число меньше.'));
        myLog('game.txt', (data+'- Вы ввели число меньше.'));
        ++count;
        game();
      } else if (isNaN(data)) {
        reject(console.log('Вы ввели не число!!!'));
        game();
      }
    });  
  });
}

async function main() {
  try{
    await game();
  } catch(error){
    console.log('Ввведите число!');
  }
}

    
main()


