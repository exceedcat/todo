import React, {Component} from 'react';

class ListItem extends Component {
  render() {
    return (
        this.props.item.isCompleted && this.props.filter !== 'planned' ?
            <li onClick={() => this.props.handleClick(this.props.item)}><s>{this.props.item.data}</s></li> :
            !this.props.item.isCompleted && this.props.filter !== 'completed' ?
                <li onClick={() => this.props.handleClick(this.props.item)}>{this.props.item.data}</li> :
                null
    );
  }
}

class List extends Component {
  render() {
    return (
        <ul>
          {this.props.data.map((x, i) =>
              <ListItem
                  key={i}
                  item={x}
                  filter={this.props.filter}
                  handleClick={this.props.handleClick}/>
          )}
        </ul>
    );
  }

}

export default List;
