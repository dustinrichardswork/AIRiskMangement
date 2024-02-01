import React, { useEffect } from 'react';

//------// Components //------//
import AnimatedTitle from '../components/titleAnimation';
import RewardsAmount from '../components/rewardAmount';
import SlNotification from '../components/sl_notifiation';
import SplineChart from '../components/charts/spline_chart';

//------// Media //------//
import { ReactComponent as ArrowUpRight } from '../media/svgs/arrow_top_right.svg';
import { ReactComponent as ArrowDownRight } from '../media/svgs/arrow_down_right.svg';
import { ReactComponent as UserCircle } from '../media/svgs/user_circle.svg';
import { ReactComponent as PlusOutline } from '../media/svgs/PlusOutline.svg';
import { ReactComponent as SettingsIcon } from '../media/svgs/setting-2.svg';
import { ReactComponent as DownloadIcon } from '../media/svgs/download.svg';
import { ReactComponent as UploadButton } from '../media/svgs/upload.svg';

//------// Hooks //------//
import useDropdown from '../hooks/useDropdown';


export default function Rewards() { 
    useDropdown();
    function toggleTab(selectorClass, data_open, ev) { 
        const firedTabs = document.querySelectorAll(`.${selectorClass}`);
        firedTabs.forEach( willRemoveShow => {
            willRemoveShow.classList.remove('show');
        });
        firedTabs.forEach(single_tab => {
            const thisTab = (single_tab.getAttribute('data-tab') == data_open) ? true : false;
            if (thisTab) {
                single_tab.classList.add('show');
            }
        });

        // Set current class to
        const targetElm = ev.target;
        const navClass = targetElm.classList[0];
        const clickedElementSiblings = document.querySelectorAll(`.${navClass}`);
        clickedElementSiblings.forEach( willRemoveCurrent => {
            willRemoveCurrent.classList.remove('current');
        });
        targetElm.classList.add('current');
    }
    return (
        <div className="rewards">
            <AnimatedTitle title="Your Rewards" />
            <div className="two_columns">
                <div className="left_column">
                    <div className="rewards_amounts">
                        <RewardsAmount 
                            title="Spending on QMD"
                            arrow={<ArrowUpRight />}
                            direction="up"
                            price="$21.,500.00"
                            percent="12%"
                        />
                        <RewardsAmount 
                            title="Spending on QMD"
                            arrow={<ArrowDownRight />}
                            direction="down"
                            price="$5,392.00"
                            percent="8%"
                        />
                    </div>
                    <div className="wallet_report">
                        <div className="wr_top">
                            <h2>Wallet report</h2>
                            <div className="toggle_bar">
                                <div 
                                    onClick={(ev)=> { toggleTab('toggle_container' , 'qmd_token', ev) }} 
                                    className="toggle_option current" >
                                    QMD TOKEN
                                </div>
                                <div 
                                    onClick={(ev)=> { toggleTab('toggle_container' , 'actual_balence', ev) }} 
                                    className="toggle_option" >
                                    Actual Balance
                                </div>
                            </div>
                        </div>
                        <nav>
                            <div 
                                onClick={(ev)=> { toggleTab('period_tab' , 'weekly', ev) }} 
                                className="nav_option current">
                                Weekly
                            </div>
                            <div 
                                onClick={(ev)=> { toggleTab('period_tab' , 'monthly', ev) }} 
                                className="nav_option">
                                Monthly
                            </div>
                            <div 
                                onClick={(ev)=> { toggleTab('period_tab' , 'year', ev) }} 
                                className="nav_option">
                                Last year
                            </div>
                        </nav>
                        <div className="charts_container">
                            <div className='toggle_container show' data-tab="qmd_token">
                                <div className="period_tab show" data-tab="weekly">
                                    <SplineChart 
                                        horizontal_labels={['3 July', '4 July', '5 July', '6 July', '7 July', '8 July', '9 July']} 
                                    />
                                </div>
                                <div className="period_tab" data-tab="monthly">
                                    <div className="chart_placeholder">QMD MONTHLY</div>
                                </div>
                                <div className="period_tab" data-tab="year">
                                    <div className="chart_placeholder">QMD YEAR</div>
                                </div>
                            </div>
                            <div className='toggle_container' data-tab="actual_balence">
                                <div className="period_tab show" data-tab="weekly">
                                    <div className="chart_placeholder">AB WEEKLY</div>
                                </div>
                                <div className="period_tab" data-tab="monthly">
                                    <div className="chart_placeholder">AB MONTHLY</div>
                                </div>
                                <div className="period_tab" data-tab="year">
                                    <div className="chart_placeholder">AB YEAR</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right_column">
                    <div className="total_balence">
                        <h4>Total balance</h4>
                        <span className="balence_total">$81,910.00</span>
                        <div className="earning_value">
                            <ArrowUpRight />
                            <span>12.81%</span>
                        </div>
                        <div className="send_receive">
                            <div className="transfer_button send">
                                <span>Send</span> <UploadButton />
                            </div>
                            <div className="transfer_button receive">
                                <span>Receive</span> <DownloadIcon />
                            </div>
                        </div>
                        <div className="quick_transfer">
                            <h4>Quick transfer</h4>
                            <div className="users_icons">
                                <UserCircle className='user_svg' />
                                <UserCircle className='user_svg' />
                                <UserCircle className='user_svg' />
                                <UserCircle className='user_svg' />
                                <PlusOutline className='add_user' />
                            </div>
                        </div>
                        <div className="notifications_con">
                            <div className="notifications_top">
                                <h4>Notifications</h4> 
                                <div className="button_dropdown">
                                    <div className="button_trigger">
                                        <SettingsIcon />
                                    </div>
                                    <div className="button_dropdown_content">
                                        <div className="dropdown_option choosen_option">All Activity</div>
                                        <div className="dropdown_option">Applying</div>
                                        <div className="dropdown_option">Completed</div>
                                    </div>
                                </div> 
                            </div>
                            <div className="notifications_wrapper"> 
                                <SlNotification 
                                    username="Josep akbar"
                                    notification_text="Just sent you $10,000"
                                    notification_time="Just now" 
                                /> 
                                <SlNotification 
                                    username="Josep akbar"
                                    notification_text="Just sent you $10,000"
                                    notification_time="Just now" 
                                />  
                                <SlNotification 
                                    username="Josep akbar"
                                    notification_text="Just sent you $10,000"
                                    notification_time="Just now" 
                                />  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}