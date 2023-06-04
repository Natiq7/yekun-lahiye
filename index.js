let marka = ["Mercedes", "BMW","AUDI","FORD","TOYOTA"];
let Mercedes = ["CLS 63 AMG", "SLR","GLE 43 AMG"];
let BMW = ["M5", "X5","530"];
let AUDI = ["A6", "Q7","A4"];
let FORD = ["Mustang", "Shelby gt500","F-150"];
let TOYOTA = ["Camry", "Land Cruiser","Prius"];

let sclt1 = document.getElementById('markaslct');
let sclt2 = document.getElementById('modelslct');

marka.forEach(function addMarka(item){
    let option = document.createElement("option");
    option.text=item;
    option.value=item;
    sclt1.appendChild(option);
});

sclt1.onchange = function(){
    sclt2.innerHTML="<option></option";
    if(this.value == "Mercedes"){
        addToSclt2(Mercedes);
    }
    if(this.value == "BMW"){
        addToSclt2(BMW);
    }
    if(this.value == "AUDI"){
        addToSclt2(AUDI);
    }
    if(this.value == "FORD"){
        addToSclt2(FORD);
    }
    if(this.value == "TOYOTA"){
        addToSclt2(TOYOTA);
    }
}


function addToSclt2(arr){
arr.forEach(function (item){
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    sclt2.appendChild(option);
});
}



