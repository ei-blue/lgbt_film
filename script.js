const movies = {"Captain Marvel":"Peripheral","I Care a Lot":"Lesbian","Bohemian Rhapsody":"Gay","A Star Is Born":"Peripheral","Solo: A Star Wars Story":"Peripheral","Bird Box":"Peripheral","Birds of Prey":"Bisexual","Blade Runner 2049":"Peripheral","It Chapter Two":"Peripheral","Alien: Covenant":"Peripheral","Get Out":"Peripheral","Guardians of the Galaxy":"Peripheral","Deadpool":"Peripheral","Green Book":"Gay","The Old Guard":"Peripheral","Fantastic Beasts: The Crimes of Grindelwald":"Peripheral","Deadpool 2":"Peripheral","Beauty and the Beast":"Peripheral","The Shape of Water":"Gay","Guardians of the Galaxy Vol. 2":"Peripheral","The Favourite":"Lesbian","The Grand Budapest Hotel":"Peripheral","Ghost in the Shell":"Peripheral","Call Me by Your Name":"Gay","The New Mutants":"Peripheral","Moonlight":"Gay","Star Trek Beyond":"Peripheral","The Imitation Game":"Gay","Atomic Blonde":"Bisexual","The Lobster":"Peripheral","A Simple Favor":"Bisexual","Spotlight":"Gay","Ted":"Peripheral","The Perks of Being a Wallflower":"Gay","Vice":"Peripheral","Onward":"Peripheral","The Intouchables":"Peripheral","Booksmart":"Lesbian","Suspiria":"Peripheral","The Mule":"Peripheral","The World's End":"Peripheral","The Neon Demon":"Peripheral","Sausage Party":"Peripheral","A Million Ways to Die in the West":"Peripheral","Happy Death Day":"Peripheral","Power Rangers":"Peripheral","The Invitation":"Peripheral","Love, Simon":"Gay","Dallas Buyers Club":"Transgender","Bombshell":"Lesbian"}

const panel = document.getElementById('panel');

// div
for (i = 0; i < 50; i++){
    let div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = '';
    panel.appendChild(div);
}

// const interactive = document.getElementById('interactive');

// for (i = 0; i < 3; i++){
//     let parentDiv = document.createElement('div');
//     // div.className = 'card card-flip';
//     parentDiv.className = 'container1';
//     parentDiv.innerHTML = "";
//     let childDiv = document.createElement("div")
//     childDiv.className = 'card target'
//     childDiv.innerHTML = i
//     parentDiv.appendChild(childDiv)
//     interactive.appendChild(parentDiv);
// }

// test
const test = document.getElementById('test');


// for (let key in movies){
//   console.log(key)
// }

// const {jsonData}= require('./assets/movies.json'); 
// console.log(jsonData);


for (let movie in movies){
  let div1 = document.createElement('div');
  div1.className = 'flip-card';
  // div1.className = 'card';
  let div2 = document.createElement("div")
  div2.className = 'flip-card-inner'
  let div3a = document.createElement("div")
  div3a.className = 'flip-card-front'
  div3a.innerHTML = movie
  // div3a.innerHTML += i
  let div3b = document.createElement("div")
  div3b.className = 'flip-card-back'
  div3b.classList.add(movies[movie])
  div3b.innerHTML = movies[movie]
  // childDiv.innerHTML = i
  div2.appendChild(div3a)
  div2.appendChild(div3b)
  div1.appendChild(div2)
  test.appendChild(div1);
}

/* <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1>TEST</h1>
    </div>
    <div class="flip-card-back"></div> */


// div
// for (i = 0; i < 5; i++){
//     let div = document.createElement('div');
//     // div.className = 'card card-flip';
//     div.className = 'card target';
//     div.innerHTML = i;
//     interactive.appendChild(div);
// }



// window.onload = function(){
//     let panel = document.getElementById("panel")
//     for (i=0; i < 10; i++) {
//         let div = document.createElement("div")
//         div.className = "card back"
//         div.index = div.innerHTML = ""
//         panel.appendChild(div)
//     }
// }

// for (i=0; i<5; i++) {
//     // let div = document.createElement("div")
//     panel.appendChild(div)
//     // console.log(i)
// }
