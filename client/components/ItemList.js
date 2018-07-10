import React, { Component } from 'react';

class ItemList extends Component {

  renderItems() {
    return this.props.items.map(({ id, content}) => {
      return (
        <li key={ id } className="collection-item">
          { content }
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="collection">
        { this.renderItems() }
      </ul>
    );
  }
}

export default ItemList;
