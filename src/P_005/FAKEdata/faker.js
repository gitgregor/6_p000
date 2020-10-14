import React from 'react'
var faker = require('faker');


 
    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    var randomCard = faker.helpers.createCard(); // random contact card containing many properties

    
    const Fakers = () => {
        return (
            <div>
                <p>{Object.values(randomName).map(name => name)}</p>
                {/* <p>{randomEmail}</p> */}
                {/* <p>{randomCard}</p> */}
            </div>
        )
    }
    
    export default Fakers
    