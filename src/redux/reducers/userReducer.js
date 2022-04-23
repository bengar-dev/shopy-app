const INITIAL_STATE = {
    user: {
        firstname: '',
        lastname: '',
        birthdate: '',
        address: '',
        zipcode: '',
        city: '',
        email: '',
        phone: ''
    }
}

function userReducer(state = INITIAL_STATE, action) {

    switch(action.type) {

        case 'HANDLEUSER' : {
            
            let newObject = {...state.user}
            newObject[action.payload.id] = action.payload.value
            console.log(newObject)
            return {
                ...state,
                user: newObject
            }

        }

     }

     return state

}


export default userReducer