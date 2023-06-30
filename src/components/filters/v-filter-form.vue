<template>
  <form @submit.prevent>
    <div class="block_name">
      <h4>Фильтр</h4>
    </div>

    <div class="text_element">
      <p>Ваш пол</p>
      <my-select :model-value="this.selectedGender"
                 @update:model-value="SET_SELECTED_GENDER"
                 :options="GENDERS"/>
    </div>

    <div class="text_element">
      <p>Должность</p>
      <my-select :model-value="this.selectedWorkPosition"
                 @update:model-value="SET_SELECTED_WORK_POSITION"
                 :options="WORK_POSITIONS"/>
    </div>

    <div class="text_element">
      <p>Отдел</p>
      <my-select :model-value="this.selectedDepartment"
                 @update:model-value="SET_SELECTED_DEPARTMENTS"
                 :options="DEPARTMENTS"/>
    </div>
    <div class="text_element">
      <p>Команда</p>
      <my-select :model-value="this.selectedTeam"
                 @update:model-value="SET_SELECTED_TEAM"
                 :options="TEAMS"/>
    </div>
    <div class="text_element">
      <p>Компания</p>
      <my-select :model-value="this.selectedCompany"
                 @update:model-value="SET_SELECTED_COMPANY"
                 :options="COMPANIES"/>
    </div>
    <div class="text_element">
      <p>Город</p>
      <my-select :model-value="this.selectedLocation"
                 @update:model-value="SET_SELECTED_LOCATION"
                 :options="LOCATIONS"/>
    </div>
    <div class="text_element">
      <p>Вид занятости</p>
      <my-select :model-value="this.selectedEmployment"
                 @update:model-value="SET_SELECTED_EMPLOYMENT"
                 :options="EMPLOYMENT"/>
    </div>

    <my-button
        class="btn"
        style="align-self: flex-end; margin-top: 15px;">Создать
    </my-button>
  </form>
</template>

<script>

import MyButton from "@/components/UI/MyButton.vue";
import MySelect from "@/components/UI/MySelect.vue";
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'v-filter-form',
  components: {MySelect, MyButton},
  data() {
    return {
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
      CLEAR_SELECTED_PARAMS: "users/CLEAR_SELECTED_PARAMS"
    })
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

.block_name{
  width: 100%;
  text-align: left;
}
.block_name h4 {
  font-size: 16px;
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