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
  },
  methods: {
    changeOptions(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  },
}
</script>

<style scoped>
.v-my-select {
  margin-top: 5px;
  width: 100%;
  height: 40px;
}
</style>