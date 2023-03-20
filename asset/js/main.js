/* Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const play_button = document.getElementById('play_button')
const row_grill = document.getElementById('row_grill')
const stylepage = document.styleSheets[5]

let click = true
const number_of_bomb = 16

console.log(click);
//all'evento del click si generano 100 celle 
//all'interno della riga con all'interno un paragrafo col numero corispettivo e anche una clesse

play_button.addEventListener('click', function () {
    const select_level = Number(document.getElementById('level').value)
    let number_of_cells = select_level
    //----------cicle of game---------------

        row_grill.innerHTML = ''
        console.log(number_of_cells)
        //----------------- generetor of bombs ---------------
        const bombs = []
        while (bombs.length <= number_of_bomb - 1) {
            let bombs_number = Math.floor(Math.random() * number_of_cells + 1)
            if (bombs.includes(bombs_number)) {
                bombs_number = Math.floor(Math.random() * number_of_cells + 1)
            } else {
                bombs.push(bombs_number)
            }
        }
        console.log(bombs)






        //--------------------generetor of cell------------------
        let i = 1
        while (i < number_of_cells + 1) {

            const cell_el = document.createElement("div");
            const number_into_cell = document.createElement('p')
            number_into_cell.innerHTML = `${i}`
            cell_el.insertAdjacentElement('beforeend', number_into_cell)
            cell_el.classList.add('col', 'square')
            cell_el.style.width = `calc(100% / ${Math.sqrt(number_of_cells)})`
            row_grill.insertAdjacentElement('beforeend', cell_el)
            i++
        }
        //-------------------selector of cells----------------------
        const cell = document.querySelectorAll('.col')
        let cell_free = number_of_cells - number_of_bomb
        console.log(cell_free);
        for (let i = 0; i < cell.length - 1; i++) {
            
            
            
            cell[i].addEventListener('click', function () {
                let number_select = Number(cell[i].innerText)
                let numbers_select = 0
                if (bombs.includes(number_select) ) {
                    cell[i].classList.add('done')
                    setTimeout(() =>{
                        location.reload()
                    },10000)
                    alert(`il numero ${number_select} è stato scelto dal pc`)
                    row_grill.innerHTML = `Hai perso numero di blocchi trovati ${numbers_select}/${cell_free} `
                    click = true
                }else if (numbers_select == cell_free){
                    row_grill.innerHTML = 'Hai vinto'
                    
                }
                console.log(numbers_select)
                if (!cell[i].classList.contains('done') || !cell[i].classList.contains('select') ){
                   
                        cell[i].classList.add('select')
                        numbers_select++
                        console.log(number_select)
                        console.log(numbers_select)
                    }
                
                

            })


        }

    
})
