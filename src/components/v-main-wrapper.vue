<template>
  <div class="v-main-wrapper">
    <v-diagram-container />
    <v-users-table />
  </div>
</template>
<script>

import {mapActions, mapGetters} from "vuex";
import VDiagramContainer from "@/components/diagram/v-diagram-container.vue";
import VUsersTable from "@/components/content/v-users-table.vue";

export default {
  name: 'v-main-wrapper',
  components: {VUsersTable, VDiagramContainer},
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      GET_USERS: "users/GET_USERS"
    })
  },
  computed: {
    ...mapGetters({
      USERS: "users/USERS"
    })
  },

  mounted() {
    this.GET_USERS();
  },
}
</script>

<style lang="scss" >
.v-main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
  flex-grow: 1;
  width: 100%;
  margin: 0 auto 0;
}
</style>