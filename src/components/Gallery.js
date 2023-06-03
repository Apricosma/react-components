import React from 'react';
import Card from './Card';

function Gallery(props) {
    
    return (
        <>
            <div className='gallery'>
                <div className='grid-container container'>
                    {props.imageUrls.map((url, index) => {
                        return <Card key={index} url={url} />;
                    })}
                </div>
            </div>
        </>
    )
}

export default Gallery