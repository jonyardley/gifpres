/* @flow */

export default class SlideModel {
  label: string;
  url: string;
  loaded: bool;
  failed: bool;

  constructor(){
    this.label = '';
    this.url = '';
    this.loaded = false;
    this.failed = false;
  }
}
