import { asyncRoutes, constantRoutes,} from "@/router";
import {OasyncRoutes} from "@/moke.ts";//临时模拟数据


const state = {
	routes: [],
	addRoutes: []
};

const mutations = {
	SET_ROUTES: (state, routes) => {
		state.addRoutes = routes;
		state.routes = constantRoutes.concat(routes);
    console.log('已有路由表',state.addRoutes,state.routes)
	}
};

const actions = {
	async generateRoutes({ commit }) {
   
		const rs = await OasyncRoutes;
    console.log('1',rs)
		const accessedRoutes = recursiveAsyncRoutes(asyncRoutes, rs);
    console.log('2',accessedRoutes)
		return new Promise(resolve => {
			commit("SET_ROUTES", accessedRoutes);
			resolve(accessedRoutes);
			localStorage.setItem("userMenu", JSON.stringify(rs));
			// todo 为了避开权限，临时处理：commit("SET_ROUTES", asyncRoutes);
			// commit("SET_ROUTES", asyncRoutes);
			// resolve(asyncRoutes);
		});
	}
};

/**
 * 比较路由名称是否相等
 * @param asyncRouterList
 * @param userRouterList
 * @returns {Boolean}
 */
 function hasPath(asyncRouterItem, userRouteItem) {
	return asyncRouterItem.name === userRouteItem.name;
}

/**
 * 通过循环递归出符合用户权限的路由表
 * @param asyncRouterList
 * @param userRouterList
 * @returns {*[]}
 */
export function recursiveAsyncRoutes(asyncRoutes, userRouterList) {
	let res = [];
	asyncRoutes.forEach(route => {
		const tmp = { ...route };
    console.log('tmp',tmp,userRouterList)
		//这一步主要是为了添加404路由// && !tmp.hasOwnProperty("children")
		if (tmp.path === "*") {
			res.push(tmp);
		} else {
			userRouterList.forEach(uRoute => {
				if (hasPath(tmp, uRoute)) {
					if (tmp.children) {
						tmp.children = recursiveAsyncRoutes(
							tmp.children,
							userRouterList
						);
					}
					res.push(tmp);
				}
			});
		}
	});
	return res;
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
};