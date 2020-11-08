export const initialState = {
    cart: [],
    user: null,
};

//selector
export const getCartTotal = (cart) => 
    cart?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            //add to cart
            return {
                ...state,
                cart: [...state.cart, action.item],
            };

        case 'EMPTY_CART':
            return {
                ...state,
                cart: []
            }
        
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
            
        case 'REMOVE_FROM_CART':
            //remove from cart
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cart];

            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.warn(
                  `Cant remove product (id: ${action.id}) as its not in cart!`
                )
              }
        
              return {
                ...state,
                cart: newCart
              }
              
        default:
            return state;
    }
}

export default reducer;