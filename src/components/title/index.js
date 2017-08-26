import React, { Component } from 'react';
import './styles.scss';
class Title extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="sr-title">
        <span>{this.props.title}</span>
      </div>
    )
  }
}
export default Title;