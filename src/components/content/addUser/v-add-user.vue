<template>
  <div class="v-add-user">
    <div class="v-add-user__block">
      <button class="v-add-user__btn" @click="showDialog">Добавить пользователя</button>
      <v-pagination />
    </div>
    <v-add-user-dialog v-model:show="dialogVisible">
      <v-user-form @create="createUser"/>
    </v-add-user-dialog>
  </div>
</template>

<script>
import VAddUserDialog from "@/components/content/addUser/v-add-user-dialog.vue";
import VUserForm from "@/components/content/addUser/v-user-form.vue";
import {mapMutations, mapState} from "vuex";
import VPagination from "@/components/content/addUser/v-pagination.vue";

export default {
  name: 'v-add-user',
  components: {VPagination, VUserForm, VAddUserDialog},
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
      this.CLEAR_FILTERS();
    },
    createUser(user) {
      this.users.push(user);
      this.usersBackup.push(user);
      this.dialogVisible = false;
    },
    ...mapMutations({
      CLEAR_SELECTED_PARAMS: "users/CLEAR_SELECTED_PARAMS",
      ADD_USER_IN_USERS: "users/ADD_USER_IN_USERS",
      CLEAR_FILTERS: "users/CLEAR_FILTERS",
    })
  },
  computed: {
    ...mapState({
      users: state => state.users.users,
      usersBackup: state => state.users.usersBackup,
    })
  },

}
</script>

<style lang="scss" scoped>
.v-add-user {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  &__block {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__btn {
    cursor: pointer;
    width: 250px;
    height: 55px;
    border: 1px solid transparent;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    transition: 300ms;
    background: rgba(206, 245, 216, 0.49);

  }

  &__btn:hover {
    background: transparent;
    border: 1px solid rgba(173, 171, 171, 0.39);
  }

  &__btn span {
    margin-right: 5px;
    font-size: 18px;
    opacity: 80%;
  }
}



</style>