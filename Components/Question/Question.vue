<template>
  <div class="question">
    <p class="col xl6 s12">{{ question.question }}</p>
    <div class="input-field col xl6 s12">
      <input v-model="question.value" id="last_name"  type="text" class="validate">
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import {useQuestions} from "~/store/questions";

const props = defineProps({
  question: {
    type: Object,
    default: () => {}
  }
})

const store = useQuestions()
</script>

<style scoped>
  .question {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 700px) {
    .question {
      flex-direction: column;
    }
  }
</style>