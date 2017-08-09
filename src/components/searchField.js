import React, {Component} from 'react';

class SearchField extends Component {
  render() {
    return (this.props.data ?
            <div>
              <span>{this.props.data}</span>
              <button onClick={() => this.props.resetFilter('')}>stop searching bitches</button>
            </div> : null
    );
  }
}

export default SearchField;
