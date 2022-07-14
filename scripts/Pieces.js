import {getPieces, setPiece} from "./database.js"

const pieces = getPieces()

document.addEventListener(
    "change",
    (event)=> {
        if (event.target.name === "piece"){
            setPiece(parseInt(event.target.value))
        }
    }
)

export const jewelryPieces = () => {
    let html = "<ul>"

    const listItems = pieces.map(piece =>{
        return `<li> <input type="radio" name="piece" value="${piece.id}" /> ${piece.piece} </li>`
    })
    html += listItems.join ("")
    html += "</ul>"

    return html
}