<template>
  <form @submit.prevent>
    <div class="text_element">
      <p>Пол</p>
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
import toggleMixin from "@/components/mixins/toggleMixin";

export default {
  name: 'v-filter-form',
  components: {MySelect},
  mixins: [toggleMixin],
  data() {
    return {
      genderParam: "Пол"
    }
  },
  methods: {
    ...mapMutations({
      FILTERED_USERS: "users/FILTERED_USERS",
      CLEAR_FILTERS: "users/CLEAR_FILTERS",
      INCREMENT_COUNT_ACTIVE_FILTERS: "users/INCREMENT_COUNT_ACTIVE_FILTERS"
    }),
    ...mapActions({
    }),
    filterUsers(value) {
      this.FILTERED_USERS(value);
      this.INCREMENT_COUNT_ACTIVE_FILTERS();
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
  z-index: 5;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
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
@media (hover: hover) {
  .v-filter_form__btn:hover {
    color: #545353;
    background: rgba(241, 65, 108, 0.15);
    border: 1px solid rgb(241, 65, 108, 0.45);
  }
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
@media screen and (max-width: 1000px) {
  form {
    padding: 0 20px;

  }
}
@media screen and (max-width: 576px) {
  form {
    margin-bottom: 40px;
    padding-bottom: 20px;
  }
}
</style>