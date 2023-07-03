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
  name: 'v-my-select-add-user',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Object,
      default: () => {}
    },
  },
  methods: {
    changeOptions(event) {
      this.$emit('update:modelValue', event.target.value);
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
</style>