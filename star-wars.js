// async function pobierzDane (){

// }

// const pobierzDane = async () => {
//     const wynik = await fetch("https://swapi.dev/api/people");
//     const dane = await wynik.json();
//     console.log(dane);
//     //console.log(dane.results[4].name);

// }
// pobierzDane();

const pobierzDane = async () => {
    const wynik = await fetch("https://swapi.dev/api/people");
    const dane = await wynik.json();
    dane.results.forEach((element) => {
        dodajPostac(element)
    })
};


pobierzDane();

{/* <div class="card">
<h3>name: Luke Skywalker</h3>
<span>gender: Rasa: człowiek</span>
<span>hair_color: Kolor włosów: niebieski</span>
<span>skin_color: Kolor skóry: biały</span>
<div>
    <span>height: Wzrost: 172cm</span>
    <span>mass: Waga: 77kg</span>
</div>

</div> */}
const sekcjaKarty = document.querySelector("#wrapper");

const dodajPostac = (postac) => {
    console.log(postac);
    const karta = document.createElement("article");
    karta.classList.add("card");

    const nazwaPostaci = document.createElement("h3");
    nazwaPostaci.textContent = postac.name;

    const plecPostaci = document.createElement("span");
    plecPostaci.textContent = "Płeć: " + postac.gender;

    const kolorWlosow = document.createElement("span");
    kolorWlosow.textContent = " Kolor włosów: " + postac.hair_color;

    const kolorSkory = document.createElement("span");
    kolorSkory.textContent = " Kolor skóry: " + postac.skin_color;

    const wzrost = document.createElement("span");
    wzrost.textContent = "Wzrost: " +  postac.height;

    const waga = document.createElement("span");
    waga.textContent = document.textContent = " Waga: " + postac.mass;

    const div1 = document.createElement("div");
    div1.append(wzrost);
    div1.append(waga)

    karta.append(nazwaPostaci);
    karta.append(plecPostaci);
    karta.append(kolorWlosow);
    karta.append(kolorSkory);
    karta.append(div1);

    sekcjaKarty.append(karta);

}
