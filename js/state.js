/* @flow */

import EventDispatcher from './event-dispatcher';
import Immutable from 'immutable';
import SlideModel from './models/slide';

let state = Immutable.fromJS({
  slides: [new SlideModel()]
});

function addSlide() {
  const newSlides = state.get('slides').push(Immutable.Map(new SlideModel()));
  state = state.set('slides', newSlides);
  EventDispatcher.emit('update', state.toJS());
}

function updateSlideLabel(index, label) {
  const newSlides = state.get('slides').update(index, item => item.merge({label}));
  state = state.set('slides', newSlides);
  EventDispatcher.emit('update', state.toJS());
}

function updateSlideImage(index, response){
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

const update = {
  addSlide,
  updateSlideLabel,
  updateSlideImage
};

export {state, update};
