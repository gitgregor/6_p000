
import React, {useContext} from 'react'
import {Context} from './Provider003'

const Component1 = () => {
const {state, actions} = useContext(Context)

const action1 = () => {
actions.firstAction("Plasma")
}

const {user} = state
const {name} =user

console.log(user)
    return (
        <div>
            {user}
                <button  onClick={()=> action1()}>
                   1. update me
                </button>
        </div>
)}

export default Component1
