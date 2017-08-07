import React, {Component} from 'react';
import PlannedItem from './plannedItem';
import EditingItem from './editingItem';
import CompletedItem from './completedItem';

class ListItem extends Component {
  render() {
    let isCompleted = this.props.item.isCompleted && this.props.filter !== 'planned';
    let isPlanned = !this.props.item.isCompleted && this.props.filter !== 'completed';

    return (
        this.props.item.isEdit ?
            <EditingItem item={this.props.item} saveChange={this.props.saveChange}/> :
            isPlanned ?
                <PlannedItem onItemClick={this.props.onItemClick} item={this.props.item}
                             onDelete={this.props.onDelete} changeStatus={this.props.changeStatus}/> :
                isCompleted ?
                    <CompletedItem onItemClick={this.props.onItemClick} item={this.props.item}
                                   onDelete={this.props.onDelete} changeStatus={this.props.changeStatus}/> : null
    );
  }
}

export default ListItem;
