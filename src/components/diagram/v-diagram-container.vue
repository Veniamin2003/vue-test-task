<template>
  <div class="v-diagram-container">
    <div class="v-diagram-container__header_text">
      <h3>Отчеты компании</h3>
    </div>

    <div class="v-diagram-container__diagram_block">
      <div class="v-diagram-container__diagram">
        <img src="@/assets/images/trip_origin.svg" alt="diagram">
      </div>

      <div class="v-diagram-container__params_block">
        <div class="v-diagram-container__params_content">
          <div class="v-diagram-container__param">
            <p class="v-diagram-container__param__name">
              <span class="material-symbols-outlined">
                check_indeterminate_small
              </span>
              Не определён
            </p>
            <p class="v-diagram-container__param__count">0</p>
          </div>
          <div class="v-diagram-container__param">
            <p class="v-diagram-container__param__name">
              <span class="material-symbols-outlined">
                check_indeterminate_small
              </span>
              Женский
            </p>
            <p class="v-diagram-container__param__count">12</p>
          </div>
          <div class="v-diagram-container__param">
            <p class="v-diagram-container__param__name">
              <span class="material-symbols-outlined">
                check_indeterminate_small
              </span>
              Мужской
            </p>
            <p class="v-diagram-container__param__count">36</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'v-diagram-container',
  props: {

  },

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
    &__header_text h3{
      width: 100%;
      text-align: left;
      font-size: 26px;
    }
    &__diagram_block{
      padding: 50px 0 70px;
      width: 100%;
      height: auto;
      background: #ffffff;
      border-radius: 30px;
    }
    &__diagram img {
      opacity: 10%;
      width: 200px;
    }
    &__params_block {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 35px;
    }
    &__params_content {
      width: 55%;
      display: flex;
      justify-content: center;
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
      &__count {
      }
    }
  }
</style>