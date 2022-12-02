// @ts-ignore
import { defineStore } from 'pinia'
import {ref, watch} from "vue";

export const useTextArea = defineStore('textarea', () => {
        const textarea = ref([
            {id:1, title: 'Ситуация', value: '', placeholder: 'Время, событие, ряд событий. Фактическое содержание'},
            {id:2, title: 'Автоматические мысли:', value: '', placeholder: 'Что вы подумали при этом, привычным образом?\n' +
                    '(на уровне рефлекса)\n' +
                    '(эти мысли возникают постоянно в одной и той же формулировке)\n'},
            {id:3, title: 'Промежуточные убеждения', value: '', placeholder: '\n' +
                    'Автоматические мысли:\n' +
                    'Что вы подумали при этом, привычным образом?\n' +
                    '(на уровне рефлекса)\n' +
                    '(эти мысли возникают постоянно в одной и той же формулировке)\n'},
            {id:4, title: 'Глубинное убеждение', value: '', placeholder: 'ГУ беспомощности\n' +
                    'ГУ непривлекательности\n' +
                    'ГУ никчемности\n'},
            {id:5, title: 'Мысли', value: '', placeholder: '1.\tНасколько вы сейчас доверяете этой мысли (0-100%)?\n' +
                    '2.\t Какие чувства и эмоции возникают у вас из-за этой мысли?\n' +
                    '3.\tНасколько интенсивны эти эмоции (0-100%)?\n'},
        ])

    function setState() {
        if(localStorage.getItem('textarea')) {
            textarea.value = JSON.parse(localStorage.getItem('textarea')!)
        }
    }

    watch(textarea, async(newValue, oldValue) => {
        if( newValue ) {
            localStorage.setItem('textarea', JSON.stringify(textarea.value))
        }
    }, { deep:true })

    return {
        setState,
        textarea
    }
})
