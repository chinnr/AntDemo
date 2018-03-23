export default {
  namespace:"productss",
  state:[],
  reducers:{
    delete(state,{payload:id}){
      return state.filter(item=>item.id!==id);
    }
  }
}
//model主要包含state和更新state的reducers/异步更新state的effects,订阅数据源的subscriptions
