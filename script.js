const mainBox = document.querySelector(".main-box")



const makeGrid = (rows, cols) => {
    mainBox.style.setProperty("--grid-rows", rows)
    mainBox.style.setProperty("--grid-cols", cols)
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div")
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = "black"
        })
        mainBox.appendChild(cell).className = "grid-item"
        
    }
}

makeGrid(16,16)
