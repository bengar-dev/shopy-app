const INITIAL_STATE = {
    cart: []
}

function cartReducer(state = INITIAL_STATE, action) {

    switch(action.type) {
        case 'ADDCART': {
            let newArr = []
            const getCart = JSON.parse(localStorage.getItem('cart'))
            const saveCart = () => {
                localStorage.setItem('cart', JSON.stringify(newArr))
            }
            if(!getCart) {
                newArr.push(action.payload)
                saveCart()
            } else {
                newArr = [...getCart]
                let find = getCart.findIndex(p => p.id === action.payload.id)
                if(find === -1) {
                    newArr.push(action.payload)
                    saveCart()
                } else {
                    newArr[find].qty = newArr[find].qty + action.payload.qty
                    saveCart()
                }
            }

            return {
                ...state,
                cart: newArr
            }
        }
    }

    return state
}

export default cartReducer