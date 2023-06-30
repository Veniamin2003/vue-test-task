<template>
  <div class="v-diagram">
    <div class="v-diagram__canvas">
      <!--    <img src="@/assets/images/trip_origin.svg" alt="diagram">-->
      <Doughnut :data="getData"  />
    </div>
  </div>

</template>

<script>

import {ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from 'chart.js'
import {Doughnut} from 'vue-chartjs'
import {mapGetters} from "vuex";

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
      COUNT_MEN: "users/COUNT_MEN",
      COUNT_WOMEN: "users/COUNT_WOMEN",
      COUNT_NO_GENDER: "users/COUNT_NO_GENDER",
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
  }
}
</style>