import axios from "axios";

export const usersModule = {
    state: {
        users: [],
        usersBackup: [],
        filters: [],
        visible_params: [],
        isPostsLoading: false,
        isData: true,

        countActiveFilters: 0,

        selectedGender: '',
        selectedWorkPosition: '',
        selectedDepartment: '',
        selectedTeam: '',
        selectedCompany: '',
        selectedLocation: '',
        selectedEmployment: '',

        searchQuery: '',
        searchedPosts: '',
        page: 1,
        limit: 6,
        totalPage: 0,
        count_mens: 0,
        count_women: 0,
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
                commit("COPY_IN_USERS_BACKUP");
            }
        },
        async GET_FILTERS({commit}) {
            try {
                const response = await axios.get("https://my-json-server.typicode.com/Veniamin2003/vue-test-task-server/filters");
                //commit('SET_TOTAL_PAGES', Math.ceil(response.headers['x-total-count'] / state.limit));
                commit('SET_FILTERS', response.data);
                commit("SET_IS_DATA", true);

            } catch (e) {
                alert("Ошибка");
            } finally {
                //commit("SET_LOADING", false);
                commit("SET_IS_DATA", true);
            }
        },
    },
    mutations: {
        COPY_IN_USERS_BACKUP(state) {
            state.usersBackup = [...state.users];
        },
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
        SET_CURRENT_PAGE(state, currentPage) {
            state.page = currentPage;
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
        SET_SEARCHED_POSTS(state, searchedPosts) {
            state.searchedPosts = searchedPosts;
        },


        ADD_USER_IN_USERS(state) {
            state.usersBackup = [...state.users]
        },

        FILTERED_USERS(state, {type, value}) {
            if (type === "gender") state.selectedGender = value
            else if (type === "work_position") state.selectedWorkPosition = value
            else if (type === "department") state.selectedDepartment = value
            else if (type === "team") state.selectedTeam = value
            else if (type === "company") state.selectedCompany = value
            else if (type === "location") state.selectedLocation = value
            else if (type === "employment") state.selectedEmployment = value

            state.users = [...state.usersBackup]
            state.users = state.users
                .filter(el => {
                    return state.selectedGender === "" ||  el.params.gender.value === state.selectedGender;
                })
                .filter(el => {
                    return state.selectedWorkPosition === "" || el.params.work_position.value === state.selectedWorkPosition;
                })
                .filter(el => {
                    return state.selectedDepartment === "" || el.params.department.value === state.selectedDepartment;
                })
                .filter(el => {
                    return state.selectedCompany === "" || el.params.company_name.value === state.selectedCompany;
                })
                .filter(el => {
                    return state.selectedLocation === "" || el.params.company_locate.value === state.selectedLocation;
                })
                .filter(el => {
                    return state.selectedTeam === "" || el.params.team_name.value === state.selectedTeam;
                })
                .filter(el => {
                    return state.selectedEmployment === "" || el.params.employment.value === state.selectedEmployment;
                })
        },

        CLEAR_FILTERS(state) {
            state.users = [...state.usersBackup];
            state.selectedGender = "";
            state.selectedWorkPosition = "";
            state.selectedDepartment = "";
            state.selectedTeam = "";
            state.selectedCompany = "";
            state.selectedLocation = "";
            state.selectedEmployment = "";
            state.countActiveFilters = 0;
            return state.users
        },

        INCREMENT_COUNT_ACTIVE_FILTERS(state) {
            let gender = 0;
            let workPosition = 0;
            let department = 0;
            let team = 0;
            let company = 0;
            let location = 0;
            let employment = 0;

            if(state.selectedGender !== "") {
                gender = 1;
            }
            if(state.selectedWorkPosition !== "") {
                workPosition = 1;
            }
            if(state.selectedDepartment !== "") {
                department = 1;
            }
            if(state.selectedTeam !== "") {
                team = 1;
            }
            if(state.selectedCompany !== "") {
                company = 1;
            }
            if(state.selectedLocation !== "") {
                location = 1;
            }
            if(state.selectedEmployment !== "") {
                employment = 1;
            }

            state.countActiveFilters = gender + workPosition + department + team + company + location + employment;
        }
    },
    getters: {
        USERS(state){
            return state.users;
        },
        IS_DATA(state) {
          return state.isData
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

        COUNT_ACTIVE_FILTERS(state) {
          return state.countActiveFilters
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
        SEARCHED_POSTS(state) {
            return state.users.filter(user => user.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    namespaced: true
}