

const dATT = (titleWan, paraO, btnO, paraT, btnT, paraTh, btnTh, myPIC, myPIc, myPic) => {
    let dDiv = document.createElement("div")
    dDiv.innerHTML =   `<h1 class="pro">${titleWan}</h1>
                        <div class="wrapp">
                        <img class="ba" src="/IMGS/${myPIC}" alt="${myPIC}">
                        <p class="one">${paraO}</p>
                        <button class="animated-button">${btnO}
                        <span></span>
                        <span></span>
                        </button>
                        </div>
                        <div id="wrappe">
                        <img class="bac" src="/IMGS/${myPIc}" alt="${myPIc}">
                        <p class="two">${paraT}</p>
                        <button class="animated-button">${btnT}
                        <span></span>
                        <span></span>
                        </button>
                        </div>
                        <div class="wrapper">
                        <img class="back" src="/IMGS/${myPic}" alt="${myPic}">
                        <p class="tree">${paraTh}</p>
                        <button class="animated-button">${btnTh}
                        <span></span>
                        <span></span>
                        </button>
                        </div>`
                        

    return dDiv
}

export {dATT}