// document.getElementById("count").innerText = 5

let count = 0
function increment (){
    count +=1
    document.getElementById("count").innerText = count
    console.log('button is clicked')
}

let saveEl =document.getElementById('save-el')

function save () {
let countDash = count + "-"
saveEl.innerText+=countDash
document.getElementById("count").innerText = 0
count=0
}
