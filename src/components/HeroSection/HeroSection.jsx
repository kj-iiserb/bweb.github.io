import React from 'react';
import './HeroSection.css';
import visdomLogo from '../../assets/visdom.png';

function HeroSection() {
    return (
        <div className="hero-section">
            <div className="hero-section__logo">
                <img src={visdomLogo} alt="Logo" />
            </div>
            <div className="hero_section_about">
                <div className='about_inner_wrapper'>

                    <h1><span className="highlight-letter">V</span>isual Data Computing Group (<span className="highlight-letter">V</span>isDom)</h1>
                    <div>
                        <p> <b>About the Group:  </b>
                            Our group tackles diverse challenges in the realm of computer vision(CV), deep learning(DL), and machine learning(ML). We continuously innovate at the intersection of these fields, driving progress and creating impactful solutions that shape the future.
                        </p>
                        <br /> {/* Add a break here */}
                        <p><b>Some of the active areas of research include:</b>
                        </p>

                        <ul style={{ listStyleType: 'disc' }}>
                            <li> Transfer learning (Domain adaptation, Incremental learning)</li>
                            <li> Fairness and bias-free learning</li>
                            <li> Uncertainty in deep learning (Bayesian models)</li>
                            <li>Data generative models (GANs, VAEs, and Diffusion models)</li>
                            <li> Efficient deep learning ( Binary neural networks, Active learning)</li>
                            <li>3D reconstructions, augmented reality (AR), and virtual reality (VR).</li>
                        </ul>
                        
                       
                        Some other areas of interested in multimodal learning, speech and audio processing and medical machine learning.
                        <p></p>
                        <br /> {/* Add a break here */}
                        <p>
                            We are seeking motivated researchers who are passionate about computer vision, machine learning, and deep learning. If you are interested, please send us your CV and highlight your areas of interest and experience. We have openings for junior research fellow/projects associates and PhDs in this groups.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
