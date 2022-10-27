import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SummeryCard from '../SummeryCard/SummeryCard';

const CourseDetails = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div>
                {
                course.map(cs => <SummeryCard
                key={cs._id}
                cs={cs}
                ></SummeryCard>)
            }
        </div>
    );
};

export default CourseDetails;