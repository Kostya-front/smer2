<template>
<div class="answers">
  <h2>{{answer.title}}</h2>
  <div class="fields" >
      <textarea
          v-for="(field, i) of answer.fields"
          v-model="field.value"
          @blur="storeAnswers.setAnswers"
          :key="field.id"
          :placeholder="field.placeholder"/>
  </div>
</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import {useAnswers} from "~/store/answers";

const props = defineProps({
  answer: {
    type: Object,
    default: () => {}
  }
})

const storeAnswers = useAnswers()
</script>

<style scoped>

  .answers {
    display: flex;
    flex-direction: column;
  }

  .fields{
    display: flex;
    align-items: center;
    gap: 20px;
  }
  textarea {
    min-height: 100px;
    resize: none;
    padding: 5px;
  }
</style>