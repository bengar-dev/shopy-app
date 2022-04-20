const INITIAL_STATE = {
    userForm: []
}

function formReducer(state = INITIAL_STATE, action) {

    switch(action.type) {
        case 'REGISTER': {
            return {
                ...state,
                userForm: action.payload,
                msgState: 1,
                msgForm: 'Vous êtes bien enregistré'
            }
        }
    }

    return state
}

export default formReducer