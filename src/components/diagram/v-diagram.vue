<template>
  <div class="v-diagram">
    <div class="v-diagram__canvas"
         v-if="COUNT_MEN === 0 && COUNT_WOMEN === 0 && COUNT_MEN === 0 /*|| SEARCHED_POSTS.length === 0*/">
      <p>Пользователи не найдены...</p>
      <img src="@/assets/Loader/diagram.svg" alt="loader"/>
    </div>

    <div class="v-diagram__canvas" v-else><Doughnut :data="getData"  /></div>
  </div>

</template>

<script>

import {ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from 'chart.js'
import {Doughnut} from 'vue-chartjs'
import {mapGetters, mapState} from "vuex";

ChartJS.register(ArcElement);

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
export default {
  name: "v-diagram",
  components: {
    Doughnut
  },
  props: {
    count_man: {
      type: String,
      default() {
        return ""
      }
    },
    count_woman: {
      type: Number,
      default() {
        return 0
      }
    },
    count_no_gender: {
      type: Number,
      default() {
        return 0
      }
    }
  },

  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      USERS: "users/USERS",
      COUNT_MEN: "users/COUNT_MEN",
      COUNT_WOMEN: "users/COUNT_WOMEN",
      COUNT_NO_GENDER: "users/COUNT_NO_GENDER",
      SEARCHED_POSTS: "users/SEARCHED_POSTS"
    }),
    ...mapState({
      count_mens: state => state.users.count_mens
    }),
    getData() {
      return {
        /*labels: ['Не определено', 'Женский', 'Мужской'],*/
        datasets: [{
          label: 'кол-во',
          data: [this.COUNT_NO_GENDER, this.COUNT_WOMEN, this.COUNT_MEN],
          backgroundColor: [
            'rgb(0,140,251)',
            'rgb(0,227,150)',
            'rgb(254,176,25)'
          ],
          hoverOffset: 5
        }],
      }
    },
  },


  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.v-diagram  {
  width: 100%;
  display: flex;
  justify-content: center;
  &__canvas {
    width: 300px;
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 576px) {
  .v-diagram  {
    &__canvas {
      width: 260px;
    }
  }
}
</style>