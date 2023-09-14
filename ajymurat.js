let bal = 0

alert ('ст россии?');
let joop = prompt ('жооп:');

if(joop=='Москва'|| joop=='москва'){
    alert('жооп туура')
    bal+=10
} else{
    alert('жооп туура эмес')
}

alert ('ст кыргызстана?');
let joop2 = prompt ('жооп:');

if(joop2=='Бишкек'|| joop2=='бишкек'){
    alert('жооп туура')
    bal+=10
} else{
    alert('жооп туура эмес')
}

alert ('эгемендуулук кун?');
let joop3 = prompt ('жооп:');

if(joop3=='31-август'|| joop3=='31.08'){
    alert('жооп туура')
    bal+=10
} else{
    alert('жооп туура эмес')
}

alert ('компьютердин мээси?');
let joop4 = prompt ('жооп:');

if(joop4=='Борбордук процессор'|| joop4=='процессор'){
    alert('жооп туура')
    bal+=10
} else{
    alert('жооп туура эмес')
}

alert ('Ак кеме кимдин чыгармасы?');
let joop5 = prompt ('жооп:');

if(joop5=='Ч.Айтматов'|| joop5=='Чынгыз Айтматов'){
    alert('жооп туура')
    bal+=10
} else{
    alert('жооп туура эмес')
}


alert ('230+120=');
let joop6 = prompt ('жооп:');

if(joop6=='350'){
    alert('жооп туура')
    bal+=10
} else{
    alert('жооп туура эмес')
}


alert ('20*30=');
let joop7 = prompt ('жооп:');

if(joop7=='600'){
    alert('жооп туура')
    bal+=10
} else{
    alert('жооп туура эмес')
}

alert ('140+310=');
let joop8 = prompt ('жооп:');

if(joop8=='450'){
    alert('жооп туура')
    bal+=10
} else{
    alert('жооп туура эмес')
}

alert ('465-260=');
let joop9 = prompt ('жооп:');

if(joop9=='205'){
    alert('жооп туура')
    bal+=10
} else{
    alert('жооп туура эмес')
}

alert ('81*9');
let joop10 = prompt ('жооп:');

if(joop10=='729'){
    alert('жооп туура')
    bal+=10
} else{
    alert('жооп туура эмес')
}

alert(bal)
if (bal>=90) {
    alert('ваша оценка: 5')
} else if (bal>=80 && bal<=89) {
    alert('ваша оценка: 4')
} else if (bal>=70 && bal<=79) {
    alert('ваша оценка: 3')
} else{
    alert('ваша оценка: 2 и вы не прошли тест, вы можете сдать еще тест раз через 2 часа!')
}