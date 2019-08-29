//node ./index.js - щоб запустити
//console.log('h1')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Модулі
/*

//var Car = require('./Car.js').Car;
//глобальні функція підключення для того щоб її бачити
//require('./car');

var bmw = new Car('BMW')
bmw.logName();
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Пакетний менеджер NPM
//для того щоб поставити якусь бібліотеку ми пишемо npm i lodash
/*
var lodash = require('./node_modules/lodash/lodash') //змінна в яку хочемо помістит ивесь функціонал бібліотеки
var lodash = require('lodash')//він перебирає всі папки на тому рівні що і наш файл коли немає на одному рівні він виходить із дерикторії і буде шукати далі

require('./Car.js')
console.log(lodash.sum([4,6]))//функція із lodash
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Package.json
// npm init - створить package.json
//npm i jquery --save - дану бібліотеку треба занести в поле "dependencies" - в package.json
//npm i gulp --save-dev - вкажемо що це dev пакет | i - це скорочений запис install
//якщо ми видалил папку node_models для того щоб проект мав менше місця то всі налаштування у нас будуть описані в package.json
//для того щоб вернути ці файли ми пропишемо npm i  скачає всі файли заново


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Вбудовані модулі
//Для того щоб підключити всі вбудовані бібліотеки в WebStorm File -> Setting -> in search line "nodejs" -> кнопка Enable (або воно буде підключене за замовчуванням)
//Модуль util
/*
var util = require('util');

function Car() { }

Car.prototype.logName = function () {
    console.log('This name is ', this.name)
}

function BMW (name) {
   this.name = name || 'Default Value';
}

BMW.prototype.drive = function () {
    console.log('Im driving')
}

util.inherits(BMW, Car)//наслідуваня

var bmw = new BMW('x6');
bmw.logName();
bmw.drive();

//Модуль events

var EventEmitter = require('events').EventEmitter;
var dispatcher = new EventEmitter();

dispatcher.on('connect', function (data) {//добавляємо слухача
    console.log('Connect 1', data)
});
dispatcher.on('error', function (err) { // щоб програма не  падала при виконна ні а тільки виводило повідомлення
    console.log(err)
});

dispatcher.on('connect', function (data) {
    console.log('Connect 2', data)
});

dispatcher.emit('error', new Error('Something wrong'))

dispatcher.emit('connect',1 )//виконає 2 функції з подіями 'connect' і ми передамо туда аргумент 1


*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Робота з файлами
/*
var fs = require('fs')//підключаємо модуль для роботи з файлами

// fs.writeFileSync('test.txt', 'H1')//створили новий файл
//
//
// var data = fs.readFileSync('test.txt')
// console.log(data.toString())
//
// var data = fs.readFileSync('test.txt','utf-8')//зчитуєм зразу лінійку
// console.log(data)

fs.writeFile('test.txt', 'qweqwe', function (err,data) { // перевіряємо чи файл існує
    if (err) throw new Error(err);


    fs.rename('test.txt', 'test2.txt', function () {//пробуємо перейменувати файл
        if (err) throw new Error(err);

        console.log(data)
    })



    fs.readFile('test2.txt', {encoding:'utf-8'}, function (err , data) {
        if (err) throw new Error(err);

    console.log(data)
    })
})
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Створення веб сервера час 1
/*
var http = require('http')

var server = new http.Server;
//запускаємо сервер
server.listen(80, '127.0.0.1')//localhost = 127.0.0.1 - це одне і те ж

var counter = 0;//кількість запитів які нам приходять

 щоб відкрити наш сервер пишемо localhost або 127.0.0.1

server.on('request', function (req, res) {
  res.end('H1 server' + ++counter);
})
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Створення веб сервера частина 2
/*

var http = require('http')

var server = new http.Server;

server.listen(80, '127.0.0.1') //server.listen(8090, '127.0.0.1') - запит localhost:8090

var url = require('url')

var fs = require('fs')

// server.on('request', function (req, res) {
// console.log(url.parse(req.url,true)) //url.parse - для того щоб розкрити всі параметри які нам приходять | (req.url,true) - робимо з поля query обєкт
//
//     var parseUrl =  url.parse(req.url,true)
//
// //console.log(parseUrl)//ми можемо подивитися всі функціїякі доступні
//     res.end(parseUrl.query.q);//зчитуємо parseUrl і  query.q по запиту http://localhost/?q=2 де q = 2 виводимо нашу 2 в консоль
// //з url будемо принімати дані
// })


server.on('request', function (req, res) {
    console.log(url.parse(req.url,true)) //url.parse - для того щоб розкрити всі параметри які нам приходять | (req.url,true) - робимо з поля query обєкт

    var parseUrl =  url.parse(req.url,true)

    fs.readFile(getPageByPath(parseUrl.pathname) + '.html', function (err,data) {//acинхронне зчитування | getPageByPath - ця функція верне назву файлу
        if(err) throw  new Error(err);

        res.end(data);
    })
})


function getPageByPath(path) {
    switch (path) {
        case '/':
        case '/home':
            return 'index';
        case '/about':
            return 'about';

        default: return 'error';
    }
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Читання параметрів з консолі

console.log(process.argv)//читаємо команди з масиву н-д node index q=1 r=2  він верне їх як масив

for(var i = 2; i < process.argv.length;i++){
    console.log(process.argv[i])
}

//встановлюємо стороню прогу для простішого паршення консокі прописуємо: npm 1 optimist

var optimist = require('optimist')

console.log(optimist.argv)

//якщо ми хочемо щоб виводило не як масив а як поля  н-д node index- -q=1 --r=2

var message = optimist.argv.message //зчитаємо поле message яке будепо передавати в консоль
//node index --message=Vlad за такою командою ми виведемо  Vlad
console.log('H1 ' + message)//H1 Vlad






