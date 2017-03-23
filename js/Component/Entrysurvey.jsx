/**
 * Created by xinzheng on 3/22/17.
 */
import React from "react";
import { Link } from "react-router";
import {
  Code,
  CustomerQuote, CustomerQuotes,
  DropdownMenu, DropdownToggle,
  Footer, FooterAddress,
  HorizontalSplit,
  ImageList, ImageListItem,
  Navbar, NavItem,
  Page,
  PricingPlan, PricingTable,
  Section,
  Stripe,
  Team,
  TeamMember,
} from "neal-react";

import {SignupModal} from "./SignupModal.jsx"
import {Hero} from "./Hero.jsx"
import {SignupInline} from "./Signup.jsx"

const brandName = "CoAXs Boston";
const brand = <span>{brandName}</span>;

const onSignup = ({ email: email}) => Stripe.StripeHandler.open({
  name: "Stripe Integration Included",
  description: "Like this? Donate $5 <3",
  panelLabel: "Donate {{amount}}",
  email: email,
  amount: 500,
});

const businessAddress = (
  <address>
    <strong>{brandName}</strong><br/>
    77 Massachusetts Avenue<br/>
    Cambridge, MA 02139<br/>
  </address>
);




export default (props) => {
  var submitted=false;

  return (
    <Page>

      <Navbar brand={brand} style = {{position:"fixed"}}>
      </Navbar>

      <div className="modal" id="myModal" role="dialog">
        <div className="modal-body">
          <iframe id="googleForm" src="https://docs.google.com/forms/d/e/1FAIpQLSeo1gTO7YTv-ggeV23oQ3NkIvodOMMBfAg1lG4kQcpy0BRztw/viewform?embedded=true" width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" >Loading...</iframe>
        </div>
      </div>



    </Page>

  );
};

