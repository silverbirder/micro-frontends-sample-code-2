import React from 'react';
import PropTypes from 'prop-types';

const Example = ({title}) => <div>
  <div className="form-group">
    <label htmlFor="exampleInputIcon2">Search Keyword</label>
    <div className="input-group mb-4">
      <input className="form-control" placeholder={title.name} type="text"/>
      <div className="input-group-append">
        <button className="input-group-text">
          <span className="fas fa-search"></span>
        </button>
      </div>
    </div>
  </div>
  <div className="row">
    <div>
      <div className="card bg-primary border-light shadow-soft">
        <div className="card-body">
          <h3 className="h5 card-title">🐳🐳🐳</h3>
          <button className="btn btn-icon-only btn-primary" type="button" aria-label="love button" title="love button">
            <span aria-hidden="true" className="fas fa-shopping-cart"></span>
          </button>
        </div>
      </div>
    </div>
    <div>
      <div className="card bg-primary border-light shadow-soft">
        <div className="card-body">
          <h3 className="h5 card-title">🐙🐙🐙</h3>
          <button className="btn btn-icon-only btn-primary" type="button" aria-label="love button" title="love button">
            <span aria-hidden="true" className="fas fa-shopping-cart"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>;

Example.propTypes = {
  title: PropTypes.object.isRequired
};

export default Example;
