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

const brandName = "CoAXs Boston";
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
          <a className="btn btn-white btn-ghost"  data-toggle="modal" data-target="#signup-modal">Sign up</a>
          <a className="btn btn-white btn-ghost" data-toggle="modal" data-target="#signin-modal" style={{marginLeft: 20}} >Sign in</a>

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


      <Section heading="Intro">
        <div>
          <p>Transit planners often lack platforms for meaningfully engaging stakeholders and the public around transit projects. The complexities of transit networks have traditionally made it difficult to move beyond public hearings with pre-generated, static maps and abstract claims about "travel time savings" of different scenarios.
          </p>
          <p>
            What if there were interactive platforms to help planners and the public better understand the spatial impacts of transit? We are exploring ways to maximize the positive impacts of emerging urban accessibility standards and practices by building them into innovative tools to transform stakeholder engagement for transit projects.
          </p>
        </div>



      </Section>

      <Section className="gray">
        <HorizontalSplit padding="md">
          <div>
            <p className="lead">City of Atlanta Guiding Principles of Transit</p>
            <p>Purpose is to significantly expand MARTA transit service in Atlanta
              Receipts projected at $2.5 billion (2016$) over life of the tax
              Project list approved
              MARTA Board of Directors (May)
              City of Atlanta City Council (June)
              Referendum on November 8
            </p>
          </div>
          <div>
            <p className="lead">Potential High Capacity Improvements</p>
            <p>City of Atlanta
              Light Rail Transit
              Atlanta BeltLine Loop
              Irwin – AUC Line
              Downtown – Capitol Ave Line
              Crosstown Midtown Line
              Crosstown Crescent Line
              Peachtree – Ft Mac – Barge Rd Line
              “S” Concept – Murphy Crossing – Armour Yard via AUC and Eastside Trail
            </p>
          </div>
          <div>
            <p className="lead">Potential Bus Service Improvements</p>
            <p>Frequent Local Service
              15-minute peak; 30-minute off-peak service on Routes 12, 49, 51, 55 and 60
              Supporting Local Service
              Increased service during off-peak to include midday, nights and weekends on selected routes
            </p>
          </div>
        </HorizontalSplit>
      </Section>



      <Footer brandName={brandName}
        githubUrl="https://github.com/mitTransportAnalyst/CoAXs-React"
        address={businessAddress}>
      </Footer>
    </Page>
  );
};
