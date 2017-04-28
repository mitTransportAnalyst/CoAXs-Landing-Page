import React from "react";
import {Link} from "react-router";
import {
  Code,
  DropdownMenu, DropdownToggle,
  Footer, FooterAddress,
  HorizontalSplit,
  ImageList, ImageListItem,
  Navbar, NavItem,
  Page,
  Section,
  Team,
  TeamMember,
} from "neal-react";

import {SignupModal} from "./SignupModal.jsx"
import {SigninModal} from "./SigninModal.jsx"

import {Hero} from "./Hero.jsx"

const brandName = "CoAXs New Orleans";
const brand = <span>{brandName}</span>;


const businessAddress = (
  <address>
    <strong>{brandName}</strong><br/>
    77 Massachusetts Avenue<br/>
    Cambridge, MA 02139<br/>
  </address>
);


export default (props) => {
  smartlook('tag', 'websiteName', 'NOLALandingPage');

  return (
    <Page>

      <Navbar brand={brand}>
      </Navbar>

      <Hero backgroundImage="img/landing.png"
            className="text-xs-center">
        <h1 className="display-4"> CoAXs </h1>
        <p className="lead">Collaborative Accessibility-Based Stakeholder Engagement for transit planning
        </p>

        <SignupModal modalId="signup-modal"/>
        <SigninModal modalId="signin-modal"/>

        <p>


        </p>
        <p>

        </p>
      </Hero>

      <Section className="subhero">
        <ImageList centered>
          <ImageListItem src="img/transitcenter3.png" url="http://transitcenter.org"/>
          <ImageListItem src="img/fmc.png" url="http://mfc.mit.edu"/>
        </ImageList>
      </Section>


      <Section heading="Welcome to CoAXs!">
        <div>
          <p><strong>What is CoAXs?</strong></p>

          <p>

            CoAXs is an interactive planning tool developed by a team at MIT that aims to improve participation and
            creative problem-solving in the transportation planning process. It was developed by the research group
            Mobility Futures Collaborative at MIT, with support from the TransitCenter Foundation.

            So far, CoAXs has been used in Boston, London, and Santiago. In this next phase of our research, we’re
            excited to test CoAXs in New Orleans, San Francisco, and Atlanta.

          </p>

          <p><strong>How it works</strong></p>

          <p>

            We’ve designed an online experience for testing CoAXs that should take about 15-20 minutes to complete, and
            if you complete each step, you’ll be entered to win a $50 prize. Here’s what to expect:
          </p>
            <ul>
              <li><strong>Step 1:</strong> Intro Survey and Consent: To get started, you’ll fill out an intro survey to give us some
                background on where you’re coming from, as well as provide consent for participating in this study.
              </li>
              <li><strong>Step 2:</strong> Get to know CoAXs: In this step, you’ll watch a short video to learn how CoAXs works and
                explore its basic capabilities.
              </li>
              <li><strong>Step 3:</strong> Create your own scenario: In this step, you’ll watch a second short video, and then have a
                chance to try out your own improvements to the public transportation system.
              </li>
              <li> <strong>Step 4:</strong> Exit Survey: When you’re finished using the tool, we’d ask that you again fill out a brief
                survey to help us understand what you got from using the tool.
              </li>

            </ul>




          <p>If you have any questions at any point, don’t hesitate to send a message to our team at <a
            href="mailto:coaxs-help@mit.edu?Subject=CoAXs%20help" target="_top">coaxs-help@mit.edu</a>.

          </p>
        </div>


      </Section>

      <Section className="gray" heading="Exploring transit improvements to connect Jefferson and Orleans parishes
">
        {/*<HorizontalSplit padding="md">*/}
        {/*<div>*/}
        {/*<p className="lead">City of Atlanta Guiding Principles of Transit</p>*/}
        {/*<p>Purpose is to significantly expand MARTA transit service in Atlanta*/}
        {/*Receipts projected at $2.5 billion (2016$) over life of the tax*/}
        {/*Project list approved*/}
        {/*MARTA Board of Directors (May)*/}
        {/*City of Atlanta City Council (June)*/}
        {/*Referendum on November 8*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*<p className="lead">Potential High Capacity Improvements</p>*/}
        {/*<p>City of Atlanta*/}
        {/*Light Rail Transit*/}
        {/*Atlanta BeltLine Loop*/}
        {/*Irwin – AUC Line*/}
        {/*Downtown – Capitol Ave Line*/}
        {/*Crosstown Midtown Line*/}
        {/*Crosstown Crescent Line*/}
        {/*Peachtree – Ft Mac – Barge Rd Line*/}
        {/*“S” Concept – Murphy Crossing – Armour Yard via AUC and Eastside Trail*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*<p className="lead">Potential Bus Service Improvements</p>*/}
        {/*<p>Frequent Local Service*/}
        {/*15-minute peak; 30-minute off-peak service on Routes 12, 49, 51, 55 and 60*/}
        {/*Supporting Local Service*/}
        {/*Increased service during off-peak to include midday, nights and weekends on selected routes*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*</HorizontalSplit>*/}

        <div>
          <p>
            We’ve partnered with Ride New Orleans to explore how a tool like CoAXs might help advance conversations about transit improvements in the region.
          </p>

          <p>
            Today you’ll have a chance to explore how different potential upgrades to bus routes could improve access to Ochsner Medical Center in Jefferson Parish and other destinations across parish lines. CoAXs will enable you to explore different combinations of alternatives to RTA Route 16 and JeT routes E3 and E5, as illustrated in the map below, with different levels of service:
          </p>

          <img src="img/NOLAscenario.png" width="70%"/>


        </div>


      </Section>

      <Section heading="Get started: Sign up (new user) or sign in (existing user)">

        <button className="btn" data-toggle="modal" data-target="#signup-modal">Sign up</button>
        <button className="btn" data-toggle="modal" data-target="#signin-modal" style={{marginLeft: 20}}>Sign in
        </button>

      </Section>


      <Footer brandName={brandName}
              githubUrl="https://github.com/mitTransportAnalyst/CoAXs-React"
              address={businessAddress}>
      </Footer>
    </Page>
  );
};
