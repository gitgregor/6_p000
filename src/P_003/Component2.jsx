
import React, {useContext} from 'react'
import {Context} from './Provider003'

const Component2 = () => {

const {state, actions} = useContext(Context)


const action2 = () => {
actions.secondAction("Fotons")
}


const {user} = state
const {name} =user

console.log(user)
    return (
        <div>
            {user}
                <button  onClick={()=> action2()}>
                    2. update me
                </button>
        </div>
)
}

export default Component2
