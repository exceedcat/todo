import React, {Component} from 'react';
import List from "./list";
import Radios from "./radios";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentData: '',
      allData: JSON.parse(localStorage.getItem('todoData')) || [],
      filter: 'all',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.saveChange = this.saveChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      currentData: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newData = [
      ...this.state.allData,
      {data: this.state.currentData, isCompleted: false}
    ];
    this.setState({
      allData: newData,
      currentData: '',
    });
    this.updateLocalStorage(newData);
  }

  handleChecked(filter) {
    this.setState({
      filter: filter
    });
  }

  saveChange(e) {
    let item = JSON.parse(e.target.id);
    let newData = this.state.allData.map(x => x.isEdit ?
        {
          data: e.target.value,
          isCompleted: item.isCompleted
        } : x);
    this.setState({
      allData: newData,
    });
    this.updateLocalStorage(newData);
  }

  // handleClick where item changes its status when is being clicked
  //
  // handleClick(item) {
  //   let data = this.state.allData;
  //   let newData = [
  //     ...data.slice(0, data.indexOf(item)),
  //     {data: item.data, isCompleted: !item.isCompleted},
  //     ...data.slice(data.indexOf(item) + 1)
  //   ];
  //   this.setState({
  //     allData: newData,
  //   });
  //   this.updateLocalStorage(newData);
  // }

  handleClick(item) {
    let data = this.state.allData;
    let newData = [
      ...data.slice(0, data.indexOf(item)),
      {data: item.data, isCompleted: item.isCompleted, isEdit: true},
      ...data.slice(data.indexOf(item) + 1)
    ];
    this.setState({
      allData: newData,
    });
  }

  updateLocalStorage(data) {
    localStorage.setItem('todoData', JSON.stringify(data.filter(x => x.data !== '')));
  }

  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.currentData} onChange={this.handleChange}/>
            <button>Click me</button>
          </form>
          <Radios handleChecked={this.handleChecked}/>
          <List
              data={this.state.allData}
              filter={this.state.filter}
              handleClick={this.handleClick}
              saveChange={this.saveChange}
          />
        </div>
    );
  }
}

export default Form;
