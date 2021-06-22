const state = {
  foldList:[]
}

const mutations = {
 addFold:(state,data) => {
    state.foldList.push(data);
    
 },
 delFold:(state,data) => {
  for(let i in state.foldList){
    if(state.foldList[i].name == data.name){
      state.foldList.splice(i,1);
    }
  }
  
},
changeFold:(state,data) => {
  for(let i in state.foldList){
    if(state.foldList[i].name == data.name){
      state.foldList[i].isFold = data.isFold;
    }
  }
  console.log('改变',state.foldList)
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