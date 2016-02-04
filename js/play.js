import React, {Component} from 'react';
import Slide from './slide';

export default class Play extends Component {

  constructor(props) {
    super(props);
    this.state = { activeSlide: 0 };
  }

  componentDidMount() {
    document.onkeydown = checkKey.bind(this);
    function checkKey(e) {
      e = e || window.event;
      console.log(this);
      const currentSlide = this.state.activeSlide;
      if (e.keyCode == '37') {
        if (currentSlide != 0){
          this.setState({activeSlide: currentSlide - 1});
        }
      }
      else if (e.keyCode == '39') {
        if (currentSlide < this.props.slides.length - 1){
          this.setState({activeSlide: currentSlide + 1});
        }
      }
    }
  }

  componentWillUnmount() {
    document.onkeydown = null;
  }

  render() {
    const activeSlide = this.state.activeSlide;
    return (
      <div className="slides">
        {this.props.slides.map((slide, index) => <Slide key={`slide-${index}`}
          slide={slide}
          active={activeSlide === index}/>)}
      </div>
    )
  }
}
