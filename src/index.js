//document.write('hello. webpack runs ok!')
var Vue = require('vue')
var helloVue = require('./views/hello.vue')
var firstcomponent = require('./components/firstcomponent.vue')
//import Vue from 'vue'
//import helloVue from './views/hello.vue'
 new Vue({
    el: "#app",
    components: {
        hello: helloVue,
        firstcomponent:firstcomponent
    }
     
    
})