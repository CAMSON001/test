
let counter = document.getElementById("count-el");
let saves = document.getElementById("save");
let emplacement = document.getElementById("previous")
let greet = "Previous entries: "


emplacement.textContent = greet 
let count = 0;

function increment(){
    console.log("clicked");
    count++;
    counter.innerText = count ;
} 

function discrement(){
    if (count === 0){
        console.log("clicked");
        count=0;

    }
    else {
        console.log("clicked");
        count--;
    }
    counter.innerText = count ;
} 

function save(){
    console.log(count);
    emplacement.textContent += count+" - "
    counter.innerText = 0 ;
    count = 0
}

