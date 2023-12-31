const mainBox = document.querySelector(".main-box")
const griSize = document.querySelector("#grid-size")
const gridSizeLabel = document.querySelector(".grid-size-label")
const newGridBtn = document.querySelector(".new-grid")
const resetbtn = document.querySelector(".reset")
const colorbtn = document.querySelector(".color")
console.log(colorbtn.value)


griSize.addEventListener("input", () => {
    let size = griSize.value
    gridSizeLabel.textContent = `${size}x${size}`
})


const makeGrid = (rows, cols) => {
    mainBox.style.setProperty("--grid-rows", rows)
    mainBox.style.setProperty("--grid-cols", cols)
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div")
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = colorbtn.value
        })
        mainBox.appendChild(cell).className = "grid-item"
        
    }
}


newGridBtn.addEventListener("click", () => {
    let size = griSize.value
    
    while (mainBox.firstChild) {
    mainBox.removeChild(mainBox.firstChild)
    }
    
    makeGrid(size,size)
})

resetbtn.addEventListener("click", () => {
    let size = griSize.value
    
    while (mainBox.firstChild) {
    mainBox.removeChild(mainBox.firstChild)
    }
    
    makeGrid(size,size)
})


makeGrid(16,16)


