import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';

const AppViewModel = DefineMap.extend({
  message: {
    value: 'Hello World!',
    serialize: false
  },
  title: {
    value: 'donejs-bug',
    serialize: false
  },
  a: 'string'
});

route('{a}');

export default AppViewModel;
