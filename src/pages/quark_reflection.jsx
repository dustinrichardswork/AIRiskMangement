import React from 'react';

//------// Components //------//
import AnimatedTitle from '../components/titleAnimation';


//------// Media //------//
import CoreImage from '../media/core.png';
import AtomGif from '../media/gif/atom-c.gif';

export default function QuarkReflection() {
    return (
        <div className="quark_reflection">
            <AnimatedTitle title="Quark Reflection" />
            <div className="page_description">
                Below you can find a quantum built digital representation of yourself based on your medical profile. Your Quark Reflection is constantly updating and learning to match your biological profile more and more closely over time
            </div>
            <div className="core_analytics">
                    <div className="left_options">
                        <span>Organism</span>
                        <span>Organ Systems</span>
                        <span>Organs</span>
                        <span>Tissues</span>
                        <span>Cells</span>
                        <span>Genome</span>
                        <span>Molecules</span> 
                        <span>Atoms</span> 
                    </div>
                    <div className="right_side">
                        <img src={CoreImage} className='core_image' />
                        <div className="bottom_atoms">
                            <div className="single_atom">
                                <img src={AtomGif} className='single_atom' />
                                <span>C</span>
                            </div>
                            <div className="single_atom">
                                <img src={AtomGif} className='single_atom' />
                                <span>H</span>
                            </div>
                            <div className="single_atom">
                                <img src={AtomGif} className='single_atom' />
                                <span>N</span>
                            </div>
                            <div className="single_atom">
                                <img src={AtomGif} className='single_atom' />
                                <span>O</span>
                            </div>
                            <div className="single_atom">
                                <img src={AtomGif} className='single_atom' />
                                <span>P</span>
                            </div>
                        </div>
                    </div> 
            </div>
        </div>
    )
}