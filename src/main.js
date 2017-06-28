import Vue from 'vue'
import App from './Form.vue'

Vue.filter('currency', function (value) {
  return '$' + value.toFixed(2);
});

new Vue({
  el: '#app',
  render: h => h(App)
})
