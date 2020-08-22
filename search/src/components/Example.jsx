import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Example extends Component {
  constructor(props){
    super(props);
    this.title = props.title;
  }
  alertMessage() {
    alert('hey');
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="exampleInputIcon2">Search Keyword</label>
          <div className="input-group mb-4">
            <input className="form-control" placeholder={this.title.name} type="text"/>
            <div className="input-group-append">
              <button className="input-group-text" onClick={this.alertMessage}>
                <span className="fas fa-search"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {['🐙', '🐳', '🐊', '🐍', '🐷', '🐶', '🐯'].map((emoji, key) => {
            return <div key={key}>
              <div className="card bg-primary border-light shadow-soft">
                <div className="card-body">
                  <h3 className="h5 card-title">{emoji}{emoji}{emoji}</h3>
                  <button className="btn btn-icon-only btn-primary" type="button" aria-label="button" title="button">
                    <span aria-hidden="true" className="fas fa-shopping-cart"></span>
                  </button>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    );
  }
}

Example.propTypes = {
  title: PropTypes.object.isRequired
};

export default Example;
