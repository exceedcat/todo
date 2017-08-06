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
        this.state.isCompleted && this.props.filter !== 'planned' ?
            <li onClick={this.handleClick}><s>{this.props.data}</s></li> :
            !this.state.isCompleted && this.props.filter !== 'completed' ?
                <li onClick={this.handleClick}>{this.props.data}</li> :
                null
    );
  }
}

class List extends Component {
  render() {
    return (
        <ul>
          {this.props.data.map((x, i) => <ListItem key={i} data={x} filter={this.props.filter}/>)}
        </ul>
    );
  }

}

export default List;
