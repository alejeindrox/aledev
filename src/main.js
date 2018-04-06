// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Ale from './components/Ale'
import VueFire from 'vuefire'
import Firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)
Firebase.initializeApp({
    apiKey: "AIzaSyBTQeQg5CH4sIt-p1dC445drwxOsEE_i78",
    authDomain: "aledev-1519067494359.firebaseapp.com",
    databaseURL: "https://aledev-1519067494359.firebaseio.com",
    projectId: "aledev-1519067494359",
    storageBucket: "aledev-1519067494359.appspot.com",
    messagingSenderId: "1093549240200"
})
export const db = Firebase.firestore()

Vue.config.productionTip = false


const alejandro = new Vue({
  el: '#app',
  components: { Ale },
  template: '<Ale/>'
})
