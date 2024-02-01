import React from 'react';

//------// Components //------//
import AnimatedTitle from '../components/titleAnimation';


export default function Gluon() {
    return (
        <div className="gluon">
            <AnimatedTitle title="Gluon" />
            <div className="page_description">
                This is your medical trial and testing interface. Based on your Quark reflection, you can trial digital representations of drug and dietary changes, fastrack their application and review the effect and side effects they would have on you
            </div>
            
        </div>
    )
}