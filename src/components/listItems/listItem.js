import React, {Component} from 'react';
import PlannedItem from './plannedItem';
import EditingItem from './editingItem';
import CompletedItem from './completedItem';

class ListItem extends Component {

  getDataWithTags(item) {
    // console.log(item.data);
    let dataWithoutTags = item.data.split(/\B#[_a-zа-яё0-9]+/gi);
    let data = [];
    // joining data without tags and tags, converted to the links
    for (let i = 0; i < dataWithoutTags.length; i++) {
      data.push(dataWithoutTags[i]);
      data.push(<a href="#" key={i} onClick={(e) => (e.stopPropagation(),
          this.props.filterByTag(item.tags[i]))
      }>{item.tags[i]}</a>);
    }
    return data;
  }

  render() {
    let item = this.props.item;
    if (item.data === '') return null;
    if (this.props.tagFilter && this.props.item.tags.indexOf(this.props.tagFilter) === -1) return null;

    let isCompleted = item.isCompleted && this.props.statusFilter !== 'planned';
    let isPlanned = !item.isCompleted && this.props.statusFilter !== 'completed';

    item.tags = this.props.getTags(this.props.item.data) || [];
    if (!item.isEdit && item.tags.length) {
      item = Object.assign(item, {dataWithTags: this.getDataWithTags(item)});
    }

    return (
        this.props.item.isEdit ?
            <EditingItem item={this.props.item} saveChange={this.props.saveChange}/> :
            isPlanned ?
                <PlannedItem onItemClick={this.props.onItemClick} item={item}
                             onDelete={this.props.onDelete} toggleComplete={this.props.toggleComplete}/> :
                isCompleted ?
                    <CompletedItem onItemClick={this.props.onItemClick} item={item}
                                   onDelete={this.props.onDelete} toggleComplete={this.props.toggleComplete}/> : null
    );
  }
}

export default ListItem;
