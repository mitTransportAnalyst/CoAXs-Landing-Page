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

const brandName = "CoAXs | Atlanta";
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
  smartlook('tag', 'websiteName', 'NOLALandingPage');

  return (
    <Page>

      <Navbar brand={brand}>
      </Navbar>

        <Hero backgroundImage="img/landingpageBW.jpg"
              className="text-xs-center">
          <h1 className="display-4" style={{color: "black"}}> CoAXs </h1>
          <p className="lead" style={{color: "black"}}>Collaborative Accessibility-Based Stakeholder Engagement for transit planning
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

            CoAXs is an interactive planning tool developed by a team at the Massachusetts Institute of Technology (MIT) that aims to improve participation and creative problem-solving in the transportation planning process. It was developed by the research group Mobility Futures Collaborative, with support from the TransitCenter Foundation. CoAXs utilizes open data and free software to enable users to test new transportation scenarios in real time, and demonstrates different project benefits. The tool has been tested in workshops in Boston, London, UK, and Santiago, Chile, and the research team is continuing to develop CoAXs and solicit feedback in this next phase of our research, in which we’re testing CoAXs with advocacy organizations in New Orleans, San Francisco, and Atlanta.

          </p>

          <p><strong>How it works</strong></p>

          <p>

            We’ve designed an online experience for testing CoAXs that should take about 15-20 minutes to complete, and if you complete each step, you’ll be entered to win a $50 prize. Here’s what to expect:
          </p>
            <ul>
              <li><strong>Step 1: Intro Survey and Consent: </strong>To get started, you’ll fill out an intro survey to give us some
                background on where you’re coming from, as well as provide consent for participating in this study.
              </li>
              <li><strong>Step 2: Get to know CoAXs: </strong>In this step, you’ll watch a short video to learn how CoAXs works and
                explore its basic capabilities.
              </li>
              <li><strong>Step 3: Create your own scenario: </strong>In this step, you’ll watch a second short video, and then have a
                chance to try out your own improvements to the public transportation system.
              </li>
              <li> <strong>Step 4: Exit Survey: </strong>When you’re finished using the tool, we’d ask that you again fill out a brief
                survey to help us understand what you got from using the tool.
              </li>

            </ul>




          <p>If you have any questions at any point, please don’t hesitate to send a message to our team at <a
            href="mailto:coaxs-help@mit.edu?Subject=CoAXs%20help" target="_top">coaxs-help@mit.edu</a>.

          </p>
        </div>


      </Section>

      <Section className="gray" heading="Atlanta’s transit improvements projects">


        <div>
          <p>
            The Mobility Features Collaborative (MFC) at MIT and Advance Atlanta have joined efforts to explore the impacts of transit improvements in Atlanta. After voters approved a half penny increase to the Metropolitan Atlanta Rapid Transit Authority (MARTA) sales tax in November 2016, MARTA is considering a handful of projects to enhance the city’s public transit system. We’re particularly interested in looking at the potential outcomes of some of these projects on people’s mobility using CoAXs.
</p>
          <p>
            We’ll be exploring the impact of two Bus Rapid Transit (BRT) lines, a total of five ‘infill’ stations on the red and green lines, and the extension of the Streetcar Line. The BRT lines we’re considering are the Campbellton Rapid Bus, which is planned to run on the Campbellton Rd. corridor from Oakland City to the proposed Greenbriar Transfer Center, and the North Side Drive Rapid Bus, which will run on Northside Drive from I-75 to West End station. The map below shows the total projects under MARTA’s consideration (in grey) and the specific improvements we seek to test (in orange):
          </p>

          <div><strong>Atlanta’s transit improvements projects</strong></div>
          <div><img src="img/ATL.png" width="50%"/></div>
          <strong>Source: MARTA</strong>
          <br/>
          <br/>

          <p>
            We will be exploring 4 scenarios:

            <ul>
              <li><strong>Scenario 1: BRT’s only: </strong>Under this scenario we will measure accessibility gains and travel time savings resulting from the construction of the Campbellton and Northside Drive BRT lines.
              </li>
              <li><strong>Scenario 2: BRT + Infill Stations: </strong>Building on scenario 1, we will test the additional impact of adding 3 stations to the Red Line and 2 to the Green Line (5 in total) within their current length (infill stations).
              </li>
              <li><strong>Scenario 3: Street Car only: </strong>Look at the changes in accessibility resulting from the eastbound extension of the Streetcar Line.
              </li>
              <li> <strong>Scenario 4: All improvements: </strong>As its name suggest, this scenario will look at the aggregated accessibility gains of all improvements.
              </li>

            </ul>







          </p>

        </div>


      </Section>

      <Section heading="Get started: Sign up (new user) or sign in (existing user)">

        <button className="btn btn-primary" data-toggle="modal" data-target="#signup-modal">Sign up</button>
        <button className="btn btn-success" data-toggle="modal" data-target="#signin-modal" style={{marginLeft: 20}}>Sign in
        </button>

      </Section>

      <div style={{marginTop:"7rem" }}>
        <Section className="subhero" >
          <ImageList centered>
            <ImageListItem src="img/transitcenter3.png" url="http://transitcenter.org"/>
            <ImageListItem src="img/DUSPMIT2.png" url="https://dusp.mit.edu"/>
            <ImageListItem src="img/fmc.png" url="http://mfc.mit.edu"/>
          </ImageList>
        </Section>
      </div>



      <div style={{marginTop:"-4rem"}}>

        <Footer brandName={brandName}
                githubUrl="https://github.com/mitTransportAnalyst/CoAXs-React"
                address={businessAddress}>
                style={{marginTop:0}}



        </Footer>

      </div>

    </Page>
  );
};
