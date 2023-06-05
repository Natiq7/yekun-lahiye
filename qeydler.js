const liked = JSON.parse(localStorage.getItem('liked')) || []
const div = document.querySelector('.avto-div')
div.innerHTML = ''

liked.forEach(data => {
    const box = `<div class="avto-box">
                    <div class="avto-img">
                        <img src="${data.img}" alt="card 1">
                        <button class="avto-btn">
                            <img src="./img/download.png" alt="save">
                        </button>
                    </div>
                    <h4>${data.h4}</h4>
                    <p>${data.p1}</p>
                    <p>${data.p2}</p>
                    <p>${data.p3}</p>
                </div>`
    div.innerHTML += box
})

document.querySelectorAll('.avto-btn').forEach(btn => {
    btn.addEventListener('click', x => {
        const div = x.target.parentElement.parentElement.parentElement;
        t = div.children[0].children[0].src
        console.log(t)
        let id = -1
        for(let i=0; i<liked.length; i++) {
            if(liked[i].img === t) {
                id = i;
                break
            }
        }
        if(id >=0 ) {
            liked.splice(id, 1)
            localStorage.setItem('liked',JSON.stringify(liked))
            window.location.reload()
        }
    })
})