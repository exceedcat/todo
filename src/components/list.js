import React, {Component} from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({isCompleted: !this.state.isCompleted});
  }

  render() {
    return (
        this.state.isCompleted ?
            <li onClick={this.handleClick}><s>{this.props.data}</s></li> :
            <li onClick={this.handleClick}>{this.props.data}</li>
    );
  }
}

class List extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.props.data = ['temp', 'data'];
  // }
  render() {
    return (
        <ul>
          {this.props.data.map((x, i) => <ListItem key={i} data={x}/>)}
        </ul>
    );
  }

}

export default List;
