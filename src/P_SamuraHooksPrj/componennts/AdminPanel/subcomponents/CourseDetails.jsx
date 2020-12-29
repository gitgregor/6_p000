import React, { useContext, useState } from 'react'
import request from '../../../helpers/request';
import { StoreContext } from '../../../store/StoreProvider';
import CoursePopup from './CoursePopup';

const CourseDetails = (props) => {
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const {setCourses} =useContext(StoreContext)
    const { id, title } = props

const showPopup = () => setIsOpenPopup(true)

const hidePopup = event => {
    if(event){
    event.preventDefault();
    }
    setIsOpenPopup(false)
}

const handleDeleteCourses = async () => {
    try {
        const {status} = await request.delete(`/courses/${id}`); 

        if(status === 200){
            setCourses(prev => prev.filter(course => course.id !== id))
        }
    } catch (error) {
        console.warn(console.error())
    }
}



    return (
        <details>
            <summary>{title}</summary>
            <button onClick={showPopup}>Edytuj</button>
            <button onClick={handleDeleteCourses} >Usuń</button>
            <CoursePopup  isOpenPopup={isOpenPopup}  hidePopup={hidePopup}  {...props}/>
        </details>
    )
}

export default CourseDetails
