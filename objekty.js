// const obj ={
//     imie: "Jan",
//     nazwisko: "Kowalski",
//     wiek: 20,
//     informacje (){
//         console.log("Wyswietlam informacje")
//     },
//     informacjeStrzalkowa: (a) =>{
//         console.log("informacje - fn strzalkowa,a")
//     }
// }

// console.log(obj);
// console.log(obj.nazwisko);

// obj.informacje();
// obj.informacjeStrzalkowa(5);

// const wypis = `To jest ${obj.imie} ${obj.nazwisko}. Ma ${obj.wiek} lat`

const panstwa = [
    {
        nazwa: "Polska",
        stolica: "Warszawa",
        ludnosc: 38
    },
    {
        nazwa: "Niemcy",
        stolica: "Berlin",
        ludnosc: 85
    },
    {
        nazwa: "Japonia",
        stolica: "Tokyo",
        ludnosc: 110    
    },
]

//console.log(panstwa)
//console.log(panstwa[1].nazwa)

// panstwa.forEach( (panstwo) => {
// console.log(panstwo)
// } )

// function kraj (x) {
//     console.log(`To jest ${x.nazwa} - ${x.stolica}`)
// }

// panstwa.forEach(kraj);

const funkcjaFiltrujaca = (a) => {
    console.log(a.ludnosc > 80)
    return a.ludnosc > 80
}

const duzeKraje = panstwa.filter(funkcjaFiltrujaca);

console.log(duzeKraje)