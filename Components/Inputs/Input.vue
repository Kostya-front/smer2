<template>
  <div class="input-field col xl3 m6 s12">
    <p>
      <label>
        <input :checked="input.isChecked" @change="setCheck($event)" id="indeterminate-checkbox" type="checkbox"  />
        <span>{{ input.title }}</span>
      </label>
    </p>
    <p>{{ input.value }}</p>
    <input
        v-model="input.value"
        @blur="setValue"
        :id="input.title"
        :disabled="!input.isChecked"
        type="range"
        class="validate"
    >
  </div>
</template>

<script setup lang="ts">
import {defineProps, ref} from 'vue'
import {useInputs} from "~/store/inputs";
const props = defineProps({
  input: {
    type: Object,
    default: () => ({ id: 0, title: '', isChecked: false, value: 0 })
  }
})

const store = useInputs()

const inputValue = ref(props.input?.value)

function setValue() {
  store.setValue({title: props.input?.title, value: +props.input.value})
}

function setCheck(event) {
  if (event.target.checked) {
    store.setCheck({title: props.input?.title, isChecked: event.target.checked})
  }
  else {
    store.setCheck({title: props.input?.title, isChecked: event.target.checked})
    store.setValue({title: props.input?.title, value: 0})
    inputValue.value = 0
  }
}
</script>

<style scoped>
  p { position: relative}
</style>