/* @flow */

export type SlideModel = {
  label: string;
  url: string;
  loaded: bool;
  failed: bool;
};

export default () : SlideModel => ({
  label: '',
  url: '',
  loaded: false,
  failed: false
});
