import React from 'react';
import '../css/Home.css';
import { useDarkMode } from './DarkModeContext';
import { Link } from 'react-router-dom';
import Lines from './Lines'; 

const Contact = () => {
	const { isDarkMode, toggleDarkMode} = useDarkMode();

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
                <Lines className="lines-background" /> {/* Apply the class */}
                {/* Other content of div3 */}
            </div>
    <div className="div4">
        <h1>Dmitr Cambur</h1>
        <h2>FronDDDt-End Developer</h2>
    </div>
	<div className="div5">
	<form>
                    <label htmlFor="name">Name:</label><br/>
                    <input type="text" id="name" name="name" className={isDarkMode ? 'input-dark-mode' : 'input-light-mode'}/><br/>
                    <label htmlFor="email">Email:</label><br/>
                    <input type="email" id="email" name="email" className={isDarkMode ? 'input-dark-mode' : 'input-light-mode'}/><br/>
                    <label htmlFor="message">Message:</label><br/>
                    <textarea id="message" name="message" rows="4" cols="50" className={isDarkMode ? 'input-dark-mode' : 'input-light-mode'}></textarea><br/>
                    <input type="submit" value="Submit" className={isDarkMode ? 'input-dark-mode' : 'input-light-mode'}/>
                </form>
            </div>
      <div className="div6">
    <ul className="portfolio-list">
	<li><Link to="/">Home</Link></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
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

export default Contact