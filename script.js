const subhanAllahDisplay = document.getElementById('subhanAllahDisplay')
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn')
const subhanAllahDecrimentBtn =  document.getElementById('subhanAllahDecrimentBtn')

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay') 
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn')
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn')

const allahAkberDisplay = document.getElementById('allahAkberDisplay') 
const allahAkberIncrimentBtn = document.getElementById('allahAkberIncrimentBtn')
const allahAkberDecrimentBtn = document.getElementById('allahAkberDecrimentBtn')

const resetBtn = document.getElementById('resetBtn')

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahAkberInitialValue = 0;

subhanAllahIncrimentBtn.addEventListener('click', function(){
    if(subhanAllahInitialValue === 33){
        return alert("Subhan Allah Complete. Please Fillup another one")
    }
    subhanAllahInitialValue += 1
    subhanAllahDisplay.innerText = subhanAllahInitialValue

})

subhanAllahDecrimentBtn.addEventListener('click', function(){
    if ( subhanAllahInitialValue ===0){
        return alert("You can't added nagetive value")
    }
    subhanAllahInitialValue -= 1
    subhanAllahDisplay.innerText = subhanAllahInitialValue

})
alhamdulillahIncrimentBtn.addEventListener('click', function(){
    if(alhamdulillahInitialValue === 33){
        return alert("Allahamdulillah Complete. Please Fillup another one")
    }
    alhamdulillahInitialValue += 1
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue

})

alhamdulillahDecrimentBtn.addEventListener('click', function(){
    if ( alhamdulillahInitialValue ===0){
        return alert("You can't added nagetive value")
    }
    alhamdulillahInitialValue -= 1
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue

})
allahAkberIncrimentBtn.addEventListener('click', function(){
    if(allahAkberInitialValue === 33){
        return alert("Allah Akber Complete.")
    }
    allahAkberInitialValue += 1
    allahAkberDisplay.innerText = allahAkberInitialValue

})

allahAkberDecrimentBtn.addEventListener('click', function(){
    if ( allahAkberInitialValue ===0){
        return alert("You can't added nagetive value")
    }
    allahAkberInitialValue -= 1
    allahAkberDisplay.innerText = allahAkberInitialValue

})

resetBtn.addEventListener('click', function(){
    subhanAllahDisplay.innerText = 0
    alhamdulillahDisplay.innerText = 0
    allahAkberDisplay.innerText = 0
    subhanAllahInitialValue = 0
    alhamdulillahInitialValue = 0
    allahAkberInitialValue = 0
})