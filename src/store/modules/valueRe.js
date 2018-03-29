import Vue from 'vue'
import Vuex from 'vuex'

const state = {
	_value:1,
}
const mutations={
	SetValue(state,data){
		state._value+=data
	}
}	
const actions={
    GetValue({commit},urData){
		console.log(urData)
        commit('SetValue',urData)
    }
}
const getters={
	value: state => state._value,	
}
export default{
	state,
	mutations,
	actions,
	getters
}