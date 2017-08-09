import React, {Component} from 'react';

class PlannedItem extends Component {
  render() {
    let data = this.props.item.dataWithTags || this.props.item.data;

    return (
        <div>
          <li onClick={() => this.props.onItemClick(this.props.item)}>{data}</li>
          <i>{this.props.item.priority}</i> <br/>
          <button onClick={() => this.props.toggleComplete(this.props.item)}>complete</button>
          <button onClick={() => this.props.onDelete(this.props.item)}>delete</button>
        </div>
    );
  }
}

export default PlannedItem;
