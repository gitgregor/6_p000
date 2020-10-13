import React from 'react';
import './styles.css'

function Table({data}) {
    return (
        <table>
    <thead>
        <tr>
            <th>Name</th>   
            <th>Registered Course</th>
        </tr>
    </thead>            
    <tbody>
    {data 
? 
    <RenderTableData data={data} />
:
    <tr>
        <td>No student data available</td>
        <td>No student data available</td>
    </tr>
}
    </tbody>
</table>
    )
}



function RenderTableData({data}){
    return (
        <>
            {data.map(student => (
                <tr>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                </tr>
            ))}
        </>
    )
}


export default Table
