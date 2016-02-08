/* @flow */

import EventDispatcher from './event-dispatcher';
import Immutable from 'immutable';
import SlideModel from './models/slide';

let state = Immutable.fromJS({
  slides: [SlideModel()]
});

function addSlide() {
  const newSlides = state.get('slides').push(Immutable.Map(SlideModel()));
  state = state.set('slides', newSlides);
  EventDispatcher.emit('update', state.toJS());
}

function updateSlideLabel(index: number, label: string) {
  const newSlides = state.get('slides').update(index, item => item.merge({label}));
  state = state.set('slides', newSlides);
  EventDispatcher.emit('update', state.toJS());
}

function updateSlideImage(index: number, response: Object){
  let update;
  if(!response.data.image_original_url){
    update = {failed: true};
  }else{
    update = {failed: false, url: response.data.image_original_url, loaded: true}
  }
  const newSlides = state.get('slides').update(index, item => item.merge(update));
  state = state.set('slides', newSlides);
  EventDispatcher.emit('update', state.toJS());
}

const actions = {
  addSlide,
  updateSlideLabel,
  updateSlideImage
};

export {state, actions};
