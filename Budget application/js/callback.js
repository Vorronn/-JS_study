function first() {
    setTimeout( function(){
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnLangs(lang, callback) {
    console.log('Я учу ' + lang);
    callback();
}

// learnLangs('JavsScript', function(){
//     console.log('Я прошел 3 урок');
// });

function done() {
    console.log('Я прошел 3 урок');
}

learnLangs('JavaScript', done);