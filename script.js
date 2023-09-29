const mainBox = document.querySelector(".main-box")



for (let i = 0; i < 50; i++) {
    let box = document.createElement("div")
    box.classList.add("box")
    mainBox.appendChild(box)
}
