import axios from "axios";

export const usersModule = {
    state: {
        users: [],
        isPostsLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPage: 0,
        /*sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
        ]*/
    },
    actions: {
        async GET_USERS({state, commit}) {
            try {
                commit("SET_LOADING", true);
                const response = await axios.get("https://my-json-server.typicode.com/Veniamin2003/vue-test-task-server/users", {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    }
                });
                commit('SET_TOTAL_PAGES', Math.ceil(response.headers['x-total-count'] / state.limit));
                commit('SET_USERS', response.data)
            } catch (e) {
                alert("Ошибка");
            } finally {
                commit("SET_LOADING", false);
            }
        },
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        SET_LOADING(state, bool) {
            state.isPostsLoading = bool;
        },
        SET_TOTAL_PAGES(state, totalPages) {
            state.totalPage = totalPages;
        },
    },
    getters: {
        USERS(state){
            return state.users;
        }
    },
    namespaced: true
}