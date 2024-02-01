let minusToggleBtns = document.querySelectorAll(".accordion-tile-heading-minus-icon");
let plusToggleBtns = document.querySelectorAll(".accordion-tile-heading-plus-icon");
let accordionTiles = document.querySelectorAll(".accordion-tile")

showFirstTile()

function showFirstTile() {
    let firstTile = accordionTiles[0]
    firstTile.dataset.status = "visible"   
    let contentWrapper = firstTile.children[1]
    showTileContent(contentWrapper)
}

minusToggleBtns.forEach((el) => {
    el.addEventListener('click', toggleTiles)
})

plusToggleBtns.forEach((el) => {
    el.addEventListener('click', toggleTiles)
})

function toggleTiles(event) {
    accordionTiles.forEach((el)=>{
        el.dataset.status = "hidden"
        let contentWrapper = el.children[1]
        hideTileContent(contentWrapper)
    })

    if(event.currentTarget.classList.contains("accordion-tile-heading-minus-icon"))
        return

    let parentTile = event.currentTarget.parentElement.parentElement
    parentTile.dataset.status = "visible"
    let contentWrapper = parentTile.children[1]
    showTileContent(contentWrapper)
}

function hideTileContent(tileWrapper) {
    tileWrapper.style.maxHeight = "0px"
}

function showTileContent(tileWrapper) {
    tileWrapper.style.maxHeight = tileWrapper.scrollHeight + "px"
}