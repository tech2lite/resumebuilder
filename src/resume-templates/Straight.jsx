import { jsPDF } from "jspdf";
import { useRef } from "react";

export default function Straight() {
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
            <div className="preview-template straight" ref={previewRef}>
                <div className="sidebar">
                    <h1>Vinay Kanth</h1>

                    <div className="contact">
                        <h3>Contact</h3>

                        <div className="address">
                            <h6>Address</h6>
                            <p>New Delhi, India, 11034</p>
                        </div>
                        <div className="phone">
                            <h6>Phone</h6>
                            <a href="tel:8678981216">+91 8678981216</a>
                        </div>
                        <div className="email">
                            <h6>E-mail</h6>
                            <a href="mailto:vinaykennedy@gmail.com">vinaykennedy@gmail.com</a>
                        </div>

                    </div>
                    <div className="skills">
                        <h3>Skills</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                </div>
                <div className="main-context">
                    <p>Energetic and seasoned Front End Developer with 3 years of experience
                        building and maintaining responsive websites in the IT industry.
                        Proficient in HTML, CSS, JavaScript, plus modern libraries and
                        frameworks. Passionate about usability and possess working knowledge
                        of Abode Photoshop</p>
                    <h3 className="divided">
                        Work History
                    </h3>
                    <div className="experience-details">
                        <div className="exp-wrap">
                            <div className="years">
                                <p>03/2015 - Current</p>
                            </div>
                            <div className="works-done">
                                <h4>Software Engineer</h4>
                                <p>Chennai, TamilNadu</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores voluptatibus rerum quae eos veniam earum nam tempora consequuntur pariatur. Aspernatur dolorem repellat voluptatibus culpa deserunt, minima aut velit expedita. </li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores voluptatibus rerum quae eos veniam earum nam tempora consequuntur pariatur. Aspernatur dolorem repellat voluptatibus culpa deserunt, minima aut velit expedita.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores voluptatibus rerum quae eos veniam earum nam tempora consequuntur pariatur. Aspernatur dolorem repellat voluptatibus culpa deserunt, minima aut velit expedita.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="exp-wrap">
                            <div className="years">
                                <p>03/2015 - Current</p>
                            </div>
                            <div className="works-done">
                                <h4>Software Engineer</h4>
                                <p>Chennai, TamilNadu</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores voluptatibus rerum quae eos veniam earum nam tempora consequuntur pariatur. Aspernatur dolorem repellat voluptatibus culpa deserunt, minima aut velit expedita. </li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores voluptatibus rerum quae eos veniam earum nam tempora consequuntur pariatur. Aspernatur dolorem repellat voluptatibus culpa deserunt, minima aut velit expedita.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores voluptatibus rerum quae eos veniam earum nam tempora consequuntur pariatur. Aspernatur dolorem repellat voluptatibus culpa deserunt, minima aut velit expedita.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h3 className="divided">
                        Education
                    </h3>
                    <ul className="education-detail">
                        <li>
                            <h6>B.sc in Computer Science</h6>
                            <p>University of Madras - Chennai, India</p>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}
