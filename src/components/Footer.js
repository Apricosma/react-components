import React from 'react';

function Footer(props) {
    return (
        <footer>
            <div className='container footer-bar'>
                <ul className='flex'>
                    {props.footerList.map((button, index) => (
                        <li className='navList' key={index}>
                            <button className='navbarButtons'>{button}</button>
                        </li>
                    ))}
                </ul>
                <p className='copyright'>&copy; 2023 Apricosma</p>
            </div>
        </footer>
    )
}

export default Footer;