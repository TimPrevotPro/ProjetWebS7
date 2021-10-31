import createStore from "vuex";

// @ts-ignore
export default createStore({
    state: {
        isConnected: false,
        user: {
            admin: false,
            user_id: '',
            identite: ''
        }
    },
    mutations: {
        setIsConnected(state, newVar) {
            state.isConnected = newVar;
        },
        setUser(state, user) {
            state.user.admin = user.admin;
            state.user.user_id = user.user_id;
            state.user.identite = user.identite;
        }
    },
    actions: {},
    modules: {},
});
