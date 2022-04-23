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

        case 'GETCART' : {
            let newArr = []
            const getCart = JSON.parse(localStorage.getItem('cart'))
            const saveCart = () => {
                localStorage.setItem('cart', JSON.stringify(newArr))
            }
            if(!getCart) {
                saveCart()
            } else {
                newArr = [...getCart]
            }

            return {
                ...state,
                cart: newArr
            }
        }

        case 'EDITCART' : {
            const getCart = JSON.parse(localStorage.getItem('cart'))
            let newArr = [...getCart]
            let findIndex = newArr.findIndex(p => p.id === action.payload.id)
            if(findIndex !== -1) {
                newArr[findIndex].qty = parseInt(action.payload.qty)
            }
            return {
                ...state,
                cart: newArr
            }
        }

        case 'DELCART' : {
            const getCart = JSON.parse(localStorage.getItem('cart'))
            let filterArray = getCart.filter(p => p.id !== action.payload.id)
            return {
                ...state,
                cart: filterArray
            }
        }
    }

    return state
}

export default cartReducer