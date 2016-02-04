import React, {Component} from 'react';
import {state} from './state';
import EventDispatcher from './event-dispatcher';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = state.toJS();
  }

  componentDidMount() {
    EventDispatcher.on('update', this.updateState.bind(this));
  }

  updateState(newState) {
    this.setState(newState);
  }

  render() {
    return (
      <div className="app-wrapper">
        {this.props.children && React.cloneElement(this.props.children, this.state)}
      </div>
    )
  }
}
