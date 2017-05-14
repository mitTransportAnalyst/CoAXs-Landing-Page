import React from "react";
import {Link} from "react-router";
import {
  Code,
  DropdownMenu, DropdownToggle,
  FooterAddress,
  HorizontalSplit,
  ImageList, ImageListItem,
  Navbar, NavItem,
  Page,
  Section,
  Team,
  TeamMember,
} from "neal-react";

import {Footer} from "./footer.jsx"

import {SignupModal} from "./SignupModal.jsx"
import {SigninModal} from "./SigninModal.jsx"

import {Hero} from "./Hero.jsx"

const brandName = "CoAXs | San Francisco";
const brand = <span>{brandName}</span>;


const businessAddress = (
  <address>
    <strong>Massachusetts Institute of Technology</strong><br/>
     <strong>Department of Urban Studies and Planning</strong><br/>
    <strong>{brandName}</strong><br/>
    77 Massachusetts Avenue<br/>
    Cambridge, MA 02139<br/>
  </address>
);


export default (props) => {
  //TODO: Smart look
  smartlook('tag', 'websiteName', 'NOLALandingPage');

  return (
    <Page>

      <Navbar brand={brand}>
      </Navbar>

      <Hero backgroundImage="img/landingpageBW.jpg"
            className="text-xs-center">
        <h1 className="display-4" style={{color: "black"}}> CoAXs </h1>
        <p className="lead" style={{color: "black"}}>Collaborative Accessibility-Based Stakeholder Engagement for
          transit planning
        </p>

        <SignupModal modalId="signup-modal"/>
        <SigninModal modalId="signin-modal"/>

        <p>


        </p>
        <p>

        </p>
      </Hero>


      <Section heading="Welcome to CoAXs!">
        <div>
          <p><strong>What is CoAXs?</strong></p>

          <p>

            CoAXs is an interactive planning tool developed by a team at the Massachusetts Institute of Technology (MIT)
            that aims to improve participation and creative problem-solving in the transportation planning process. It
            was developed by the research group Mobility Futures Collaborative, with support from the TransitCenter
            Foundation. CoAXs utilizes open data and free software to enable users to test new transportation scenarios
            in real time, and demonstrates different project benefits. The tool has been tested in workshops in Boston,
            London, UK, and Santiago, Chile, and the research team is continuing to develop CoAXs and solicit feedback
            in this next phase of our research, in which we’re testing CoAXs with advocacy organizations in New Orleans,
            San Francisco, and Atlanta.

          </p>

          <p><strong>How it works</strong></p>

          <p>

            We’ve designed an online experience for testing CoAXs that should take about 15-20 minutes to complete, and
            if you complete each step, you’ll be entered to win a $50 prize. Here’s what to expect:
          </p>
          <ul>
            <li><strong>Step 1: Intro Survey and Consent: </strong>To get started, you’ll fill out an intro survey to
              give us some
              background on where you’re coming from, as well as provide consent for participating in this study.
            </li>
            <li><strong>Step 2: Get to know CoAXs: </strong>In this step, you’ll watch a short video to learn how CoAXs
              works and
              explore its basic capabilities.
            </li>
            <li><strong>Step 3: Create your own scenario: </strong>In this step, you’ll watch a second short video, and
              then have a
              chance to try out your own improvements to the public transportation system.
            </li>
            <li><strong>Step 4: Exit Survey: </strong>When you’re finished using the tool, we’d ask that you again fill
              out a brief
              survey to help us understand what you got from using the tool.
            </li>

          </ul>


          <p>If you have any questions at any point, please don’t hesitate to send a message to our team at <a
            href="mailto:coaxs-help@mit.edu?Subject=CoAXs%20help" target="_top">coaxs-help@mit.edu</a>.

          </p>
        </div>


      </Section>

      <Section className="gray" heading="Exploring Bus Improvements in San Francisco">

        <div>
          <p>
            We’re hoping to explore how a tool like CoAXs might help advance conversations about transit improvements in
            the Bay Area. Today you’ll have a chance to explore upgrades to three key bus corridors in the city: Van
            Ness Avenue, Geary Boulevard, and Geneva Avenue. Here’s a brief description of each project:
          </p>

          <div><strong>1. Geary Boulevard BRT</strong></div>
          <div><img src="img/Geary.png" width="50%"/></div>

          <p>
            As part of a larger project to replace water and utility lines, the SFMTA is leading a major redesign of
            Geary Boulevard that will result in a number of Bus Rapid Transit or BRT improvements aimed at making the 38
            bus faster and more reliable. Improvements include:
          </p>

          <ul>
            <li>Dedicated bus lanes</li>
            <li>
              Transit Signal Priority, a system where traffic signals recognize approaching buses and extend green
              lights to help speed them along
            </li>
            <li>
              More accessible bus stops and pedestrian safety enhancements
            </li>

          </ul>

          <p>Check out the video below to see a visualization of the road and learn more about the planned BRT
            improvements.
          </p>

          <iframe width="560" height="315" src="https://www.youtube.com/embed/7LFvpE1O7ps" frameBorder="0"
                  allowFullScreen></iframe>

          <p>More information on Gearty BRT is available at the project website
            <a target="_blank" href="http://www.sfcta.org/geary-corridor-bus-rapid-transit-home">here</a>.
          </p>


          <br/>

          <div><strong>2. Van Ness BRT</strong></div>
          <div><img src="img/VanNess.png" width="30%"/></div>
          <p>Like Geary, Van Ness is undergoing a major utility and street redesign. At the end of the project, Van Ness
            will be a full BRT corridor with transit-boosting features like:
          </p>

          <ul>
            <li>Dedicated bus lanes</li>
            <li>Transit Signal Priority</li>
            <li>Elimination of left hand turns</li>
            <li>All-door boarding</li>
            <li>Pedestrian safety enhancements</li>
          </ul>

          <p>The BRT corridor will help the 47, 49, and a number of Golden Gate Transit bus lines move more quickly and
            reliably.</p>
          <p>Roadway and utility construction began on Van Ness in October, and the Bus Rapid Transit service is slated
            to begin in 2020. For more information, visit the project site
            <a target="_blank" href="http://www.sfcta.org/van-ness-avenue-bus-rapid-transit-home"> here</a>.
          </p>


          <br/>
          <div><strong>3. Geneva Avenue Upgrades</strong></div>
          <div><img src="img/Geneva.png" width="50%"/></div>
          <p>While the specific Van Ness and Geary BRT projects have already been approved, ideas for Geneva Avenue are
            still in the early stages. Muni’s 2014 Transit Effective Program (TEP) identified this segment of Geneva
            avenue as a corridor that could benefit from bus improvements.
          </p>
          <p>As of yet, there’s no specific project proposal. We wanted to include it as a corridor where you could try
            out different hypothetical improvements like dedicated lanes and see what kind of impact they might
            have.
          </p>

        </div>


      </Section>

      <Section heading="Get started: Sign up (new user) or sign in (existing user)">

        <button className="btn btn-primary" data-toggle="modal" data-target="#signup-modal">Sign up</button>
        <button className="btn btn-success" data-toggle="modal" data-target="#signin-modal" style={{marginLeft: 20}}>
          Sign in
        </button>

      </Section>

      <div style={{marginTop: "7rem"}}>
        <Section className="subhero">
          <ImageList centered>
            <ImageListItem src="img/transitcenter3.png" url="http://transitcenter.org"/>
            <ImageListItem src="img/DUSPMIT2.png" url="https://dusp.mit.edu"/>
            <ImageListItem src="img/fmc.png" url="http://mfc.mit.edu"/>
          </ImageList>
        </Section>
      </div>


      <div style={{marginTop: "-4rem"}}>

        <Footer brandName={brandName}
                githubUrl="https://github.com/mitTransportAnalyst/CoAXs-React"
                address={businessAddress}>
          style={{marginTop: 0}}
        </Footer>

      </div>

    </Page>
  );
};
