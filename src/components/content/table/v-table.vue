<template>
  <div class="v-table">
    <v-table-header
        v-for="user in PARAMS"
        :row_data="user"
        :key="user.id"/>
    <div class="v-table__body">
      <transition-group name="post-list">
      <v-table-row
          v-for="user in searchedPosts"
          :row_data="user"
          :key="user.id"
      />
      </transition-group>
    </div>
  </div>
</template>

<script>
import VTableRow from "@/components/content/table/row/v-table-row.vue"
import VTableHeader from "@/components/content/table/header/v-table-header.vue";
import {mapGetters, mapState} from "vuex";

export default {
  name: "v-table",
  components: {VTableHeader, VTableRow},
  props: {
    users_data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {

  },
  computed: {
    ...mapState({
      users: state => state.users.users,
      searchQuery: state => state.users.searchQuery,
    }),
    ...mapGetters({
      USERS: "users/USERS",
      PARAMS: "users/PARAMS"
    }),
    searchedPosts() {
      return this.users.filter(user => user.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  }
}
</script>

<style lang="scss">
.v-table {
  width: 100%;
  margin: 0 auto;
  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;

  }
}
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.post-list-move {
  transition: transform 0.4s ease;
}
</style>