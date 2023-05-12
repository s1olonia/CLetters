let input = document.querySelector('.userText')
let btn = document.querySelector('.btn')
let btnClear = document.querySelector('.btn-clear')

btn.addEventListener('click', addLetters = () => {
    // let ul = document.querySelector('.list').innerHTML = ''
    let ul = document.querySelector('.list')
    ul.innerHTML = ''

    let inputLength = input.value.length

    console.log('clicked')
    let letters = {}

    for ( let i = 0; i < input.value.length; i++ ) {
        const letter = input.value[i]

        if ( letters[ letter ] ){
            letters[ letter ]++
        } else {
            letters[ letter ] = 1 
        }       
    }


    let keySort = Object.keys(letters).sort( function( a, b ) {
        return letters[b] - letters[a]
    })


    for ( let i = 0; i < keySort.length; i++ ) {
        let d = keySort[i]
        let interest = letters[d] / inputLength * 100

        ul.insertAdjacentHTML ( 'beforeend', 
        `<li> "${d}": ${letters[d]} - ${interest.toFixed(3)} %</li>`)
    }

    input.value = ''
})

btnClear.addEventListener('click', (event) => {
    console.log('clicked clear')
    const listItem = document.querySelectorAll('li')

    if ( listItem.length > 0 ){
        listItem.forEach(item => item.remove());
    }
}) 

window.addEventListener('keypress', (e) => {
    if ( e.keyCode === 13 ){
        addLetters()
    }
})