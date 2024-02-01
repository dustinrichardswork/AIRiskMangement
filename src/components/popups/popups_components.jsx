import React from 'react';

/*-------------// Media //------------*/
import { ReactComponent as FacebookIcon } from '../../media/svgs/social/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../media/svgs/social/x_twitter.svg';
import { ReactComponent as X_icon } from '../../media/svgs/help.svg';
import { ReactComponent as CheckIcon } from '../../media/svgs/check_circle.svg';
import { ReactComponent as EmailIcon } from '../../media/svgs/email.svg';

export function SignUpPopup({ onClose }) {
    const validateEmail = (email) => {
        return String(email).toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    function checkInput(ev) {
        // Check if input is empty
        if (ev.target.value.trim() !== "") {
            ev.target.classList.add('not_empty');
            
            // Validate Email If input is not empty
            console.log(ev.target.getAttribute('type'))
            if (ev.target.getAttribute('type') == 'email') {
                if (!validateEmail(ev.target.value)) {
                    ev.target.closest('.field_container').classList.add('field_error');
                } else {
                    ev.target.closest('.field_container').classList.remove('field_error');
                }
            }
        } else {
            ev.target.classList.remove('not_empty');
        }
    }
    return (
        <div className="popup_overlay" onClick={onClose}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
                <div className="popup_content">
                    <div className="top_heading">
                        <div className="left_side">
                            <h2>Sign up</h2>
                            <p>Enter your details below</p>
                        </div>
                        <div className="right_side">
                            <span>Log in</span>
                        </div>
                    </div>
                    <div className="form_container sign_up">
                        <div className="field_container">
                            <input type="text" id='sign_up_full_name' onChange={(ev) => { checkInput(ev) }} />
                            <label htmlFor="sign_up_full_name">Full name</label>
                        </div>
                        <div className="field_container">
                            <input type='email' id='sign_up_email' onChange={(ev) => { checkInput(ev) }} />
                            <label htmlFor="sign_up_email">Email address</label>
                            <span className="error_message">That format doesn't look right. Make sure there aren't any typos.</span>
                        </div>
                        <div className="field_container">
                            <input type='password' id='sign_up_password' onChange={(ev) => { checkInput(ev) }} />
                            <label htmlFor="sign_up_password">Create Password</label>
                        </div>
                        <div className="field_container">
                            <input type='password' id='sign_up_confirm_password' onChange={(ev) => { checkInput(ev) }} />
                            <label htmlFor="sign_up_confirm_password">Confirm Password</label>
                        </div>
                        <div className="acceptance">
                            <input type="checkbox" id="acceptance" onChange={(ev) => { checkInput(ev) }} />
                            <label htmlFor="acceptance">By creating an account you agree to Privacy Policy</label>
                        </div>
                        <button className="submit_form">Sign Up</button>
                        <button className="wallet_continue">Continue with wallet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function SignInPopup({ onClose }) {
    const validateEmail = (email) => {
        return String(email).toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    function checkInput(ev) {
        // Check if input is empty
        if (ev.target.value.trim() !== "") {
            ev.target.classList.add('not_empty');
            
            // Validate Email If input is not empty
            console.log(ev.target.getAttribute('type'))
            if (ev.target.getAttribute('type') == 'email') {
                if (!validateEmail(ev.target.value)) {
                    ev.target.closest('.field_container').classList.add('field_error');
                } else {
                    ev.target.closest('.field_container').classList.remove('field_error');
                }
            }
        } else {
            ev.target.classList.remove('not_empty');
        }
    }
    return (
        <div className="popup_overlay" onClick={onClose}>
            <div className="popup sign_in" onClick={(e) => e.stopPropagation()}>
                <div className="popup_content">
                    <div className="top_heading">
                        <div className="left_side">
                            <h2>Sign In</h2>
                            <p>Welcome back</p>
                        </div>
                        <div className="right_side">
                            <span>Sign up</span>
                        </div>
                    </div>
                    <div className="form_container"> 
                        <div className="field_container">
                            <input type='email' id='sign_in_email' onChange={(ev) => { checkInput(ev) }} />
                            <label htmlFor="sign_in_email">Email address</label>
                            <span className="error_message">That format doesn't look right. Make sure there aren't any typos.</span>
                        </div>
                        <div className="field_container">
                            <input type='password' id='sign_in_password' onChange={(ev) => { checkInput(ev) }} />
                            <label htmlFor="sign_in_password">Create Password</label>
                        </div>
                        <div className="acceptance">
                            <input type="checkbox" id="acceptance" onChange={(ev) => { checkInput(ev) }} />
                            <label htmlFor="acceptance">Keep me logged in</label>
                        </div>
                        <button className="submit_form">Log in</button>
                        <button className="wallet_continue">Continue with wallet</button>
                        <span className="forgot_password">Forgot password?</span>
                    </div>
                </div>
                <div className="divider"><span>or</span></div>
                <div className="popup_content">
                    <div className="login_options">
                        <div className="option_login facebook">
                            <FacebookIcon /> <span>Sign in with Facebook</span>
                        </div>
                        <div className="option_login twitter">
                            <TwitterIcon /> <span>Sign in with Twitter</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function PasswordResetPopup({ onClose }) {
    const validateEmail = (email) => {
        return String(email).toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    function checkInput(ev) {
        // Check if input is empty
        if (ev.target.value.trim() !== "") {
            ev.target.classList.add('not_empty');
            
            // Validate Email If input is not empty
            console.log(ev.target.getAttribute('type'))
            if (ev.target.getAttribute('type') == 'email') {
                if (!validateEmail(ev.target.value)) {
                    ev.target.closest('.field_container').classList.add('field_error');
                } else {
                    ev.target.closest('.field_container').classList.remove('field_error');
                }
            }
        } else {
            ev.target.classList.remove('not_empty');
        }
    }
    return (
        <div className="popup_overlay" onClick={onClose}>
            <div className="popup reset_password" onClick={(e) => e.stopPropagation()}>
                <div className="popup_content">
                    <div className="top_heading">
                        <div className="left_side">
                            <h2>Password reset</h2>
                            <p>We’ll help you reset it and get back on track.</p>
                        </div>
                        <div className="right_side">
                            <span>Back</span>
                        </div>
                    </div>
                    <div className="form_container"> 
                        <div className="field_container">
                            <input type='email' id='sign_in_email' onChange={(ev) => { checkInput(ev) }} />
                            <label htmlFor="sign_in_email">Email address</label>
                            <span className="error_message">That format doesn't look right. Make sure there aren't any typos.</span>
                        </div> 
                        <div className="acceptance">
                            <input type="checkbox" id="acceptance" onChange={(ev) => { checkInput(ev) }} />
                            <label htmlFor="acceptance">Keep me logged in</label>
                        </div>
                        <button className="submit_form">Reset password</button> 
                    </div>
                </div> 
            </div>
        </div>
    )
}
export function DeleteNotePopup({ onClose }) { 
    return (
        <div className="popup_overlay" onClick={onClose}>
          <div className="popup modern_alert" onClick={(e) => e.stopPropagation()}>
                <div className="popup_content">
                    <X_icon />
                    <h2>Delete Note</h2>
                    <p>Deleting a note will permanently remove it from your library</p>
                    <div className="buttons_con">
                        <div className="single_btn" onClick={onClose}> No, Keep Note </div>
                        <div className="single_btn"> Yes, Delete note </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
export function DeactivateAccount({ onClose }) { 
    return (
        <div className="popup_overlay" onClick={onClose}>
          <div className="popup modern_alert small_title" onClick={(e) => e.stopPropagation()}>
                <div className="popup_content"> 
                    <h2>Deativate Account</h2>
                    <p>Are you sure you want to deactivate your account? By doing this you will lose all of your saved data and will not be able to retrieve it.</p>
                    <div className="buttons_con">
                        <div className="single_btn" onClick={onClose}> Cancel </div>
                        <div className="single_btn"> Apply </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
export function ApprovedPopup({ onClose }) { 
    return (
        <div className="popup_overlay" onClick={onClose}>
          <div className="popup modern_alert" onClick={(e) => e.stopPropagation()}>
                <div className="popup_content"> 
                    <CheckIcon />
                    <h2>Approved</h2>
                    <p>Welcome to your personal medical portal</p>
                    <div className="buttons_con">
                        <div className="single_btn"> Get started </div> 
                    </div>
                </div> 
            </div>
        </div>
    )
}
export function SubscibePopup({ onClose }) {  
    return (
      <div className="popup_overlay" onClick={onClose}>
        <div className="popup modern_alert" onClick={(e) => e.stopPropagation()}>
          <div className="popup_content">
            <EmailIcon />
            <h2>Subscribe</h2>
            <p>Subscribe to our newsletter & stay updated.</p>
            <div className="subscribe_form">
              <input type="email" placeholder="Your Email" />
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }