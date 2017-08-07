import React, {Component} from 'react';

class CompletedItem extends Component {
  render() {
    return (
        <div>
          <li onClick={() => this.props.onItemClick(this.props.item)}><s>{this.props.item.data}</s></li>
          <button onClick={() => this.props.changeStatus(this.props.item)}>decomplete</button>
          <button onClick={() => this.props.onDelete(this.props.item)}>delete</button>
        </div>
    );
  }
}

export default CompletedItem;
