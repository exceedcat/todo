import React, {Component} from 'react';

class ListItem extends Component {

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
    return (
        this.props.item.isEdit ?
            <li><input
                type="text"
                value={this.state.data}
                onChange={this.handleChange}
                onKeyPress={(e) => e.key === 'Enter' && this.props.saveChange(e)}
                onBlur={this.props.saveChange}
                id={JSON.stringify(this.props.item)}
                autoFocus/>
            </li> :
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
              x.data &&
              <ListItem
                  key={i}
                  item={x}
                  filter={this.props.filter}
                  handleClick={this.props.handleClick}
                  saveChange={this.props.saveChange}
              />
          )}
        </ul>
    );
  }

}

export default List;
