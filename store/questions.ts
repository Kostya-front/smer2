// @ts-ignore
import { defineStore } from 'pinia'
import {ref, watch} from "vue";

export const useQuestions = defineStore('questions', () => {
        const questions = ref([
            {id:1, question: ' Каковы доказательства, поддерживающие эту идею? Каковы доказательства, противоречащие этой идее?', value: ''},
            {id:2, question: 'Существует ли альтернативное объяснение?', value: ''},
            {id:3, question: 'Что самое плохое может произойти? Смогу ли я пережить это? Что самое лучшее может произойти? Каков самый реалистичный исход?', value: ''},
            {id:4, question: 'Каковы последствия моей веры в автоматическую мысль? Каковы могут быть последствия изменения моего мышления?', value: ''},
            {id:5, question: 'Что в должен делать в связи с этим?', value: ''},
            {id:6, question: 'Что я мог бы посоветовать ____________ (другу), который находится в такой же  ситуации??', value: ''},
        ])

    function setState() {
        if(localStorage.getItem('questions')) {
            questions.value = JSON.parse(localStorage.getItem('questions')!)
        }
    }

    watch(questions, async(newValue, oldValue) => {
        if(newValue) {
            localStorage.setItem('questions', JSON.stringify(questions.value))
        }
    }, { deep: true })

    return {
        questions,
        setState
    }
})
