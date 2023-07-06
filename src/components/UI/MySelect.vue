<template>
  <select
      class="v-my-select"
      :value="modelValue"
      @change="changeOptions">
    <option disabled value="">Выберите из списка</option>
    <option v-for="(option, index) in options"
            :key="index"
            :value="option.name">
      {{option.name}}
    </option>
  </select>
</template>

<script>
export default {
  name: 'v-my-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Object,
      default: () => {}
    },
    filterType: {
      type: String,
      default: ""
    }
  },
  methods: {
    changeOptions(event) {
      this.$emit('update:modelValue', {
        value: event.target.value,
        type: this.filterType
      });
    }
  },
}
</script>

<style scoped>
option {
  margin-right: 15px;
}
.v-my-select {
  font-size: 14px;
  color: rgba(94, 91, 91, 0.67);
  border-radius: 7px;
  margin-top: 10px;
  width: 100%;
  height: 50px;
  padding-left: 20px;
  padding-right: 15px;
}
.v-my-select:focus{
  border: 1px solid rgba(3, 158, 247, 0.68);
}
.v-my-select:target{
  border: 1px solid rgba(3, 158, 247, 0.3);
}
.v-my-select:focus {
  outline: 0;
}

@media screen and (max-width: 576px) {
  option {
    background: #f8fbfd;
  }
  .v-my-select {
    background: #f8fbfd;
  }
}
</style>