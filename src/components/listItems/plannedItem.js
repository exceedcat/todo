import React, {Component} from 'react';

class PlannedItem extends Component {
  render() {
    return (
        <div>
          <li onClick={() => this.props.onItemClick(this.props.item)}>{this.props.item.data}</li>
          <button onClick={() => this.props.changeStatus(this.props.item)}>complete</button>
          <button onClick={() => this.props.onDelete(this.props.item)}>delete</button>
        </div>
    );
  }
}

export default PlannedItem;
