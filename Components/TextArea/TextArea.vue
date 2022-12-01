<template>
  <div :class="classItem">
    <h5>{{ textarea.title }}</h5>
    <textarea v-model="textarea.value" :placeholder="textarea.placeholder" id="textarea1" class="materialize-textarea"></textarea>
    <div class="hover">?
      <div>
        {{ textarea.placeholder }}
      </div>
    </div>
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
  classItem: String
})
const text = ref('')

</script>

<style scoped>
  textarea {
    min-height: 150px;
  }
  .hover { position: relative; border: 3px solid; border-radius: 50%; padding: 10px; width: 50px; display: flex; align-items: center; justify-content: center; }
  .hover div {
    position: absolute;
    width: 200px;
    border: 1px dashed;
    padding: 20px;
    background: #fff;
    z-index: 2;
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
    top: 105%;
    left: 0;
  }
  .hover:hover div { visibility: visible; opacity: 1}
</style>