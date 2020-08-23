import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Nova} from 'nova-react-bridge'

class Search extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
  }

  render() {
    return (
      <div>
        <div>Search Components!</div>
        <table>
          <tr>
            {['🐙', '🐳', '🐊', '🐍', '🐷', '🐶', '🐯'].map((emoji, key) => {
              return <td key={key}>
                <Nova
                  name="Product"
                  data={{title: emoji}}/>
              </td>
            })}
          </tr>
        </table>
      </div>
    );
  }
}

Search.propTypes = {
  title: PropTypes.object.isRequired
};

export default Search;
