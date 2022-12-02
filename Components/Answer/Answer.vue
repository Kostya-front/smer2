<template>
<div class="answers">
  <h2>{{answer.title}}</h2>
  <div class="fields" >
    <div  v-for="(field, i) of answer.fields" :key="field.id" class="answer">
      <textarea
          v-model="field.value"
          :placeholder="field.placeholder"
      />

      <div class="hover">?
        <div>
          {{ field.placeholder }}
        </div>
      </div>
    </div>
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
  
  @media screen and (max-width: 700px){
    .fields {
      flex-direction: column;
    }

    .answers h2 { font-size: 1.9rem}
  }
  textarea {
    min-height: 100px;
    resize: none;
    padding: 5px;
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

  .answer { width: 100%; }
</style>