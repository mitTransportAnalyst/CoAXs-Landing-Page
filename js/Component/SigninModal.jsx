/**
 * Created by xinzheng on 3/22/17.
 */
import React from "react";
import { Col } from "./bootstrap.jsx";

class ModalHeader extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
  };

  static defaultProps = {
    title: "Sign in",
  };

  render() {
    return (
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          <span className="sr-only">Close</span>
        </button>
        <h4 className="modal-title lead">{this.props.title}</h4>
      </div>
    );
  }
}

class ModalFooter extends React.Component {

  static propTypes = {
    buttonText: React.PropTypes.string.isRequired,
  };

  static defaultProps = {
    buttonText: "Sign in",
  };

  render() {
    return (
      <div className="modal-footer">
        <button type="submit" className="btn btn-primary btn-block btn-ghost">{this.props.buttonText}</button>
      </div>
    );
  }
}


class ModalFooterRedirect extends React.Component {


  render() {
    return (
      <div className="modal-footer" >
        <button className="btn btn-primary btn-ghost" style={{marginRight: "1.8rem"}} onClick={(e)=>{window.location.href="http://coaxs.herokuapp.com/main/atl/accessibility?control28770612="+this.props.email}}>Accessibility</button>
        <button className="btn btn-primary btn-ghost" onClick={(e)=>{window.location.href="http://coaxs.herokuapp.com/main/atl/point2point?control28805034="+this.props.email}}>Travel Time</button>
      </div>
    );
  }
}


export class SigninModal extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    buttonText: React.PropTypes.string.isRequired,
    modalId: React.PropTypes.string.isRequired,
    onSubmit: React.PropTypes.func,
  };

  static defaultProps = {
    title: "Sign in",
    buttonText: "Sign in",
    modalId: "signin-modal",
  };

  state = { isInDB : true, showRedirectModal: false };

  handleChange = (e) => {
    this.setState({ [`${e.target.name}`]: e.target.value });

  };

  handleSubmit = (e) => {
    e.preventDefault();
    const emailAddress = this.state.email;

    fetch('https://api.mlab.com/api/1/databases/tdm/collections/login?q={"email":"'+emailAddress+'"}&apiKey=9zaMF9-feKwS1ZliH769u7LranDon3cC',{method:'GET', })
      .then(res => res.json())
      .then(res => { if (res.length === 0) {this.setState({isInDB: false})} else {this.setState({showRedirectModal: true})} });

  };

  renderBody = () => {
    if (this.props.children) return this.props.children;
    return (
      <div>
        <SigninModal.Input type="email" required name="email" label="Email" placeholder="Email"/>
      </div>
    );
  };

  render() {
    const modalId = this.props.modalId;
    return (
      <div>

        <div className="modal fade neal-signup-modal" key={modalId} id={modalId}
             tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">

              <ModalHeader title={this.props.title}/>
              {this.state.isInDB ? null : <div className="alert alert-warning" role="alert">
                <strong>Warning!</strong> You have not signup. Please go back to click sign up button
              </div>}
              <form className="form-vertical" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <div className="modal-body">
                  { this.renderBody() }
                </div>

                {this.state.showRedirectModal ? <ModalFooterRedirect email={this.state.email}/> :  <ModalFooter buttonText={this.props.buttonText} />}


              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

SigninModal.Input = class extends React.Component {
  static propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string.isRequired,
  };

  static defaultProps = {
    type: "text",
  };

  render() {
    return (
      <div className="form-group neal-signup-modal-input">
        <label className="sr-only" htmlFor={this.props.name}>{this.props.label}</label>
        <input type="text" className="form-control" name={this.props.name}
               placeholder={this.props.placeholder} {... this.props}/>
      </div>
    );
  }
};
