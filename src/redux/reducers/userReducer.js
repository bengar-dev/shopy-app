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
            return {
                ...state,
                user: newObject
            }

        }

        case 'DELETEUSER' : {

            console.log(action.payload)

            return {
                ...state,
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
        }

     }

     return state

}


export default userReducer