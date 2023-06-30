import axios from "axios";

export const usersModule = {
    state: {
        users: [],
        filters: [],
        visible_params: [],
        isPostsLoading: false,
        isData: true,

        selectedGender: '',
        selectedWorkPosition: '',
        selectedDepartment: '',
        selectedTeam: '',
        selectedCompany: '',
        selectedLocation: '',
        selectedEmployment: '',

        searchQuery: '',
        page: 1,
        limit: 10,
        totalPage: 0,
        count_mens: 0,
        count_women: 0,
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
        async GET_FILTERS({state, commit}) {
            try {
                const response = await axios.get("https://my-json-server.typicode.com/Veniamin2003/vue-test-task-server/filters", {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    }
                });
                commit('SET_TOTAL_PAGES', Math.ceil(response.headers['x-total-count'] / state.limit));
                commit('SET_FILTERS', response.data);
                commit("SET_IS_DATA", true);
            } catch (e) {
                alert("Ошибка");
            } finally {
                commit("SET_LOADING", false);
                commit("SET_IS_DATA", true);
            }
        },
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        SET_FILTERS(state, filters) {
            state.filters = filters;
        },
        SET_LOADING(state, bool) {
            state.isPostsLoading = bool;
        },
        SET_IS_DATA(state, bool) {
            state.isData = bool;
        },
        SET_TOTAL_PAGES(state, totalPages) {
            state.totalPage = totalPages;
        },

        SET_SELECTED_GENDER(state, selectedGender) {
            state.selectedGender = selectedGender;
        },
        CLEAR_SELECTED_PARAMS(state) {
            state.selectedGender = "";
            state.selectedWorkPosition = "";
            state.selectedDepartment = "";
            state.selectedTeam = "";
            state.selectedCompany = "";
            state.selectedLocation = "";
            state.selectedEmployment = "";
        },
        SET_SELECTED_WORK_POSITION(state, selectedWorkPosition) {
            state.selectedWorkPosition = selectedWorkPosition;
        },
        SET_SELECTED_DEPARTMENTS(state, selectedDepartment) {
            state.selectedDepartment = selectedDepartment;
        },
        SET_SELECTED_TEAM(state, selectedTeam) {
            state.selectedTeam = selectedTeam;
        },
        SET_SELECTED_COMPANY(state, selectedCompany) {
            state.selectedCompany = selectedCompany;
        },
        SET_SELECTED_LOCATION(state, selectedLocation) {
            state.selectedLocation = selectedLocation;
        },
        SET_SELECTED_EMPLOYMENT(state, selectedEmployment) {
            state.selectedEmployment = selectedEmployment;
        },

        SET_SEARCH_QUERY(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
    },
    getters: {
        USERS(state){
            return state.users;
        },
        IS_DATA(state) {
          return state.isData
        },
        FILTERS(state){
            return state.filters;
        },
        POST_LOADING(state){
            return state.isPostsLoading;
        },

        PARAMS(state) {
            return state.users.filter(user => user.id === 1)
        },
        COUNT_MEN(state) {
            let params = state.users.map(m => m.params.gender)
            let countMen = params.filter(function (el) {
                return el.value === "Мужской";
            });

            return countMen.length
        },
        COUNT_WOMEN(state) {
            let params = state.users.map(m => m.params.gender)
            let countWoman = params.filter(function (el) {
                return el.value === "Женский";
            });

            return countWoman.length
        },
        COUNT_NO_GENDER(state) {
            let params = state.users.map(m => m.params.gender)
            let countNoGender = params.filter(function (el) {
                return (el.value !== "Мужской" && el.value !== "Женский");
            });

            return countNoGender.length
        },

        GENDERS(state) {
            let genders = state.filters.filter(item => item.filter_name.toLowerCase() === "пол")
            return genders.map(el => el.params).pop()
        },
        WORK_POSITIONS(state) {
            let work_positions = state.filters.filter(item => item.filter_name.toLowerCase() === "должность")
            return work_positions.map(el => el.params).pop()
        },
        DEPARTMENTS(state) {
            let departments = state.filters.filter(item => item.filter_name.toLowerCase() === "отдел")
            return departments.map(el => el.params).pop()
        },
        TEAMS(state) {
            let teams = state.filters.filter(item => item.filter_name.toLowerCase() === "команда")
            return teams.map(el => el.params).pop()
        },
        COMPANIES(state) {
            let companies = state.filters.filter(item => item.filter_name.toLowerCase() === "компания")
            return companies.map(el => el.params).pop()
        },
        LOCATIONS(state) {
            let locations = state.filters.filter(item => item.filter_name.toLowerCase() === "локация")
            return locations.map(el => el.params).pop()
        },
        EMPLOYMENT(state) {
            let employment = state.filters.filter(item => item.filter_name.toLowerCase() === "вид занятости")
            return employment.map(el => el.params).pop()
        },


    },
    namespaced: true
}