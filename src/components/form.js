import React, {Component} from 'react';
import List from "./list";
import RadioGroup from "./radios";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentData: '',
      allData: JSON.parse(localStorage.getItem('todoData')) || [],
      filter: 'all',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.saveChange = this.saveChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  onInputChange(e) {
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

  changeStatus(item) {
    let data = this.state.allData;
    let newData = [
      ...data.slice(0, data.indexOf(item)),
      {data: item.data, isCompleted: !item.isCompleted},
      ...data.slice(data.indexOf(item) + 1)
    ];
    this.setState({
      allData: newData,
    });
    this.updateLocalStorage(newData);
  }

  onItemClick(item) {
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

  onDelete(item) {
    let data = this.state.allData;
    let newData = [
      ...data.slice(0, data.indexOf(item)),
      ...data.slice(data.indexOf(item) + 1)
    ];
    this.setState({
      allData: newData,
    });
    this.updateLocalStorage(newData);
  }

  updateLocalStorage(data) {
    localStorage.setItem('todoData', JSON.stringify(data.filter(x => x.data !== '')));
  }

  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.currentData} onChange={this.onInputChange}/>
            <button>Click me</button>
          </form>
          <RadioGroup handleChecked={this.handleChecked}/>
          <List
              data={this.state.allData}
              filter={this.state.filter}
              onItemClick={this.onItemClick}
              saveChange={this.saveChange}
              onDelete={this.onDelete}
              changeStatus={this.changeStatus}
          />
        </div>
    );
  }
}

export default Form;
