<template>
  <div class="v-diagram-params">
    <div class="v-diagram-params__params_content">
      <div class="v-diagram-params__param">

        <p class="v-diagram-params__param__name">
          <span class="v-diagram-params__line_no-gender"></span>
          Не определён
        </p>
        <p class="v-diagram-params__param__count">{{ COUNT_NO_GENDER }}</p>
      </div>
      <div class="v-diagram-params__param">
        <p class="v-diagram-params__param__name">
          <span class="v-diagram-params__line_women"></span>
          Женский
        </p>
        <p class="v-diagram-params__param__count">{{ COUNT_WOMEN }}</p>
      </div>
      <div class="v-diagram-params__param">
        <p class="v-diagram-params__param__name">
          <span class="v-diagram-params__line_men"></span>
          Мужской
        </p>
        <p class="v-diagram-params__param__count">{{ COUNT_MEN }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "v-diagram-params",
  computed: {
    ...mapGetters({
      COUNT_MEN: "users/COUNT_MEN",
      COUNT_WOMEN: "users/COUNT_WOMEN",
      COUNT_NO_GENDER: "users/COUNT_NO_GENDER"
    }),
  }
}
</script>

<style lang="scss" scoped>
.v-diagram-params {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 35px;

  &__params_content {
    width: 55%;
    display: flex;
    justify-content: center;
  }
  &__line_no-gender {
    background: rgb(0,140,251);
    box-shadow: 0 0 1px 1px rgba(0, 140, 251, 0.76);
    border-radius: 3px;
    width: 15px;
    height: 3px;
    margin-right: 5px;
  }
  &__line_women {
    background: rgb(0,227,150);
    box-shadow: 0 0 1px 1px rgb(0,227,150, 0.76);
    border-radius: 3px;
    width: 15px;
    height: 3px;
    margin-right: 5px;
  }
  &__line_men {
    background: rgb(254,176,25);
    box-shadow: 0 0 1px 1px rgb(254,176,25, 0.76);
    border-radius: 3px;
    width: 15px;
    height: 3px;
    margin-right: 5px;
  }

  &__param {
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(203, 200, 200, 0.44);
    border-radius: 7px;
    margin: 0 5px 0;
    padding: 0 10px 0;

    &__name {
      display: flex;
      align-items: center;
    }
  }
}
@media screen and (max-width: 1100px) {
  .v-diagram-params {
    &__params_content {
      width: 75%;
    }
  }
}
@media screen and (max-width: 800px) {
  .v-diagram-params {
    &__params_content {
      width: 95%;
    }
  }
}
@media screen and (max-width: 600px) {
  .v-diagram-params {
    &__params_content {
      width: 75%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 10px;
    }
    &__param {
      margin: 10px 0 0 0;
      width: 95%;
    }
  }
}
@media screen and (max-width: 500px) {
  .v-diagram-params {
    &__params_content {
      width: 95%;
    }
  }
}
</style>