
export const initialState = {user: "Xray"}


const reducer = (state, action) => {
    switch (action.type) {

    case "actNr1":
        return { user: action.payload }

    case "actNr2":
        return { user: action.payload }

    default:
        return state
    }
}

export default reducer