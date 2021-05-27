const state = {
   //左侧栏开关
   isCollapse:false
}

const mutations = {
  //改变左侧开关
  changeCollapse:(state,data) => {
    state.isCollapse = data;
  }
}
 const actions = {

 }

export default {
  namespaced:true,//用于在全局引用此文件里方法时标注这一个文件名
  state,
  mutations,
  actions
}