import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PlaceIcon from '@mui/icons-material/Place';
import { jsPDF } from "jspdf";
import { useRef } from "react";

export default function Basic() {
    const previewRef = useRef(null)
    const DownloadPdfHandler = () => {
        const doc = new jsPDF('l', 'mm', [1200, 1210]);

        doc.html(previewRef.current, {
            callback: function (doc) {
                doc.save("output.pdf");
            },
            x: 10,
            y: 10
        });
    }

    return (
        <>
            <button onClick={DownloadPdfHandler} className="dwn-pdf">Download</button>
            <div className='preview-template basic-resume-template' ref={previewRef}>
                <div className="personal-details">
                    <div className="container">
                        <h2>Sathish Kumar</h2>
                        <h5>UI Developer</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
                <div className="contact-details">
                    <div className="container">
                        <div className="d-flex align-center just-btn">
                            <div className='d-flex align-center gap-10'>
                                <EmailIcon />
                                <span>sathishsandy8124@gmail.com</span>
                            </div>
                            <div className='d-flex align-center gap-10'>
                                <PhoneIphoneIcon />
                                <span>8124666748</span>
                            </div>
                            <div className='d-flex align-center gap-10'>
                                <PlaceIcon />
                                <span>#169 balaji nagar meppur poonamallee chennai-123</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="skills">
                        <h2 className='title'>SKILLS</h2>
                        <div className="d-flex flex-wrap gap-10">
                            <p className="tags">HTML</p>
                            <p className="tags">HTML</p>
                        </div>
                    </div>
                    <div className="experience">
                        <h2 className='title'>Work Experience</h2>
                        <div className="details">
                            <h3 className='role'>UI developer</h3>
                            <h4 className='company_name'>RR Donnelley</h4>
                            <p className='period_time'>09/2014 - 06/2017</p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                            </ul>
                        </div>
                        <div className="details">
                            <h3 className='role'>UI developer</h3>
                            <h4 className='company_name'>RR Donnelley</h4>
                            <p className='period_time'>09/2014 - 06/2017</p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                            </ul>
                        </div>
                    </div>
                    <div className="education">
                        <h2 className='title'>Education</h2>
                        <div className="details">
                            <h3 className='role'>Msc Computer Science</h3>
                            <h4 className='company_name'>University of Madras</h4>
                            <p className='period_time'>09/2014 - 06/2017</p>
                        </div>
                        <div className="details">
                            <h3 className='role'>Bsc Computer Science</h3>
                            <h4 className='company_name'>University of Madras</h4>
                            <p className='period_time'>09/2014 - 06/2017</p>
                        </div>
                    </div>
                    <div className="declartion">
                        <h2 className='title'>Declaration</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
            </div>
        </>
    )
}
