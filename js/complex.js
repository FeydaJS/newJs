'use strict';

// FROM LESSON03 =========================

const fun = function(a) {
    if(typeof a !== 'string') {
        console.log('No String');
        return;

    } else {
        let gather = a.trim();

        if(gather.length > 30) {
            gather = gather.substring(0, 29) + '...';
            console.log(gather);
        } 
    }
};

fun(' adss dgsd gsdg sdfsdfsaf!afsafassdfsafasfassdfafdafsfsfdasfssasdfasfaf ');


// FROM LESSON03 =========================

// let question = prompt('Выберите языка "Eng" или "Rus"?');
// let weekRus = ['понедельник', 'вторник', 'среда', 'Четверг', 'Пятница', 'Суббота', 'воскресенье'];
// let weekEng = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];


// if( question == 'Rus' || question == 'rus') {
//     console.log(weekRus);
// } else if( question == 'Eng' || question == 'eng') {
//     console.log(weekEng);
// } else {
//     console.log('Что то пошло не так');
// }

// switch(question) {
//     case 'rus':
//     case 'Rus':
//         console.log(weekRus);
//         break;
//     case 'eng':
//     case 'Eng':
//         console.log(weekEng);
//         break;
//     default:
//         console.log('Что то пошло не так');
// }


// const arr = [
//     ['rus', weekRus],
//     ['eng', weekEng],
//     ['Eng', weekEng],
//     ['Rus', weekRus]
// ];

// for (let i = 0; i < arr.length; i++) {
//     arr[i][0] === question ? console.log(arr[i][1]) : '';
// }


// let namePerson = prompt('Напишите свое имя');

// (namePerson == 'Artem' || namePerson == 'Артем') ? console.log('Director') : 
//     (namePerson == 'Maxim' || namePerson == 'Максим') ? console.log('преподаватель') :
//         console.log('студент');


// FROM LESSON 2 =========================
// let num = 266219;
// mult = ('' + num).split('');
// // console.log(mult);
// p = 1;

// for(var i = 0; i < mult.length; i++) {
//     p *= mult[i];
// }
// console.log(p);
// p = p*p*p;
// console.log(('' + p).substring(0, 2));