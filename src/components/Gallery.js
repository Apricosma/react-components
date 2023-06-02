import React from 'react';
import Card from './Card';

function Gallery(props) {
    // add an image and it will automatically be added to the gallery!
    const imageUrls = [
		'https://files.catbox.moe/gp7jgm.jpg',
        'https://files.catbox.moe/bxlmr1.jpg',
        'https://files.catbox.moe/uytll8.jpg',
        'https://files.catbox.moe/zz7vd2.jpg',
	]
    return (
        <>
            <div className='gallery'>
                <div className='grid-container container'>
                    {imageUrls.map((url, index) => {
                        return <Card key={index} url={url} />;
                    })}
                </div>
            </div>
        </>
    )
}

export default Gallery