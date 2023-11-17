import { useContext } from "react"
import CartItem from "../CartItem/CartItem"
import { CartContext } from "../../../Context/CardProvider"

const CartTable = () => {

    const { cartItem } = useContext(CartContext)
    return (
        <table className="shop-table">
            <thead>
                <tr>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-subtotal">Subtotal</th>
                </tr>

            </thead>
            <tbody className="cart-wrapper">
                {cartItem.map((item)=>(
                    <CartItem  cartItem={item} key={item.id}/>

                ))}

            </tbody>
        </table>)
}

export default CartTable