import {upATT} from "./info.js"
import {dATT} from "./card.js"
import {att,bAtt, bATt, bATT} from "./img.js"

const One = {
    title : "MARS",
    para  : "Mars is the fourth planet from the Sun. The surface of Mars is orange-red because it is covered in iron(III) oxide dust, giving it the nickname 'the Red Planet'",
    btn   : "View",
    myImg   : "me.jpg"
}

const Two = {
    titleO: "Projects",
    myPIC  : "roc.avif",
    paraW : "A spacecraft is a vehicle that is designed to fly in outer space and operate there. Spacecraft are used for a variety of purposes, including communications, Earth observation, meteorology, navigation, space colonization, planetary exploration, and transportation of humans and cargo.",
    stBtn  : "Learn More",
    myPIc  : "astro.jpg",
    paraT : "An astronaut is someone who travels in space. While the term was once reserved for military-trained professionals, recent accessibility of space travel has seen the term astronaut now used to refer to anyone traveling in a spacecraft, including civilians.",
    ndBtn  : "Learn More",
    myPic  : "station.jpg",
    paraTr : "It serves as a home where crews of astronauts and cosmonauts live. The space station is also a unique science laboratory. Several nations worked together to build and use the space station. The space station is made of parts that were assembled in space by astronauts.",
    rdBtn  : "Learn More"
}

//des
const {title, para, btn, myImg} = One
const {titleO, myPIC, paraW, stBtn, myPIc, paraT, ndBtn, myPic, paraTr, rdBtn} = Two

let container = document.getElementById("sectionONe")
let containers = document.getElementById("sectionTWo")

container.append(upATT(title, para, btn, myImg))
containers.append(dATT(titleO, paraW, stBtn, paraT, ndBtn, paraTr, rdBtn, myPIC,myPIc,myPic))