import { make } from "vuex-pathify";

export const state = () => ({
	drawerState: null,
	isCenteredContent: false,
	toolbarTitle: process.env.npm_package_name,
	snackbar: {
		timeout: 2000,
		isVisible: false,
		text: null
	}
});

export const mutations = make.mutations(state);

export const actions = make.actions(state);

export default {
	namespaced: true,
	state,
	mutations,
	actions
};