/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputEl = document.getElementById("input-el");
let convertBtn = document.getElementById("convert-btn");
let firstText = document.getElementById("meter-feet");
let secondText = document.getElementById("litre-gallon");
let thirdText = document.getElementById("kilogram-pound");
const metric = {
  meter: (value) => {
    return (value / 3.281).toFixed(3);
  },
  litre: (value) => {
    return (value / 0.264).toFixed(3);
  },
  kilogram: (value) => {
    return (value / 2.204).toFixed(3);
  },
};
const imperial = {
  foot: (value) => {
    return (value * 3.281).toFixed(3);
  },
  gallon: (value) => {
    return (value * 0.264).toFixed(3);
  },
  pound: (value) => {
    return (value * 2.204).toFixed(3);
  },
};


function compare(changeText, value, metricKey, imperialKey, metricFunction, imperialFunction) {
    
    changeText.innerText = `${value} ${metricKey} = ${imperialFunction} ${imperialKey} | ${value} ${imperialKey} = ${metricFunction} ${metricKey}`
  
}

convertBtn.addEventListener("click", ()=>{
    let value = inputEl.value
    compare(firstText,value, "meters", "feet", metric.meter(value), imperial.foot(value))
    compare(secondText,value, "litres", "gallons", metric.litre(value), imperial.gallon(value))
    compare(thirdText,value, "kilograms", "pounds", metric.kilogram(value), imperial.pound(value))


})

