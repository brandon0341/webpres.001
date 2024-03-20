

const upATT = (title, para, button, image) => {
    let uDiv = document.createElement("div")
    uDiv.className = "intro"
    uDiv.innerHTML = `<h1 class="prof" >${title}</h1>
                      <p>${para}</p>
                      <button class="animateds-button">${button}
                      <span></span>
                      <span></span>
                      </button>

                      <img class="me" src="/IMGS/${image}" alt="${image}">`

    return uDiv
}

export {upATT}