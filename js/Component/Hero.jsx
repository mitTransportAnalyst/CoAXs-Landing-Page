/**
 * Created by xinzheng on 3/22/17.
 */

import React from "react";
import { Container, Row, Col } from "./bootstrap.jsx";
import classNames from "classnames";

export class Hero extends React.Component {

  static propTypes = {
    backgroundImage: React.PropTypes.string,
  };

  render() {
    const _style = {};
    if (this.props.backgroundImage) {
      _style.backgroundImage = `url(${this.props.backgroundImage})`;
    }
    const _className = classNames("neal-hero jumbotron jumbotron-fluid", this.props.className);
    return (
        <div {... this.props} className={_className} style={{height: "65vh",backgroundImage:`url(${this.props.backgroundImage})`,padding:"10rem", marginBottom:"20px"}}>

        <Container>
          { this.props.children }
        </Container>
      </div>
    );
  }
}


