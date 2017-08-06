import React, {Component} from 'react';

class Radios extends Component {
  render() {
    return (
        <div>
          <input type="radio" name="StatusChoice" value="all" onClick={() => this.props.handleChecked('all')}
                 defaultChecked/>
          all
          <input type="radio" name="StatusChoice" value="planned" onClick={() => this.props.handleChecked('planned')}/>
          planned
          <input type="radio" name="StatusChoice" value="completed"
                 onClick={() => this.props.handleChecked('completed')}/>
          completed
        </div>
    );
  }
}

export default Radios;
