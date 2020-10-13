import React from 'react';
import { HelloJoe } from '../stories/Hello.stories';



export function IsLoading({loading}) {
    if (loading) {
        return (
            <p> Currently Loading </p>
            )
            
}
else {
    
    return (
        <p>
            HelloJoe

        </p>
    )
}
}


export default function Hello({name}) {
  return (
    <p>Hello {name}!, this is a simple hello world component</p>
  )
}