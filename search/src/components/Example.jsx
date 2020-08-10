import React from 'react';
import PropTypes from 'prop-types';

const Example = ({ title }) => <div>
  <h1>{ title.name }</h1>
  <input type="text"/>
</div>;

Example.propTypes = {
};

export default Example;
