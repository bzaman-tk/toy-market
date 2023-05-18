import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);
    return (
        <div>
            hi
        </div>
    );
};

export default SingleToy;