import { refs } from './refs';
export function spinnerPlay() {
  refs.body.classList.add('loading');
  refs.body.classList.add('stop-scrolling');
}
export function spinnerStop() {
  window.setTimeout(function () {
    refs.body.classList.remove('loading');
    refs.body.classList.add('loaded');
    refs.body.classList.remove('stop-scrolling');
  }, 1500);
}
