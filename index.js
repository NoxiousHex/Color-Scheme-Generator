
document.getElementById("picker-btn").addEventListener('click', e => {
    const colorSeed = document.getElementById('color-picker').value
    const scheme = document.getElementById('scheme-picker').value
    getColorScheme(colorSeed, scheme)
    
})

function getColorScheme(seed, scheme) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${seed.substring(1)}&mode=${scheme}`)
        .then(res => res.json())
        .then(data => getColorHtml(data))
}

function getColorHtml(data) {
    const stripeWidth = 100 / data.count
    const colorContainer = document.getElementById("color-container")
    const colors = document.createDocumentFragment()
    data.colors.forEach(color => {
        const colorStripe = document.createElement('div')
        colorStripe.style.backgroundColor = color.hex.value
        colorStripe.className = "color-stripe"
        
        const hexCode = document.createElement('p')
        hexCode.textContent = color.hex.value
        hexCode.className = "color-hex"
        
        colors.append(colorStripe)
        colors.append(hexCode)
    })
    colorContainer.innerHTML = ''
    colorContainer.append(colors)
}

function renderColors() {
    
}
