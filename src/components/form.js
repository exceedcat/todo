import React, {Component} from 'react';
import List from "./list";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
      allData: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({data: e.target.value});
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      allData: [...this.state.allData, this.state.data],
      data: '',
    });
    console.log(this.state.data);
  }

  render() {
    return (
        <div>
          <form>
            <input type="text" value={this.state.data} onChange={this.handleChange}/>
            <button onClick={this.handleClick}>Click me</button>
          </form>
          <List data={this.state.allData}/>
        </div>
    );
  }
}

export default Form;
