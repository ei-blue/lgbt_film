

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

const movies = {
  "I care a lot": "lesbian",
  "Call me":"gay"
}

for (i=0; i<2; i++){
  console.log(movies[i])
}

for (i = 0; i < 50; i++){
    let div1 = document.createElement('div');
    div1.className = 'flip-card';
    // div1.className = 'card';
    let div2 = document.createElement("div")
    div2.className = 'flip-card-inner'
    let div3a = document.createElement("div")
    div3a.className = 'flip-card-front'
    // div3a.innerHTML = "FRONT"
    // div3a.innerHTML += i
    let div3b = document.createElement("div")
    div3b.className = 'flip-card-back'
    div3b.innerHTML = "BACK"
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
