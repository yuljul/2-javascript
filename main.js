

var myage = +prompt ('Введите свой возвраст')

if (myage === 0 || myage === 1 || myage === 2 || myage === 3 || myage === 4 || myage === 5 || myage === 6 || myage === 7 || myage === 8 || myage === 9 || myage === 10 || myage === 11
    || myage === 12 || myage === 13 || myage === 14 || myage === 15 || myage === 16 || myage === 17 || myage === 18) {
    
    alert ('Вы еще молоды, вам нужно учиться');
} else if (myage > 18 && myage <= 50) 

    {alert ('Вы должны работать')
} else if (myage > 50 && myage <= 59) {

    alert ('Вам скоро на пенсию')
} else if (myage > 59 && myage <= 100) {

    alert ('Вы пенсионер')
} else {

    alert ('Что-то пошло не так')
}



var mytime = +prompt ('Введите время')

switch (mytime) {
    case 0:
    alert ('Сейчас полночь');
    break;
    case 1:
    alert ('Сейчас час ночи');
    break;
    case 2:
    alert ('Сейчас 2 часа ночи');
    break;
    case 3:
    alert ('Сейчас 3 часа ночи');
    break;
    case 4:
    alert ('Сейчас 4 часа ночи');
    break;
    case 5:
    alert ('Сейчас 5 часов ночи');
    break;
    case 6:
    alert ('Сейчас 6 часов ночи');
    break;

    case 7:
    alert ('Сейчас 7 часов утра' );
    break;
    case 8:
    alert ('Сейчас 8 часов утра' );
    break;
    case 9:
    alert ('Сейчас 9 часов утра' );
    break;
    case 10:
    alert ('Сейчас 10 часов утра' );
    break;
    case 11:
    alert ('Сейчас 11 часов утра' );
    break;


    case 12:
    alert ('Сейчас 12 часов дня' );
    break;
    case 13:
    alert ('Сейчас час дня' );
    break;
    case 14:
    alert ('Сейчас 2 часа дня' );
    break;
    case 15:
    alert ('Сейчас 3 часа дня' );
    break;


    case 16:
    alert ('Сейчас 4 часа вечера' );
    break;
    case 17:
    alert ('Сейчас 5 часов вечера' );
    break;
    case 18:
    alert ('Сейчас 6 часов вечера' );
    break;
    case 19:
    alert ('Сейчас 7 часов вечера' );
    break;
    case 20:
    alert ('Сейчас 8 часов вечера' );
    break;
    case 21:
    alert ('Сейчас 9 часов вечера' );
    break;
    case 22:
    alert ('Сейчас 10 часов вечера' );
    break;
    case 23:
    alert ('Сейчас 11 часов вечера' );
    break;

    default:
    alert('Нет такого времени');
    break;
}




var one = +prompt ('Введите первое число')
var two = +prompt ('Введите теперь второе')
var three = +prompt ('Введите третье')

if (one > two > three && !isNaN(one) && !isNaN(two) && !isNaN(three) ) {
    
    alert (two);

} else if(one < two > three && !isNaN(one) && !isNaN(two) && !isNaN(three) ) {
    
    alert (one);

} else if(one > two < three && !isNaN(one) && !isNaN(two) && !isNaN(three) ) {
    
    alert (three);

} else if(three > two > one  && !isNaN(one) && !isNaN(two) && !isNaN(three) ) {
    alert (two)

} else if(three < two > one  && !isNaN(one) && !isNaN(two) && !isNaN(three) )  {
    alert (three)
}


else {
    alert ('Это не число');
}