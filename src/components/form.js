import React, {Component} from 'react';
import List from "./list";
import Radios from "./radios";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentData: '',
      allData: [],
      filter: 'all',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChange(e) {
    this.setState({currentData: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      allData: [...this.state.allData, this.state.currentData],
      currentData: '',
    });
  }

  handleChecked(filterName) {
    this.setState({filter: filterName});
  }

  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.currentData} onChange={this.handleChange}/>
            <button>Click me</button>
          </form>
          <Radios handleChecked={this.handleChecked}/>
          <List data={this.state.allData} filter={this.state.filter}/>
        </div>
    );
  }
}

export default Form;
