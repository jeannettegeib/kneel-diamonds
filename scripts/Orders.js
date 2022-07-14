import { getOrders, getMetals, getStyles, getSizes, getPieces } from "./database.js"
const metals = getMetals();
const styles= getStyles();
const sizes= getSizes();
const pieces=getPieces();
 const order =getOrders();

// Remember that the function you pass to find() must return true/false







const buildOrderListItem = (order) => {
    const foundPiece = pieces.find(
        (piece)=>{
            return piece.id === order.pieceId
        }
    )

    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    const foundStyle = styles.find(
    (style) => {
        return style.id === order.styleId
    }
)
const foundSize = sizes.find(
    (size) => {
        return size.id === order.sizeId
    }
)
    const totalCost = (foundMetal.price + foundStyle.price + foundSize.price)*foundPiece.priceMultiplier;

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} costs ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

