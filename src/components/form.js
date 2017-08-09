import React, {Component} from 'react';
import List from './list';
import RadioGroup from './radios';
import SearchField from './searchField';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentData: '',
      currentDataPriority: 'normal',
      allData: JSON.parse(localStorage.getItem('todoData')) || [],
      statusFilter: 'all',
      tagFilter: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.add = this.add.bind(this);
    this.filterByStatus = this.filterByStatus.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.saveChange = this.saveChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.handleImportance = this.handleImportance.bind(this);
    this.filterByTag = this.filterByTag.bind(this);
    this.sortByPriority = this.sortByPriority.bind(this);
  }

  onInputChange(e) {
    this.setState({
      currentData: e.target.value
    });
  }

  add(e) {
    e.preventDefault();
    if (this.state.currentData === '') {
      return;
    }
    let newData = [
      ...this.state.allData,
      {
        data: this.state.currentData,
        isCompleted: false,
        priority: this.state.currentDataPriority,
        tags: this.getTags(this.state.currentData) || [],
      }
    ];
    this.setState({
      allData: newData,
      currentData: '',
    });
    this.updateLocalStorage(newData);
  }

  //filter radio
  filterByStatus(status) {
    this.setState({
      statusFilter: status,
    });
  }

  filterByTag(tag) {
    this.setState({
      tagFilter: tag,
    })
  }

  //priority radio
  handleImportance(priority) {
    this.setState({
      currentDataPriority: priority,
    })
  }

  sortByPriority() {
    this.setState({
      allData: this.state.allData.sort(function (a, b) {
        let priority = {
          'normal': 2,
          'medium': 1,
          'high': 0,
        };
        return priority[a.priority] - priority[b.priority];
      })
    })
  }

  // item clicked
  onItemClick(item) {
    console.log(this);
    console.log(item);
    let data = this.state.allData;
    let newData = [
      ...data.slice(0, data.indexOf(item)),
      Object.assign(item, {isEdit: true}),
      ...data.slice(data.indexOf(item) + 1)
    ];
    this.setState({
      allData: newData,
    });
  }

  //edit input lost focus
  saveChange(e) {
    let item = JSON.parse(e.target.id);
    item.tags = this.getTags(item.data) || [];
    let newData = this.state.allData.map(x => x.isEdit ?
        Object.assign(item, {data: e.target.value, isEdit: false}) : x);
    newData = newData.filter(x => x.data !== '');
    this.setState({
      allData: newData,
    });
    this.updateLocalStorage(newData);
  }

  //complete/uncomplete button clicked
  toggleComplete(item) {
    let data = this.state.allData;
    let newData = [
      ...data.slice(0, data.indexOf(item)),
      Object.assign(item, {isCompleted: !item.isCompleted}),
      ...data.slice(data.indexOf(item) + 1)
    ];
    this.setState({
      allData: newData,
    });
    this.updateLocalStorage(newData);
  }

  // button delete clicked
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
    data.forEach((x) => delete x.dataWithTags);
    console.log(data);
    localStorage.setItem('todoData', JSON.stringify(data.filter(x => x.data !== '')));
  }

  getTags(data) {
    return data.match(/\B#[_a-zа-яё0-9]+/gi);
  }

  render() {
    return (
        <div>
          <form onSubmit={this.add}>
            <input type="text" value={this.state.currentData} onChange={this.onInputChange}/>
            <button>Click me</button>
          </form>
          <RadioGroup handleChecked={this.handleImportance}
                      data={{name: 'priorityChoice', values: ['normal', 'medium', 'high']}}
          />
          <SearchField data={this.state.tagFilter} resetFilter={this.filterByTag}/>
          <button onClick={this.sortByPriority}>Otsortiruite, ples</button>
          <List
              data={this.state.allData}
              statusFilter={this.state.statusFilter}
              onItemClick={this.onItemClick}
              saveChange={this.saveChange}
              onDelete={this.onDelete}
              toggleComplete={this.toggleComplete}
              getTags={(data) => this.getTags(data)}
              tagFilter={this.state.tagFilter}
              filterByTag={this.filterByTag}
          />
          <RadioGroup handleChecked={this.filterByStatus}
                      data={{name: 'statusChoice', values: ['all', 'planned', 'completed']}}
          />
        </div>
    );
  }
}

export default Form;
