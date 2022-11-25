<template>
  <div class="main-container">
    <header class="header">
      <div @click="isShownLinks = !isShownLinks" class="header-link">СМЭР
      <ul v-if="isShownLinks">
        <li value="1"><a href="https://eqspb.ru/o-kompanii/articles/irracionalnaya-ustanovka/" target="_blank">Иррациональные установки</a></li>
        <li value="2"><a href="https://www.b17.ru/article/71191/" target="_blank">Глубиинные убеждения</a></li>
        <li value="3"><nuxt-link to="/conditions">Компенсаторные стратегии</nuxt-link></li>
      </ul>
      </div>
    </header>
    <button @click="prev" :disabled="index <= 1" class="button-swipe"> &lt </button>
    <div
        v-if="index === 1" class="d-flex">
      <div class="container row">
        <h2 class="col s12">Оцените состояния по 100-балльной шкале</h2>
        <Input
            v-for="input of store.paginatedInputs"
            :key="input.title"
            :input="input"
        />
      </div>
      <div class="pagination col lx12">
        <button
            class="primary"
            v-for="(item, i) in Math.ceil(store.inputs.length/12)"
            @click="paginated(i)">{{ i + 1 }}
        </button>
      </div>
    </div>

    <div
        v-else-if="index === 2"
        class="container row">
      <TextArea :textarea="textareaStore.textarea[0]" class="input-field col s12"/>

      <TextArea :textarea="textareaStore.textarea[1]" class="input-field col l4 s12 "/>
      <TextArea :textarea="textareaStore.textarea[2]" class="input-field col l4 s12"/>
      <TextArea :textarea="textareaStore.textarea[3]" class="input-field col l4 s12"/>

      <TextArea :textarea="textareaStore.textarea[4]" class="input-field col s12"/>

      <h2>Вопросы об автоматических мыслях</h2>

      <client-only>
        <Question v-for="question of storeQuestions.questions" :key="question.id" :question="question"/>
      </client-only>
    </div>

    <div
        v-else-if="index === 3"
        class="container row">
      <Answer v-for="answer of storeAnswer.answers" :key="answer.id" :answer="answer"/>
    </div>

    <button @click="next"  class="button-swipe" :disabled="index > 2"> > </button>
    <footer class="footer">
      <span>Материал подготовили</span>
      <span>Психолог Иван Лысенко</span>
      <span>Психолог Ирина Галушко</span>
    </footer>
  </div>
</template>
<script setup lang="ts">
import {useHead} from "#head";
import Input from '~/Components/Inputs/Input.vue'
import TextArea from '~/Components/TextArea/TextArea'
import {useInputs} from "~/store/inputs";
import {ref, onMounted} from "vue";
import {useTextArea} from "~/store/textarea";
import {useQuestions} from "~/store/questions";
import {useAnswers} from "~/store/answers";
import Question from "~/Components/Question/Question.vue";
import Answer from "~/Components/Answer/Answer.vue";


const store = useInputs()
const storeQuestions = useQuestions()
const textareaStore = useTextArea()
const storeAnswer = useAnswers()

useHead({
  title: "СМЭР",
  link:[
    {
      rel:"stylesheet",
      href:"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    }
  ],

  script: [
    { src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"}
  ]
})

const index = ref(1)
const isShownLinks = ref(false)
function next() {
  if(index.value <=2) {
    index.value++
  }
}

function prev() {
  if(index.value > 1) {
    index.value--
  }
}

function paginated(skip: number) {
  store.paginated(skip)
}

onMounted(() => {
  store.setState()
  storeQuestions.setState()
  textareaStore.setState()
  storeAnswer.setState()
})
</script>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 80px auto 80px;
  min-height: 100vh;
}
.button-swipe{
  font-size: 12vmax;
}

h2{
  text-align: center;
}

@media screen and (max-width: 700px) {
  h2 {
    font-size: 2rem;
  }
}

.pagination {
  display: flex;
  justify-content: center;
}
.pagination button:focus {
  background: #9d0b9d;
}

.d-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header {
  grid-row: 1/2;
  grid-column: 1/4;
  background: #9d0b9d;
  box-shadow: 1px 5px 20px #9d0b9d;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 20px;
  font-size: 30px;
}

.footer {
  background: #D9D9D9;
  grid-column: 1/4;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
}

.header-link {
  position: relative;
  width: 100%;
}
ul {
  position: absolute;
  padding: 20px;
  width: 100%;
  box-shadow: 1px 1px 13px #000;
  background: #fff;
  z-index: 2;
}
@media screen and (max-width: 700px) {
  .main-container {
    display: flex;
    flex-direction: column;
  }

  .header {
    grid-column: 1/2;
  }
}
</style>