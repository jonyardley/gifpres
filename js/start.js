/* @flow */

import React, {Component} from 'react';
import {actions} from './state';
import xhr from 'xhr';
import type {SlideModel} from './models/slide';

export default class Start extends Component {

  addSlide() {
    actions.addSlide();
  }

  removeSlide(index: number) {
    console.log('TODO: REMOVE SLIDES');
  }

  updateSlide(index: number, event: Object) {
    actions.updateSlideLabel(index, event.target.value);
  }

  getImageUrls() {
    this.props.slides.forEach((slide, index) => {
      this.getImageUrl(index, slide);
    });
  }

  getImageUrl(index: number, slide: SlideModel){
    const url = `http://api.giphy.com/v1/gifs/random?tag=${slide.label}&limit=1&api_key=dc6zaTOxFJmzC`;
    xhr.get(url, (err, response) => {
      actions.updateSlideImage(index, JSON.parse(response.body));
    });
  }

  start() {
    this.props.history.push('/play');
  }

  render() {
    const readyCount = this.props.slides.reduce((total, slide) => total + (slide.loaded ? 1 : 0), 0);
    const ready =  readyCount === this.props.slides.length;
    return (
      <div className="v-align">
        <h2>Create a new presentation</h2>
        {this.props.slides.map(function(slide, index){
          return (
            <div key={`new-slide-${index}`}>
              {`${index + 1}: `}<input defaultValue={slide.label} onChange={this.updateSlide.bind(this, index)}></input>
            <button onClick={event => this.removeSlide.bind(this, index, event)}>-</button>
            </div>
            )
        }.bind(this))}
        <div>
          <button onClick={this.addSlide.bind(this)}>+</button>
          <button onClick={ready ? this.start.bind(this) : this.getImageUrls.bind(this)}>{ready ? 'Play' : 'Generate'}</button>
        </div>
      </div>
    )
  }
}
