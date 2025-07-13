import { useState } from 'react'
import './App.css'
import shui from './assets/shui.jpg'
import sipix from './assets/sipix.png'
import marriage1 from './assets/marriage-game-1.jpg'
import marriage2 from './assets/marriage-game-2.jpg'
import marriage3 from './assets/marriage-game-3.jpg'
import gowithin from './assets/gowithin.jpg'
import gowithin1 from './assets/gowithin1.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
 
        <div className=" header">
          <h2 className="title">Hitesh N. Sharma</h2>
          Senior Software Engineer
        </div>

        <div className="topic">Some highlighted Projects at Siemens</div>
        <div className="section">
          <div className="header"> Vaccellent </div>
          <div className='content-body'>
             Siemens Healthineers developed an application named Vaccellent to helped public get vaccinated during the Covid Pandemic. I contributed significantly as a Senior Software engineer developing different suite of Angular web applications. The set of applications helped public schedule vaccination appointments, helped physicans manage and administer vaccines and send reports to Government authorities, and also helped decision makers manage inventory and the distribution of vaccines. The product also received a Siemens Healthineers Innovation Awards 2021.

          Technology: Angular, NgRx, Nx, Cypress, Jest, Chart.js.

          </div>
         

        </div>


        <div className="section">
          <div className="header"> SeSo </div>
          Lead a team of 5+ front end engineers as a UI Lead to develop Angular web applications for remote maintenance of medical devices. Implemented micro frontend architecture for combining different UI interfaces, Angular material and virtual scrolling for tabular data display. Used d3.js for data visualization, OAuth2 and OIDC for authentication, and created REST APIs.<br />

          Technology: Angular, NgRx, Nx, Cypress, Jest, Micro Frontends.

        </div>


        <div className="section">
          <div className="header">Digital Inspection Jacket- DIJ </div>
          Tech Lead & Project Manager: Lead full stack engineers & designers to develop a multimillion-dollar award-winning web app for streamlining inspection workflow for Turbines and rotors repair and maintenance. All the apper based inspection wrokflow was replaced by digital inspection where the field engineers used the app to input data while engineers used that data to create quotes and also provide recommendations real time. I also managed the project improving the efficiency of workflow by 25%. The Product also receiveed a Siemens Innvoation Award in 2017 (Second Place). <br />
          Technology: PolymerJS, NodeJS, MongoDB
        </div>


        <div className="section">
          <div className="header">Shui </div>
          Shui is the Siemens Healtineers Design System comprising of not just design specifications but ready to use web components that can work accross any Javascript Framework. I was involved with the development of the library from the initial stages and have significantly conrtibuted to the development of different components ranging from simple textbox to complex scanning related components. I also help different business inside the company implement Shui within their project ranging from Angular, Vue or React.

          Shui has won multiple design awards, here are just a few: <a href="https://www.red-dot.org/project/shui-siemens-healthineers-user-interface-25965">Red Dot Design Award</a>, UX Design Awards, and German Design Award.
          <br />
          Technology: Polymer JS, Lit, Lit Elements, Angular, React, Vue <br />
          <br />
          <img src={shui} className="examplePictures" alt="Shui" />
        </div>


        <div className="section">
          <div className="header">SIPIX </div>
          Lead designers and front-end engineers to develop an AngularJS app (SIPIX) for remote collaboration using mobile or a smart glass. Software was bundled part of a Tablet PC that allowed Siemens customers to get advice from Siemens experts through audio/video chat via secured connection.

          For more information, visit here:
          <a href="https://www.siemens.com/us/en/products/services/digital-enterprise-services/service-programs-platforms/sipix.html">Siemens Service Platforms</a>

          <br /><br />
          "A maintenance must be carried out. Display replacement. The technician on site needs information what to do and when. A remote expert can provide this information through the SIPIX industrial tablet. The technician learns what he needs and even can use both hands for the repair work as he only has to watch a video stream supplemented by digital labeling tools."
          <br />
          <br />
          Technology: Angular, Three.js, Epson Moverio Smart Glass BT300, CRSP, WebRTC <br />
          <br />
          <img src={sipix} className="examplePictures" alt="sipix" />

          <iframe width="100%" height="500px" src="https://www.youtube.com/embed/RXZsB9Ymgzk?si=er2hDRRfDXr9GG7y" title="YouTube video player"></iframe>
        </div>



        <div className="topic">Some highlighted Academic Projects </div>
        <div className="section">
          I have published well cited papers on Disaster Management and Mixed reality Games.<br />

          Check out my Google Scholar Profile here:
          <a href="https://scholar.google.com/citations?user=0YPalVwAAAAJ&hl=en">Google Scholar Page</a>
        </div>

        <div className="topic">Some highlighted Personal Projects</div>
        <div className="section">
          <div className="header">Go Within  </div>
          A <strong>React </strong>Web application for learning meditation through the techniques of sahaja yoga meditation.

          <div className="layout">
            <img src={gowithin} className="item" alt="Gowithin 1" />
            <img src={gowithin1} className="item" alt="Gowithin 2" />
          </div>
          <br />
          View it live here:

          <a href="https://moleculeone.github.io/gowithinnew/">Go Within New Version</a>
      

        </div>

        <div className="section">
          <div className="header">The Marriage Card Game  </div>
          A <strong>React </strong> Card game web application based on popular Nepalese card game called Marriage.

          <div className="layout">
            <img src={marriage1} className="item" alt="Marriage 1" />
            <img src={marriage2} className="item" alt="Marriage 2" />
            <img src={marriage3} className="item" alt="Marriage 3" />
          </div>

        </div>


        <div className="">I'm passionate about music and movies, here is my youtube channel</div>
        <br />
        <a href="https://www.youtube.com/@hiteshnsharma">Personal Youtube</a>

      </div>


    </>
  )
}

export default App
