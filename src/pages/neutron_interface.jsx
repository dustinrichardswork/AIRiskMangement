import React from 'react';

//------// Components //------//
import AnimatedTitle from '../components/titleAnimation';  

//------// media //------//  
import { ReactComponent as ChatIcon } from '../media/svgs/chat.svg';
import { ReactComponent as FileIcon } from '../media/svgs/file.svg';  
import { ReactComponent as ChevronUp } from '../media/svgs/chevronUp.svg';  


export default function NeutronInterface() {
    return (
        <div className="neutron_interface">
            <AnimatedTitle title="Neutron Interface" />
            <div className="page_description">
                Welcome to the Neutron interface, this is a AI conversational interface that is built on the Atom dataset. You can ask any questions about health, post your symptoms and receive diagnosis prognosis and testing suggestions based on your specific medical profile.
            </div>
            <div className="chat_interface">
                <div className="chat_container">
                    <ChatIcon />
                    <span>How can i help you?</span>
                </div>
                <div className="prompt_container">
                    <FileIcon />
                    <input type="text" />
                    <ChevronUp className='send' />
                </div>
            </div>
        </div>
    )
}