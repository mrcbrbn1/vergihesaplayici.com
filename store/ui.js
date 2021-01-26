import { make } from "vuex-pathify";

export const state = () => ({
	drawerState: null,
	toolbarTitle: process.env.npm_package_name,
	breadcrumbs: []
});

export const mutations = make.mutations(state);

export const actions = make.actions(state);

export default {
	namespaced: true,
	state,
	mutations,
	actions
};