import React from 'react'

function Header(props) {
    return (
        <>
            <header>
                <div className='container navbar'>
                    <div className='titleWrapper'>
                        <h2 className='navTitle'>{props.title}</h2>
                    </div>
                    <ul className='flex'>
                        {props.navButtons.map((button, index) => (
                            <li className='navList' key={index}>
                                <button className='navbarButtons'>{button}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;