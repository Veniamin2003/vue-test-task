<template>
  <form @submit.prevent>
    <div class="block_name">
      <h4>Фильтр</h4>
    </div>

    <div class="text_element">
      <p>Ваш пол</p>
      <my-select :model-value="this.selectedGender"
                 @update:model-value="filterUsers"
                 :options="GENDERS"
                 filterType="gender"
      />
    </div>

    <div class="text_element">
      <p>Должность</p>
      <my-select :model-value="this.selectedWorkPosition"
                 @update:model-value="filterUsers"
                 :options="WORK_POSITIONS"
                 filterType="work_position"/>
    </div>

    <div class="text_element">
      <p>Отдел</p>
      <my-select :model-value="this.selectedDepartment"
                 @update:model-value="filterUsers"
                 :options="DEPARTMENTS"
                 filterType="department"/>
    </div>
    <div class="text_element">
      <p>Команда</p>
      <my-select :model-value="this.selectedTeam"
                 @update:model-value="filterUsers"
                 :options="TEAMS"
                 filterType="team"/>
    </div>
    <div class="text_element">
      <p>Компания</p>
      <my-select :model-value="this.selectedCompany"
                 @update:model-value="filterUsers"
                 :options="COMPANIES"
                 filterType="company"/>
    </div>
    <div class="text_element">
      <p>Город</p>
      <my-select :model-value="this.selectedLocation"
                 @update:model-value="filterUsers"
                 :options="LOCATIONS"
                 filterType="location"/>
    </div>
    <div class="text_element">
      <p>Вид занятости</p>
      <my-select :model-value="this.selectedEmployment"
                 @update:model-value="filterUsers"
                 :options="EMPLOYMENT"
                 filterType="employment"/>
    </div>

    <button
        class="v-filter_form__btn" @click="CLEAR_FILTERS">Очистить
    </button>
  </form>
</template>

<script>

import MySelect from "@/components/UI/MySelect.vue";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'v-filter-form',
  components: {MySelect},
  data() {
    return {
      genderParam: "Пол"
    }
  },
  methods: {
    ...mapMutations({
      SET_SELECTED_GENDER: "users/SET_SELECTED_GENDER",
      SET_SELECTED_WORK_POSITION: "users/SET_SELECTED_WORK_POSITION",
      SET_SELECTED_DEPARTMENTS: "users/SET_SELECTED_DEPARTMENTS",
      SET_SELECTED_TEAM: "users/SET_SELECTED_TEAM",
      SET_SELECTED_COMPANY: "users/SET_SELECTED_COMPANY",
      SET_SELECTED_LOCATION: "users/SET_SELECTED_LOCATION",
      SET_SELECTED_EMPLOYMENT: "users/SET_SELECTED_EMPLOYMENT",
      CLEAR_SELECTED_PARAMS: "users/CLEAR_SELECTED_PARAMS",


      SORT_GENDERS: "users/SORT_GENDERS",
      SORT_WORK_POSITION: "users/SORT_WORK_POSITION",
      CLEAR_FILTERS: "users/CLEAR_FILTERS",
      SORT_DEPARTMENT: "users/SORT_DEPARTMENT",
      FILTERED_USERS: "users/FILTERED_USERS",

    }),
    ...mapActions({
      TEST: "users/TEST"

    }),
    sortedGenders() {

    },
    filterUsers(value) {
      this.FILTERED_USERS(value);
    }
  },
  computed: {
    ...mapState({
      selectedGender: state => state.users.selectedGender,
      selectedWorkPosition: state => state.users.selectedWorkPosition,
      selectedDepartment: state => state.users.selectedDepartment,
      selectedCompany: state => state.users.selectedCompany,
      selectedLocation: state => state.users.selectedLocation,
      selectedTeam: state => state.users.selectedTeam,
      selectedEmployment: state => state.users.selectedEmployment,
    }),
    ...mapGetters({
      GENDERS: "users/GENDERS",
      WORK_POSITIONS: "users/WORK_POSITIONS",
      DEPARTMENTS: "users/DEPARTMENTS",
      TEAMS: "users/TEAMS",
      COMPANIES: "users/COMPANIES",
      LOCATIONS: "users/LOCATIONS",
      EMPLOYMENT: "users/EMPLOYMENT",
    })

  },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.v-filter_form__btn {
  width: 150px;
  height: 55px;
  margin-top: 25px;
  border: 1px solid transparent;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
  font-weight: 600;
  transition: 300ms;
  background: rgb(241, 65, 108);
}

.v-filter_form__btn:hover {
  color: #545353;
  background: rgba(241, 65, 108, 0.15);
  border: 1px solid rgb(241, 65, 108, 0.45);
}


.block_name {
  width: 100%;
  text-align: left;
}

.block_name h4 {
  font-size: 18px;
}

.text_element {
  margin-top: 20px;
  text-align: left;
  width: 100%;
}

.text_element p {
  margin: 0;
  font-weight: bold;
}

.btn:hover {
  background-color: rgba(77, 131, 131, 0.73);
}
</style>