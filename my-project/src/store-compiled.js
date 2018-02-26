import _JSON$stringify from 'babel-runtime/core-js/json/stringify';
/**
 * Created by cassie on 2017/12/4.
 */
var STORAGE_KEY = 'todos-vuejs';

export default {
  fetch: function fetch() {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
  },
  save: function save(items) {
    window.localStorage.setItem(STORAGE_KEY, _JSON$stringify(items));
  }
};

//# sourceMappingURL=store-compiled.js.map