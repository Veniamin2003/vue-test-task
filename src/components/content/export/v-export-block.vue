<template>
  <div class="v-export-block">
    <div class="v-export-block__header_block">
      <h3>Гендерное распределение</h3>
      <download-excel
          class="v-export-block__btn"
          :data="USERS"
          :fields="json_fields"
          worksheet="Моя команда"
          name="Моя команда - экспорт.xls"
      >
        <span class="material-symbols-outlined">
          vertical_align_bottom
        </span>
        Экспорт
      </download-excel>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'v-export-block',
  data(){
    return {
      json_fields: {
        ID: "id",
        "Имя": "name",
        "Пол": "params.gender.value",
        "Должность": "params.work_position.value",
        "Отдел": "params.department.value",
        "Компания": "params.company_name.value",
        "Город": "params.company_locate.value",
        "Команда": "params.team_name.value",
        "Вид занятости": "params.employment.value",
      },
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8",
          },
        ],
      ],
    }
  },
  computed: {
    ...mapGetters({
      USERS: "users/USERS"
    })
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.v-export-block {
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(173, 172, 172, 0.35);
    padding-bottom: 20px;
  &__header_block {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__header_block h3 {
    font-size: 26px;
  }

  &__btn {
    cursor: pointer;
    width: 150px;
    height: 55px;
    border: 1px solid transparent;
    background: rgb(245,248,250);
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    transition: 300ms;
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

@media screen and (max-width: 650px) {
  .v-export-block {
    &__header_block {
      text-align: left;
      margin-bottom: 20px;
    }
  }
}
@media screen and (max-width: 500px) {
  .v-export-block {
    &__header_block {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
</style>