import React, {Component} from 'react';

class EditingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.item.data,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      data: e.target.value
    });
  }

  render() {
    let id = Object.assign({}, {
      data: this.props.item.data,
      isCompleted: this.props.item.isCompleted,
      priority: this.props.item.priority,
      isEdit: true,
    });
    return (
        <li><input
            type="text"
            value={this.state.data}
            onChange={this.handleChange}
            onKeyPress={(e) => e.key === 'Enter' && this.props.saveChange(e)}
            onBlur={this.props.saveChange}
            id={JSON.stringify(id)}
            autoFocus/>
        </li>
    );
  }
}

export default EditingItem;
