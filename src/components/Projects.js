import React from 'react';
import '../css/Projects.css';
import { useDarkMode } from './DarkModeContext';
import { Link } from 'react-router-dom';

const Projects = () => {
	const { isDarkMode, toggleDarkMode} = useDarkMode();
    // Mock data for projects
    const projects = [
      { id: "01", title: "Stock Dashboard", description:"Created using React.js, is a responsive and interactive tool for real-time stock market information. Styled with Tailwind CSS, it presents a modern and user-friendly interface. The dashboard integrates Finnhub API for the latest stock prices, ensuring up-to-date data. Interactive charts, made with Rechart, aid in understanding market trends. Developed over 2 weeks with a total effort of approximately 33 hours, this project combines multiple technologies to deliver a practical and visually appealing web application. The focus was on managing dynamic data with React.js and showcasing stock trends in an easy-to-understand format, making it a valuable tool for anyone interested in the stock market."  },
      { id: "02", title: "Marcus Aurelius", description: "The Dynamic Transitions Website is an exploration into artistic web design, featuring a captivating voronoi stippling effect on a Marcus Aurelius statue for the landing page background. This innovative effect creates a dynamic image from moving dots that, from a distance, form a recognizable image of the statue. Alongside this, the site introduces an engaging GSAP-powered animation: a circle that bounces and expands to fill the screen, serving as an interactive start to the website. Following the landing page is a section on Marcus Aurelius, presented in a concise, minimalist style, complementing the artistic focus of the site. The color scheme and design of the website were carefully chosen to echo the themes of my portfolio and this document, ensuring a consistent and harmonious user experience. This project highlights my ability to blend complex visual elements with informative content, creating a unified and immersive web experience that balances artistic flair with practicality." },
      { id: "03", title: "Barcode/OCR Scanner", description: "My third prototype is a Barcode & OCR Scanning Web Application, designed to allow users to scan barcodes and read text from images directly on the web interface. Utilizing html5-qrcode, the application enables barcode scanning using the device's camera, a feature that was both challenging and rewarding to implement. For the OCR functionality, I integrated tesseract.js, a powerful library for converting images to text. This allowed the application to process and display text from images, a crucial aspect of the project. However, I encountered limitations with the OCR technology, which proved to be a valuable learning experience in understanding and working within the confines of current web technologies. A key achievement of this prototype was its ability to scan barcodes and display the barcode numbers, despite the challenges in extending its functionality due to technological constraints. This project was not just about creating a functional tool but also about exploring and learning new technologies in web development, highlighting the importance of adaptability and problem-solving in the face of technical limitations. The Barcode & OCR Scanning Web Application stands as evidence of my growing ability to integrate various web technologies to create practical and innovative solutions." },
      { id: "04", title: "ThreeJS Background", description: "For my fourth prototype, I ventured into the world of 3D web graphics, using React.js and three.js. The main focus was to create an eye-catching 3D background for my portfolio's homepage. This background featured lots of small balls moving in a special way, which created a sense of depth as they seemed to move 'forward' and 'backward.' Using three.js was key to achieving this 3D effect, as it let me create and animate these balls in a 3D space, making the background lively and modern. Integrating these 3D elements with React.js was challenging but rewarding, showing how React.js can be used for more than just regular web development and can enter new areas of creativity and design. I carefully designed the movement and look of the 3D elements to match the overall style of my portfolio, ensuring a smooth and unified user experience across the site. This project was more than just a technical task; it was a showcase of how to use advanced web technologies to create unique and engaging web environments. It demonstrated my ability to quickly learn and apply new technologies in creative ways." },
      // Add more projects as needed
  ];
  return (
<div className={`parent ${isDarkMode ? 'dark-mode' : ''}`}>

<div className="div1" onClick={toggleDarkMode}> {/* Updated click handler */}
            </div>
    <div className="div2"><svg class='icon' xmlns="http://www.w3.org/2000/svg" width="81.866" height="45.088" viewBox="0 0 81.866 45.088">
  <g id="zerzerez" transform="translate(-495 591.169)">
    <path id="Path_5" data-name="Path 5" d="M495-589.869v1.248h7.765c8.373,0,9.489.082,11.985.9a20.209,20.209,0,0,1,11.443,10.064,19.324,19.324,0,0,1-1.051,19.964,21.514,21.514,0,0,1-10.8,8.291c-2.528.772-3.53.837-11.656.837H495v2.463h8.192c8.882,0,9.818-.066,12.313-.936a24.184,24.184,0,0,0,13.085-11.919,21.337,21.337,0,0,0-.033-19.405,23.738,23.738,0,0,0-6.945-8.553A26.283,26.283,0,0,0,515.6-590.1c-2.315-.8-2.939-.854-12.018-.936L495-591.1Z"/>
    <path id="Path_6" data-name="Path 6" d="M791.955-590.495a22.69,22.69,0,0,0-17.911,13.856,22.233,22.233,0,0,0,5.369,24.626,22.128,22.128,0,0,0,16.056,6.271,21.209,21.209,0,0,0,8.8-2,19.177,19.177,0,0,0,4.006-2.512,3.5,3.5,0,0,0-.8-.837l-.821-.673-1.166.755a19.081,19.081,0,0,1-5.91,2.38,28.131,28.131,0,0,1-8.849.1,19.973,19.973,0,0,1-9.933-5.319,20.142,20.142,0,0,1,.1-28.714,19.485,19.485,0,0,1,10.573-5.385,24.38,24.38,0,0,1,8.849.328,19.248,19.248,0,0,1,5.336,2.282,14.272,14.272,0,0,0,1.478.9,5.409,5.409,0,0,0,.8-.722l.706-.706-.722-.575a20.857,20.857,0,0,0-8.258-3.76A31.833,31.833,0,0,0,791.955-590.495Z" transform="translate(-231.844 -0.408)" stroke="#f5f5f5" stroke-width="0.1"/>
  </g>
</svg>
</div>
<div className="div3">
            </div>
    <div className="div4">
        <h1>Dmitr Cambur</h1>
        <h2>FronTTTt-End Developer</h2>
    </div>
    <div className="div5">
                {projects.map(project => (
                    <article className="episode" key={project.id}>
                        <div className="episode__number">{project.id}</div>
                        <div className="episode__content">
                            <div className="title">{project.title}</div>
                            <div className="story">
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
      <div className="div6">
      <ul className="portfolio-list">
	<li><Link to="/">Home</Link></li>
  <li><Link to="/projects">Projects</Link></li>
  <li><Link to="/skills">Skills</Link></li>
		<li><Link to="/contact">Contact</Link></li>
    </ul>
</div>

    <div className="div7"></div>
	<div className="div8">
            </div>

    <div className="div9"></div>
</div>

  )
}

export default Projects