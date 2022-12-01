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

    <div class="d-flex">
      <div class="container row">
        <h2 class="col s12">Компенсаторные стратегии
          (Что делает человек, что бы справиться со стрессом)
        </h2>

        <div class="items">
          <h5>Отказ от негативных эмоций</h5>
          <h5>Демонстрация ярких эмоций (для привлечения внимания)</h5>
        </div>

        <div class="items">
          <h5>Стремление к совершенству</h5>
          <h5>Намеренное представление себя некомпетентным  или  беспомощным</h5>
        </div>

        <div class="items">
          <h5>Принятие на себя чрезмерной ответственности</h5>
          <h5>Отказ от ответственности</h5>
        </div>

        <div class="items">
          <h5>Уход от близких отношений</h5>
          <h5>Стремление к неподходящим близким отношениям</h5>
        </div>

        <div class="items">
          <h5>Поиск признания</h5>
          <h5>Избегание внимания посторонних</h5>
        </div>

        <div class="items">
          <h5>Уход от конфронтации</h5>
          <h5>Провоцирование других людей</h5>
        </div>

        <div class="items">
          <h5>Желание полностью контролировать ситуацию</h5>
          <h5>Противодействие контролю со стороны окружающих контролировать ситуацию</h5>
        </div>

        <div class="items">
          <h5>Инфантильное поведение</h5>
          <h5>Авторитарное поведение</h5>
        </div>

        <div class="items">
          <h5>Желание угодить другим людям	</h5>
          <h5>Дистанцирование от окружающих или желание угодить лишь самому себе</h5>
        </div>

      </div>
    </div>

    <footer class="footer">
      <span>Материал подготовили</span>
      <span>Психолог Иван Лысенко</span>
      <span>Психолог Ирина Галушко</span>
    </footer>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useHead} from "#head";

const isShownLinks = ref(false)

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
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
}

h2{
  text-align: center;
}

@media screen and (max-width: 700px) {
  h2 {
    font-size: 2rem;
  }
}

.d-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header {
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
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 20px;
  height: 135px;
}

.header-link {
  position: relative;
  width: 100%;
  cursor: pointer;
  text-decoration: underline;
}
ul {
  position: absolute;
  padding: 20px;
  width: 100%;
  box-shadow: 1px 1px 13px #000;
  background: #fff;
  z-index: 2;
}

.items { display: flex; align-items: center; justify-content: space-between; width: 100%}

@media screen and (max-width: 700px) {
  h5 { font-size: 0.8rem}
}
h5 { width: 50%}
</style>