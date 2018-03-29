import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import value from './modules/valueRe'


Vue.use(Vuex)

export default new  Vuex.Store({
	getters,
	modules : {
		ve:value
	}
})