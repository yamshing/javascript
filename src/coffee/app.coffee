'use strict'
 
import Vue from 'vue'
import MyComponent from '../vue/my_component.vue'

document.addEventListener 'DOMContentLoaded',()->
	app = new Vue
		el:'#app'
		data:{
			a:100
		}
		components:{MyComponent}
		template:'<my-component/>'
		
	


