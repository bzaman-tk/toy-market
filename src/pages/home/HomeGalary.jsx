import * as React from "react";
import one from '../../assets/gallary/1.jpeg';
import two from '../../assets/gallary/2.webp';
import three from '../../assets/gallary/3.jpeg';
import four from '../../assets/gallary/4.webp';
import five from '../../assets/gallary/5.jpg';
import six from '../../assets/gallary/6.png';
import seven from '../../assets/gallary/7.jpeg';
import eight from '../../assets/gallary/8.jpg';
import nine from '../../assets/gallary/9.webp';
import { PhotoAlbum } from 'react-photo-album';
import { useState } from 'react';
import { Lightbox } from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";


const HomeGalary = () => {
    const [index, setIndex] = useState(-1);

    const photos = [
        { src: one, width: 800, height: 600 },
        { src: seven, width: 1600, height: 900 },
        { src: four, width: 800, height: 600 },
        { src: nine, width: 1600, height: 900 },
        { src: six, width: 800, height: 600 },
        { src: two, width: 1600, height: 900 },
        { src: eight, width: 1600, height: 900 },
        { src: three, width: 800, height: 600 },
        { src: nine, width: 1600, height: 900 },
        { src: five, width: 800, height: 600 },
    ];

    return (
        <>
            <div className="mb-12 text-center w-1/3 mx-auto mt-20">
                <h2 className="text-3xl font-extrabold">Product Image Gallary</h2>
                <p className="mt-3 text-center">Welcome to our enchanting toy shop, where imagination comes alive! </p>
            </div>
            <PhotoAlbum
                layout="rows"
                photos={photos}
                targetRowHeight={150}
                onClick={({ index }) => setIndex(index)}
            />

            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={photos}
            />

        </>
    )

};

export default HomeGalary;