import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import { getCartTotal } from '../reducer';
import { useHistory } from "react-router-dom";

function Subtotal() {
    const [{cart, user}, dispatch] = useStateValue();
    const history = useHistory();
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <div>
                    <p>Subtotal ({cart.length} items): <strong>{value}</strong></p>
                    <small className="subtotal__gift"><input type="checkbox"/>This Order Has A Discount</small>
                    </div> 
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => history.push('/payment')} disabled={cart.length == 0 || !user}>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal;
