import React, {Component} from 'react';
import ListItem from './listItems/listItem';

class List extends Component {
  render() {
    return (
        <ul>
          {this.props.data.map((x, i) =>
              x.data &&
              <ListItem key={i} item={x} filter={this.props.filter}
                        onItemClick={this.props.onItemClick}
                        saveChange={this.props.saveChange}
                        onDelete={this.props.onDelete}
                        changeStatus={this.props.changeStatus}
              />
          )}
        </ul>
    );
  }

}

export default List;
