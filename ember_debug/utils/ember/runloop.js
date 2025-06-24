import Ember, { Runloop as EmberRunloop } from '../ember';
// import * as ownRunloop from './own-runloop';

// it could happen that runloop is available but _backburner is not exported (dead code)
// then we need to use our own.
// let module = ownRunloop;
// let _backburner = ownRunloop._backburner;
let module;
let _backburner;

// const keys = ['cancel', 'debounce', 'join', 'later', 'scheduleOnce'];

if (EmberRunloop) {
  module = EmberRunloop;
  _backburner = EmberRunloop._backburner || EmberRunloop.backburner;
} else {
  // eslint-disable-next-line ember/new-module-imports
  module = Ember?.run || module;
  // eslint-disable-next-line ember/new-module-imports
  _backburner = Ember?.run?.backburner || _backburner;
}

// if (!keys.every((k) => k in module)) {
//   module = ownRunloop;
// }

// if it is our own, run a internal to trigger `end`
// required in object inspector & render debug
// function loop() {
//   _backburner.later('actions', loop, 300);
// }

// if (_backburner === ownRunloop._backburner) {
//   loop();
// }

// export let run = ownRunloop.run;
export { _backburner };
// export let { cancel, debounce, join, later, scheduleOnce } = module;
export let { cancel, debounce, join, later, run, scheduleOnce } = module;
