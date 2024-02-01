import React from 'react';

//------// Components //------//
import AnimatedTitle from '../components/titleAnimation';


export default function Monetisation() {
    return (
        <div className="monetisation">
            <AnimatedTitle title="Monetisation" />
            <div className="page_description">
                Please choose which of your medical data below you would like to upload to the Tectum blockchain for researchers to have the opportunity to purchase from you
            </div>
        </div>
    )
}