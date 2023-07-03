<template>
  <form @submit.prevent>
    <h4>Создание пользователя</h4>
    <div class="text_element">
      <p>Как вас зовут?</p>
      <my-input
          v-focus
          v-model="user.name"
          type="text"
      />
    </div>


    <div class="text_element">
      <p>Ваш пол</p>
      <v-my-select-add-user :model-value="this.selectedGender"
                 @update:model-value="SET_SELECTED_GENDER"
                 :options="GENDERS"/>
    </div>

    <div class="text_element">
      <p>Должность</p>
      <v-my-select-add-user :model-value="this.selectedWorkPosition"
                 @update:model-value="SET_SELECTED_WORK_POSITION"
                 :options="WORK_POSITIONS"/>
    </div>

    <div class="text_element">
      <p>Отдел</p>
      <v-my-select-add-user :model-value="this.selectedDepartment"
                 @update:model-value="SET_SELECTED_DEPARTMENTS"
                 :options="DEPARTMENTS"/>
    </div>
    <div class="text_element">
      <p>Команда</p>
      <v-my-select-add-user :model-value="this.selectedTeam"
                 @update:model-value="SET_SELECTED_TEAM"
                 :options="TEAMS"/>
    </div>
    <div class="text_element">
      <p>Компания</p>
      <v-my-select-add-user :model-value="this.selectedCompany"
                 @update:model-value="SET_SELECTED_COMPANY"
                 :options="COMPANIES"/>
    </div>
    <div class="text_element">
      <p>Город</p>
      <v-my-select-add-user :model-value="this.selectedLocation"
                 @update:model-value="SET_SELECTED_LOCATION"
                 :options="LOCATIONS"/>
    </div>
    <div class="text_element">
      <p>Вид занятости</p>
      <v-my-select-add-user :model-value="this.selectedEmployment"
                 @update:model-value="SET_SELECTED_EMPLOYMENT"
                 :options="EMPLOYMENT"/>
    </div>

    <my-button
        class="btn"
        style="align-self: flex-end; margin-top: 15px;"
        @click="createUser">Создать
    </my-button>
  </form>
</template>

<script>

import MyButton from "@/components/UI/MyButton.vue";
import MyInput from "@/components/UI/MyInput.vue";
import {mapGetters, mapMutations, mapState} from "vuex";
import VMySelectAddUser from "@/components/UI/MySelectAddUser.vue";

export default {
  name: 'v-user-form',
  components: {VMySelectAddUser, MyInput, MyButton},
  data() {
    return {
      user: {
        name: "",
        image: "fact.png",
        params: {
          gender: {
            label: "Пол",
            value: "",
            isVisible: true
          },
          work_position: {
            label: "Должность",
            value: "",
            isVisible: true
          },
          department: {
            label: "Отдел",
            value: "",
            isVisible: true
          },
          company_name: {
            label: "Компания",
            value: "",
            isVisible: true
          },
          company_locate: {
            label: "Локация",
            value: "",
            isVisible: true
          },
          team_name: {
            label: "Команда",
            value: "",
            isVisible: false
          },
          employment: {
            label: "Вид занятости",
            value: "",
            isVisible: false
          }
        }
      },
    }
  },
  methods: {
    createUser() {
      if (this.isFieldsFill()) {
        this.user.id = Date.now();
        this.user.params.gender.value = this.selectedGender;
        this.user.params.work_position.value = this.selectedWorkPosition;
        this.user.params.department.value = this.selectedDepartment;
        this.user.params.company_name.value = this.selectedCompany;
        this.user.params.company_locate.value = this.selectedLocation;
        this.user.params.team_name.value = this.selectedTeam;
        this.user.params.employment.value = this.selectedEmployment;

        this.$emit('create', this.user)
        this.user = {
          name: "",
          image: "fact.png",
          params: {
            gender: {
              label: "Пол",
              value: "",
              isVisible: true
            },
            work_position: {
              label: "Должность",
              value: "",
              isVisible: true
            },
            department: {
              label: "Отдел",
              value: "",
              isVisible: true
            },
            company_name: {
              label: "Компания",
              value: "",
              isVisible: true
            },
            company_locate: {
              label: "Локация",
              value: "",
              isVisible: true
            },
            team_name: {
              label: "Команда",
              value: "",
              isVisible: false
            },
            employment: {
              label: "Вид занятости",
              value: "",
              isVisible: false
            }
          }
        }

        this.CLEAR_SELECTED_PARAMS();
      }
      else{
        alert("Не все поля заполнены")
      }


    },

    isFieldsFill() {
      return this.user.name !== ""
          && this.selectedGender !== ""
          && this.selectedWorkPosition !== ""
          && this.selectedDepartment !== ""
          && this.selectedCompany !== ""
          && this.selectedLocation !== ""
          && this.selectedTeam !== ""
          && this.selectedEmployment !== "";
    },
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
  unmounted() {
    this.CLEAR_SELECTED_PARAMS();
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.text_element {
  margin-top: 10px;
  text-align: left;
  width: 100%;
}
.text_element p {
  margin: 0;
}

.btn:hover {
  background-color: rgba(77, 131, 131, 0.73);
}
</style>