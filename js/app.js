let input = document.querySelector('.userText')
let btn = document.querySelector('.btn')

btn.addEventListener('click', addLetters = () => {
    console.log('clicked')
    let letters = {}

    for (let i = 0; i < input.value.length; i++) {

        for (let j = 0; j <= Object.keys(letters).length; j++) {

            if (input.value[i] !== Object.keys(letters)[j]) {
                letters[input.value[i]] = 0
            }
        }
    }

    for ( let a = 0; a <= Object.keys(letters).length; a++ ) {

        for ( let b = 0; b < input.value.length; b++ ) {

            if (input.value[b] === Object.keys(letters)[a]) {
                letters[Object.keys(letters)[a]]++
            }
        }
    }

    let keySort = Object.keys(letters).sort( function( a, b ) {
        return letters[b] - letters[a]
    })

    let ul = document.querySelector('.list')
    let inputLength = input.value.length


    for ( let i = 0; i < keySort.length; i++ ) {
        let d = keySort[i]
        let interest = letters[d] / inputLength * 100

        ul.insertAdjacentHTML ( 'beforeend', 
        `<li> "${d}": ${letters[d]} - ${interest.toFixed(3)} %</li>`)
    }
})
