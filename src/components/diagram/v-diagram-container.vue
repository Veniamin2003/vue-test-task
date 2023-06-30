<template>
  <div class="v-diagram-container">
    <div class="v-diagram-container__header_text">
      <h3>Отчеты компании</h3>
    </div>

    <div class="v-diagram-container__diagram_block">

      <v-diagram v-if="IS_DATA"
            :count_man="COUNT_MEN"
            :count_woman="COUNT_WOMEN"
            :count_no_gender="COUNT_NO_GENDER"
        />
      <v-diagram-params />
    </div>

  </div>
</template>

<script>
import {mapGetters} from "vuex";
import VDiagram from "@/components/diagram/v-diagram.vue";
import VDiagramParams from "@/components/diagram/v-diagram-params.vue";

export default {
  name: 'v-diagram-container',
  components: {VDiagramParams, VDiagram},
  props: {
    row_data: {
      type: Array,
      default() {
        return []
      }
    },
  },
  data() {
    return {
      isData: false
    }

  },
  methods: {
    getCountMan() {
      const data = this.USERS;
      let params = data.map(m => m.params.gender)
      let countWoman = params.filter(function (el) {
        return el.value === "Мужской";
      });

      return countWoman.length
    },
    changeIsData() {
      console.log("data is changed")
      this.isData = true;
    }
  },
  computed: {
    ...mapGetters({
      USERS: "users/USERS",
      COUNT_MEN: "users/COUNT_MEN",
      COUNT_WOMEN: "users/COUNT_WOMEN",
      COUNT_NO_GENDER: "users/COUNT_NO_GENDER",
      POST_LOADING: "users/POST_LOADING",
      IS_DATA: "users/IS_DATA"
    }),
  },
  mounted(){
    // eslint-disable-next-line no-debugger
    debugger
    setTimeout(this.changeIsData, 300)
  }
}
</script>

<style lang="scss">
.v-diagram-container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__header_text {
    width: 100%;
    text-align: left;
  }

  &__header_text h3 {
    width: 100%;
    text-align: left;
    font-size: 26px;
  }

  &__diagram_block {
    padding: 50px 0 70px;
    width: 100%;
    height: auto;
    background: #ffffff;
    border-radius: 30px;
  }
}
</style>