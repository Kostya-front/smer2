<template>
  <div :class="class">
    <h5>{{ textarea.title }}</h5>
    <textarea v-model="textarea.value" :placeholder="textarea.placeholder" id="textarea1" class="materialize-textarea"></textarea>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import { defineProps } from 'vue'

const props = defineProps({
  textarea: {
    type: Object,
    default: () => {}
  },
  class: String
})
const text = ref('')

</script>

<style scoped>
  textarea {
    min-height: 150px;
  }
</style>