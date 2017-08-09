import React, {Component} from 'react';

class Radio extends Component {
  render() {
    return <div>
      <input type="radio" name={this.props.name} value={this.props.data}
             onClick={() => this.props.handleChecked(this.props.data)} defaultChecked={this.props.id === 0}/>
      {this.props.data}
    </div>
  }
}

class RadioGroup extends Component {
  render() {
    return (
        <div>
          {this.props.data.values.map((x, i) =>
              <Radio name={this.props.data.name} data={x} key={i} id={i} handleChecked={this.props.handleChecked}/>)}
        </div>
    );
  }
}

export default RadioGroup;
