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

            row_grill.innerHTML = '' ;
            console.log(number_of_cells);

        //----------------- generetor of bombs ---------------

            const bombs = generatBombs(number_of_bomb,number_of_cells);
            console.log(bombs);

        //--------------------generetor of cell------------------

            generatCell(number_of_cells);

        //-------------------selector of cells----------------------
        
        const cell = document.querySelectorAll('.col')
            for (let i = 0; i < cell.length - 1; i++) {
                
                
                cell[i].addEventListener('click', function e () {
                    let number_select = Number(cell[i].innerText)
                    const cell_free = number_of_cells - number_of_bomb
                    
                    let numbers_select = 0
                    //------------------ if is a bomb------------
                    if (bombs.includes(number_select) ) {

                        case_for_gameover(number_select,cell,i,bombs)
                    //------------------ if win-----------------
                    }else if (numbers_select == cell_free){

                        row_grill.innerHTML = 'Hai vinto'
                        
                    }

                    console.log(numbers_select)
                    //--------------------if is in game---------------
                    if (!cell[i].classList.contains('done') || !cell[i].classList.contains('select') ){
                    
                            cell[i].classList.add('select')
                            numbers_select++
                            console.log(number_select)
                            console.log(numbers_select)
                        }
                    
                    

                })


            }

    
})
//-------------------------- Function-----------------------------------------
    function generatBombs(number_of_bomb,number_of_cells) {
        // genera un array  vuoto 
        const bombs = []
        // ciclo per riempire l'array 
        while (bombs.length <= number_of_bomb - 1) {
            // crea un bomba random
            let bombs_number = Math.floor(Math.random() * number_of_cells + 1)
            // verifica se è gia presente nell'array per evitare doppioni
            if (!bombs.includes(bombs_number)) {
                //non è incluso quindi la include
                bombs.push(bombs_number)
            }
        }
        // restituisce un array pieno di bombe 
        return bombs
    }

    function generatCell(number_of_cells) {
        let i = 1
        // ciclo per riempire la riga di colonne(celle)
        while (i < number_of_cells + 1) {
            //crea un teg 'div'
            const cell_el = document.createElement("div");
            // crea un tag 'p'
            const number_into_cell = document.createElement('p')
            // all'interno del tag 'p' inserisce il numero del ciclo(quindi della cella)
            number_into_cell.innerHTML = `${i}`
            // inserisce il tag 'p' all'interno del tag 'div'
            cell_el.insertAdjacentElement('beforeend', number_into_cell)
            // al tag 'div' da due classi col e square
            cell_el.classList.add('col', 'square')
            // al tag 'div' da una larghezza dinamica a seconda del numero di celle totali
            cell_el.style.width = `calc(100% / ${Math.sqrt(number_of_cells)})`
            //inserisce il tag 'div' all'interno della riga 'row'
            row_grill.insertAdjacentElement('beforeend', cell_el)
            //passa alla cella successiva 
            i++
        }
    }

    function case_for_gameover(number_select,cell,i,bombs) {
        // genera un messaggio di allerta 
        alert(`il numero ${number_select} è stato scelto dal pc`)
        // aggiunge una classe alla cella (colore di sfondo rosso)
        cell[i].classList.add('done')
        // e gli inserisci l'emoji' b
        cell[i].textContent = '💣'
        // prende tutti i 'div' con classe col 
        const cell_el = document.querySelectorAll('.col')
        // crea un ciclo per segnare tutte le bombe restanti
        for (let i = 0; i < cell_el.length; i++) {
            // assoccia a cell la cella selezionata
            const cell= cell_el[i];
            // associa a cell_number il numero della cella selezionata 
            const cell_number = Number(cell.innerText)
            // se la cella è una cella con la bomba 
            if(bombs.includes(cell_number))
            // gli dai la classe done ( colore di sfondo rosso)
            {cell.classList.add('done')
            // e gli inserisci l'emoji' b
            cell.textContent = '💣'}
        }
    }   


    function case_of_ingame(numbers_select, cell, i) {
        
        cell[i].classList.add('select')
        numbers_select++
       
    }