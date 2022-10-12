let usersString = '[{"id": 1,"name": "Tizio","age": "35","gender": "Maschile"},{"id": 2,"name": "Tizia","age": "25","gender": "Femminile"},{"id": 3,"name": "Caio","age": "20","gender": "Maschile"},{"id": 4,"name": "Sempronio","age": "30","gender": "Maschile"}]'

let users = JSON.parse(usersString)

for (let user of users) {
    console.log(`${user.name} di anni ${user.age} e di sesso ${user.gender}`)
}

localStorage.setItem('esercizio', usersString)

let result = document.getElementById('result')
let counter = 0

onload = function () {
    let counterString = sessionStorage.getItem('cookieNumber')
    if (counterString !== null) {
        counter = JSON.parse(counterString)
        result.innerHTML = counter
    }
}

function startCounter() {
    counter++
    result.innerHTML = counter
    let counterString = JSON.stringify(counter)
    sessionStorage.setItem('cookieNumber', counterString)
}
