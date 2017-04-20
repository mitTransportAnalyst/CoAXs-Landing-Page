import React from "react";
import { Link } from "react-router";
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
          <ImageListItem src="img/TransitCenter.png" url="http://transitcenter.org"/>
          <ImageListItem src="img/fmc.png" url="http://mfc.mit.edu"/>
        </ImageList>
      </Section>


      <Section heading="Welcome to CoAXs!">
        <div>
          <p>CoAXs is an interactive planning tool developed by a team at MIT that aims to improve participation and creative problem-solving in the transportation planning process. We’re partnering with LivableStreets to see how the tool can help advance conversations about bus priority upgrades in the Boston area.
          </p>
          <p>
            We’ve designed an experience that should take about 15-20 minutes to complete, and if you complete it, will enter you to win one of 5 $50 prizes. Here’s how it works. First, you’ll get a little more information about the projects that LivableStreets is exploring. You’ll then be prompted to fill out a pre-survey to give us some background on where you’re coming from, as well as provide consent for participating in this study. In the next steps, you’ll have a chance to use the tool to test different transportation scenarios that you’re interested in and see what the benefits could be for your city. When you’re finished using the tool, we’d ask that you again fill out a brief survey to help us understand what you got from using the tool. If you have any questions at any point, don’t hesitate to send a message to our team at coaxs-2017@mit.edu.
          </p>
        </div>



      </Section>

      <Section className="gray" heading="NOLA Scenario Descriptions">
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
            In New Orleans, CoAXs is set up to test potential modifications to RTA Route 16 and JeT routes E3 and E5, which are designed to increase access to jobs in and around the Ochsner Medical Center on Jefferson Highway. Transit connections across the Jefferson - Orleans parish border are limited and may decrease residents’ ability to access healthcare, jobs, and other services in a different parish. By testing this tool, you can help explore which combinations of the different proposed extensions, at different levels of service, have the greatest potential to improve cross-parish connections. The different alternatives that have been proposed include:
          </p>

          <img src="img/NOLAscenario.png" width="70%"/>




        </div>





      </Section>

      <Section heading="Sign up or Sign in">

        <button className="btn"  data-toggle="modal" data-target="#signup-modal">Sign up</button>
        <button className="btn" data-toggle="modal" data-target="#signin-modal" style={{marginLeft: 20}} >Sign in</button>

      </Section>


      <Footer brandName={brandName}
        githubUrl="https://github.com/mitTransportAnalyst/CoAXs-React"
        address={businessAddress}>
      </Footer>
    </Page>
  );
};
