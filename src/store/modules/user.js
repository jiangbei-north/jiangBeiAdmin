
//import { resetRouter } from "@/router";      原更新路由，现无用


const state = {
  roles:[],
  name: "",
}

const mutations = {
  SET_ROLES: (state, roles) => {
		state.roles[0] = roles;
	},
  SET_NAME: (state, name) => {
		state.name = name;
	},
}

const actions = {
  login({commit},userInfo){
    console.log(userInfo)
    commit('SET_NAME',userInfo)
    
  },
  changeRoles({commit,dispatch},role){
    console.log('555555555',commit,dispatch,role)
    commit('SET_ROLES',role)
    //resetRouter();
  }
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
};