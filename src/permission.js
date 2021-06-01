import router from "./router";
import store from "./store";
import NProgress from "nprogress";

//路由守卫
router.beforeEach(async (to, from, next) => {


  console.log(to, from)
  console.log('下一步', to.path)
  NProgress.start();


   if (to.path === '/404') {
    next();
    NProgress.done();
  } else {
    const hasRoles = store.getters.roles && store.getters.roles.length > 0;
    console.log('当前是否有权限',store.getters.roles)
    if (hasRoles) {
      if(to.matched.length === 0){
        next('/404')
      }
      next();
    } else {
      const accessRoutes = await store.dispatch("permission/generateRoutes");
      store.dispatch("user/changeRoles","12");
      console.log('路由一结果', accessRoutes)
      accessRoutes.forEach(element => {
        router.addRoute(element);
      })
      
      console.log('新路由', router)
      next({ ...to, replace: true });
      NProgress.done();
    }

  }


})
router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});



