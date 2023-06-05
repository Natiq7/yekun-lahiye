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

const boxes = [...document.querySelectorAll('.avto-box')]
const liked = JSON.parse(localStorage.getItem('liked')) || []

const form = document.querySelector('#search');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    // console.log(data.get('marka'))
    // console.log(data.get('minqiymet'))
    // console.log(data.get('maxqiymet'))
    // console.log(data.get('model'))
    // console.log(data.get('valyuta'))
    // console.log(data.get('minguc'))
    // console.log(data.get('maxguc'))
    // console.log(data.get('minyurus'))
    // console.log(data.get('maxyurus'))
    // console.log(data.get('seher'))
    // console.log(data.get('minil'))
    // console.log(data.get('maxil'))

    const searchBox = []
    boxes.forEach(box => {
        const qiymet = box.children[1].innerText.replaceAll(',','');
        const modelMarkaAg = box.children[2].innerText;
        const yurusIl = box.children[3].innerText;
        const yurus = parseInt(yurusIl.split(', ')[2].replaceAll(' ',''))
        const il = parseInt(yurusIl.split(', ')[1])
        console.log(qiymet)
        const seher = box.children[4].innerText;
        if(modelMarkaAg.includes(data.get('marka'))
        && modelMarkaAg.includes(data.get('model'))
        && qiymet.includes(data.get('valyuta'))
        && seher.includes(data.get('seher'))
        && (
            (data.get('minqiymet') === '' && data.get('maxqiymet') === '')
            || ((parseInt(data.get('minqiymet')) <= parseInt(qiymet) ) 
            && (parseInt(data.get('maxqiymet')) >= parseInt(qiymet) ))
        )
        && (
            (data.get('minyurus') === '' && data.get('maxyurus') === '')
            || ((parseInt(data.get('minyurus')) <= yurus ) 
            && (parseInt(data.get('maxyurus')) >= yurus ))
        )
        && (
            (data.get('minil') === '' && data.get('maxil') === '')
            || ((parseInt(data.get('minil')) <= il ) 
            && (parseInt(data.get('maxil')) >= il ))
        )) { 
            searchBox.push(box);
        }
    })
    const div = document.querySelector('.avto-div');
    div.innerHTML = '';
    searchBox.forEach(box => {
        div.appendChild(box)
    })

});


document.querySelectorAll('.avto-btn').forEach(btn => {
    btn.addEventListener('click', x => {
        const div = x.target.parentElement.parentElement.parentElement;
        const t = {}
        t.img = div.children[0].children[0].src
        t.h4 = div.children[1].innerText
        t.p1 = div.children[2].innerText
        t.p2 = div.children[3].innerText
        t.p3 = div.children[4].innerText
        let find = false
        for(let i=0; i<liked.length; i++) {
            if(liked[i].img ===  t.img) {
                find = true;
                break
            }
        }
        if(!find) {
            liked.push(t)
            localStorage.setItem('liked',JSON.stringify(liked))
        }
    })
})
