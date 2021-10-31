import React from 'react';


const Header = props => {
    return (
        <div>
            <header className="header">
                <div className="container header__inner">
                    <div className="header__title">
                        What happened
                    </div>
                    <div className="header__menu">

                        <ul className="header__menu-list">
                            <i class="fas fa-bars"></i>
                            <li className="header__menu-item" >INTRODUTION</li>
                            <li className="header__menu-item" >SOLUTION</li>
                            <li className="header__menu-item" >RATE PLAN</li>
                            <li className="header__menu-item" >LOGIN</li>
                            <li className="header__menu-item" >APPLY FOR FREE USE</li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
};



export default Header;