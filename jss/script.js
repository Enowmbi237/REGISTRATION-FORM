const mytext1 = document.getElementById("mytext")
const mysubmit = document.getElementById("mysubmit")
const resultElement = document.getElementById("resultElement")
let age;




mysubmit.onclick = function () {

    age = mytext1.value;
    age = Number(age);

    if (age >= 100) {

        resultElement.textContent = 'you are too old to enter this site'
    }
    else if (age == 0) {
        resultElement.textContent = 'you cant enter. you were just born.'

    }
    else if (age >= 18) {
        resultElement.textContent = 'you are old enough to enter this site'

    }
    else if (age < 0) {
        resultElement.textContent = 'your age cant be below 0'

    }
    else {
        resultElement.textContent = 'you must be 18+ to enter this sites'


    }
}



















