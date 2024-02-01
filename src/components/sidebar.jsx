import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

/*----------- MEDIA -----------*/
import WebsiteLogo from '../media/main_logo.png';
import { ReactComponent as DashboardIcon } from '../media/svgs/dashboard_icon.svg';
import { ReactComponent as MedicalRecordIcon } from '../media/svgs/medical_record.svg';
import { ReactComponent as NeutronIcon } from '../media/svgs/neutron.svg';
import { ReactComponent as QuarkReflectionIcon } from '../media/svgs/quark_reflectio.svg';
import { ReactComponent as GluonIcon } from '../media/svgs/gluon.svg';
import { ReactComponent as RewardsIcon } from '../media/svgs/rewards.svg';
import { ReactComponent as StatisticsIcon } from '../media/svgs/statistics.svg';
import { ReactComponent as HadronConnectIcon } from '../media/svgs/user.svg';
import { ReactComponent as MonetisationIcon } from '../media/svgs/monetisation.svg';
import { ReactComponent as ResearcherRequestsIcon } from '../media/svgs/researcher_requests.svg';
import { ReactComponent as SettingsIconIcon } from '../media/svgs/settings_icon.svg';
import { ReactComponent as LogoutIcon } from '../media/svgs/right_arrow.svg';
import { ReactComponent as LinkedIn } from '../media/svgs/social/linkedin.svg';
import { ReactComponent as Twitter } from '../media/svgs/social/x_twitter.svg';
import { ReactComponent as Facebook } from '../media/svgs/social/facebook.svg';
import { ReactComponent as Message } from '../media/svgs/social/message_icon.svg';



export default function SideBar() {
    useEffect(() => {
        const menu_links = document.querySelectorAll('.main_sidebar a');
        menu_links.forEach(single_link => {
            single_link.addEventListener('click', () => {
                const menu_controls = document.querySelectorAll('.main_sidebar .menu_control')
                menu_links.forEach(will_remove_current => { will_remove_current.classList.remove('current'); });
                menu_controls.forEach(will_remove_current => { will_remove_current.classList.remove('current'); });

                single_link.classList.add('current')

                const from_dropdown = single_link.closest('.dropdown_container');
                if (from_dropdown) {
                    from_dropdown.querySelector('.menu_control').classList.add('current')
                }
            })
        });
    }, []);
    function OpenSideBar() {
        document.querySelector('.main_sidebar').classList.toggle('open')
        document.querySelector('#root').classList.toggle('no_scroll')
    }
    return (
        <div className='main_sidebar'>
            <div className="logo_container" onClick={() => { OpenSideBar() }}>
                <img src={WebsiteLogo} alt="Logo" />
                <span>My DeMed</span>
            </div>
            <Link className="dashboard_tab" to="/" onClick={() => { OpenSideBar() }}>
                <DashboardIcon /> <span>Dashboard</span>
            </Link>
            <div className="menu_content" onClick={() => { OpenSideBar() }}>
                <div className="links_container" >
                    <div className="dropdown_container menu_item">
                        <div className="menu_control">
                            <MedicalRecordIcon /> <span>Medical Record</span>
                        </div>
                        <div className="dropdown_content">
                            {/* Add current class to the current page */}
                            <Link to="/medical-record/clinician">Clinician</Link>
                            <Link to="/medical-record/third-party">3rd Party</Link>
                            <Link to="/medical-record/self-reported-data">Self Reported</Link>
                        </div>
                    </div>
                    <div className="menu_item">
                        <Link to="/neutron" className="menu_control">
                            <NeutronIcon /> <span>Neutron</span>
                        </Link>
                    </div>
                    <div className="menu_item">
                        <Link to="/quark-reflection" className="menu_control">
                            <QuarkReflectionIcon /> <span>Quark Reflection</span>
                        </Link>
                    </div>
                    <div className="menu_item">
                        <Link to="/gluon" className="menu_control">
                            <GluonIcon /> <span>Gluon</span>
                        </Link>
                    </div>
                    <div className="menu_item">
                        <Link to="/rewards" className="menu_control">
                            <RewardsIcon /> <span>Rewards</span>
                        </Link>
                    </div>
                    <div className="menu_item current">
                        <Link to="/statistics" className="menu_control">
                            <StatisticsIcon /> <span>Statistics</span>
                        </Link>
                    </div>
                    <div className="menu_item">
                        <Link to="/headeron-connect" className="menu_control">
                            <HadronConnectIcon /> <span>Hadron Connect</span>
                        </Link>
                    </div>
                    <div className="menu_item">
                        <Link to="/monetisation" className="menu_control">
                            <MonetisationIcon /> <span>Monetisation</span>
                        </Link>
                    </div>
                    <div className="menu_item">
                        <Link to="/researcher-requests" className="menu_control">
                            <ResearcherRequestsIcon /> <span>Researcher Requests</span>
                        </Link>
                    </div>
                </div>
                <div className="links_container" >
                    <div className="menu_heading">Support</div>
                    <div className="menu_item">
                        <Link to="/settings" className="menu_control">
                            <SettingsIconIcon /> <span>Settings</span>
                        </Link>
                    </div>
                </div>
                <div className="menu_bottom">
                    <Link to="/logout" className='logout'>
                        <LogoutIcon /> <strong>Logout</strong>
                    </Link>
                    <div className="social_icons">
                        <Link> <LinkedIn /> </Link>
                        <Link> <Twitter /> </Link>
                        <Link> <Facebook /> </Link>
                        <Link> <Message /> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}