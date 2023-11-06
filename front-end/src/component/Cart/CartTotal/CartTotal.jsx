import { useContext, useState } from "react"
import { CartContext } from "../../../context/CardProvider"

const CartTotal = () => {
    const [fastCargoCheckt, setFastCargoCheckt] = useState(false)

    const { cartItem } = useContext(CartContext)


    const cartItemTotals = cartItem.map((item) => {
        const itemTotal = item.price.newPrice * item.quantity
        return itemTotal
    })
    const subTotals = cartItemTotals.reduce((previousValue, currentValue) => {
        return previousValue + currentValue
    }, 0)

    const kargoFee = 15;


    const cartTotals = fastCargoCheckt ? (subTotals + kargoFee).toFixed(2)
        : subTotals.toFixed(2)
    return (
        <div className="cart-totals">
            <h2>Cart totals
            </h2>
            <table>
                <tbody>
                    <tr className="cart-subtotal">
                        <th>Subtotal</th>
                        <td>
                            <span id="subtotal">${subTotals.toFixed(2)}</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Shipping</th>
                        <td>
                            <ul>
                                <li>
                                    <label>
                                        Fast Cargo: $15.00
                                        <input type="checkbox" id="fast-cargo"
                                            checked={fastCargoCheckt}
                                            onChange={() => setFastCargoCheckt(!fastCargoCheckt)}
                                        />
                                    </label>
                                </li>
                                <li>
                                    <a href="#">Change Address</a>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td>
                            <strong id="cart-total">${cartTotals}</strong>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="checkout">
                <button className="btn btn-lg">Proceed to checkout</button>
            </div>
        </div>)
}

export default CartTotal