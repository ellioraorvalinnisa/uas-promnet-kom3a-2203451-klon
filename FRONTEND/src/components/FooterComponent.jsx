import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <span style={{ fontSize: '18px', color: 'dark gray'}}>
            © Copyright by Elliora Orva Linnisa 
            Mastery 2024, All Come Right
          </span>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
