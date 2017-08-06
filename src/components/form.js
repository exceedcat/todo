import React, {Component} from 'react';
import List from "./list";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentData: '',
      allData: [],
      filter: 'all',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChange(e) {
    this.setState({currentData: e.target.value});
  }

  handleClick(e) {
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
          <form>
            <input type="text" value={this.state.currentData} onChange={this.handleChange}/>
            <button onClick={this.handleClick}>Click me</button>
          </form>

          <input type="radio" name="StatusChoice" value="all" onClick={() => this.handleChecked('all')} defaultChecked/>
          all
          <input type="radio" name="StatusChoice" value="planned" onClick={() => this.handleChecked('planned')}/>
          planned
          <input type="radio" name="StatusChoice" value="completed" onClick={() => this.handleChecked('completed')}/>
          completed
          <List data={this.state.allData} filter={this.state.filter}/>
        </div>
    );
  }
}

export default Form;
