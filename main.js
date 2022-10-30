var userAge = Number(prompt('Введите возраст'));

if(userAge > 0 && userAge <= 18){
    console.log('Вы еще молоды. Вам нужно учится');
}
else if(userAge >= 19 && userAge <= 50){
    console.log('Вам нужно работать');
}
else if(userAge >= 51 && userAge <= 59){
    console.log('Вам скоро на пенсию');
}
else if(userAge >= 60 && userAge <= 100){
    console.log('Вы пенсионер');
}
else{
    console.log('Что-то пошло не так');
}

