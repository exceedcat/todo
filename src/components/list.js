import React, {Component} from 'react';
import ListItem from './listItems/listItem';

class List extends Component {
  render() {
    return (
        <ul>
          {this.props.data.map((x, i) =>
              <ListItem key={i} item={x} statusFilter={this.props.statusFilter}
                        onItemClick={this.props.onItemClick}
                        saveChange={this.props.saveChange}
                        onDelete={this.props.onDelete}
                        toggleComplete={this.props.toggleComplete}
                        getTags={(data) => this.props.getTags(data)}
                        tagFilter={this.props.tagFilter}
                        filterByTag={this.props.filterByTag}
              />
          )}
        </ul>
    );
  }

}

export default List;
