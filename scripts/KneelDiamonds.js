
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { Metals } from "./Metals.js"
import {jewelryPieces} from "./Pieces.js"
import {addCustomOrder} from "./database.js"

//const metals = Metals();
// const diamondSize = DiamondSizes();
// const jewelryStyles = JewelryStyles();

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id==="orderButton"){
            addCustomOrder();
        }
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>
        <article class="piece">
        <section class ="piece_choices">
        <h2>I would like to customize a...</h2>
        ${jewelryPieces()}
        </section>
        </article>
        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
               ${JewelryStyles()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}

