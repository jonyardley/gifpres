import React, {Component} from 'react';

export default class Slide extends Component {

  render() {
    return (
      <div className={`slide v-align ${this.props.active && 'active'}`}>
        <img src={this.props.slide.url} />
      </div>
    )
  }
}
