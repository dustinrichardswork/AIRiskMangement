import React from 'react';
import { Link } from 'react-router-dom';

/*--------- Hooks ---------*/
import { usePopupFunctions } from '../hooks/popups';

/*--------- Media ---------*/
import user_img from '../media/user_img.png';
import main_logo from '../media/main_logo.png';
import { ReactComponent as NotificationIcon } from '../media/svgs/Notification.svg';
import { ReactComponent as InterrogationIcon } from '../media/svgs/interrogation.svg';
import { ReactComponent as ScannerIcon } from '../media/svgs/Scan.svg';

export default function Header() {
    const { openPopup, renderPopup } = usePopupFunctions(); 
    
    function OpenSideBar() {
        document.querySelector('.main_sidebar').classList.toggle('open')
        document.querySelector('#root').classList.toggle('no_scroll')
    }
    return (
        <header>
            {renderPopup()}
            <img src={main_logo} className="main_logo" onClick={() => { OpenSideBar() }} />
            <Link to=""> <ScannerIcon /> </Link>
            <Link to=""> <NotificationIcon /> </Link>
            <Link to=""> <InterrogationIcon /> </Link>
            <img src={user_img} className="user_img" onClick={() => openPopup('SignUp')} />
        </header>
    )
}