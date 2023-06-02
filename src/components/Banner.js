import React from 'react';
import Button from './Button';

function Banner(props) {
    return (
        <>
            <section className='banner-background banner'>
                <div className='banner-wrapper flex container'>
                    <h2 className='banner-title'>{props.bannerTitle}</h2>
                    <p className='banner-content'>{props.bannerContent}</p>
                    <div className='banner-buttons'>
                        <Button
                            name='Primary'
                            isPrimary={true}
                        />
                        <Button
                            name='secondary'
                            isPrimary={false}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner