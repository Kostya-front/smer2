// @ts-ignore
import { defineStore } from 'pinia'

export const useAnswers = defineStore({
    id: 'answers',
    persist: true,
    state: () => ({
        answers: [
            {id:1, title: 'Ситуация', fields: [
                {id:1, placeholder:`Какое конкретно событие, либо поток мыслей и/или образов. либо воспоминаний пришли вам на ум?`, value: ''},
                {id:2, placeholder:`Были ли у вас неприятные физические ощущения и если да, то какие именно?`, value: ``}]
            },
            {id:2, title: 'Адаптивный ответ', fields: [
                {id:3, placeholder:`. Какие мысли и/или представления возникли у вас? `, value: ''},
                {id:4, placeholder:`Насколько вы были убеждены в их истинности в тот момент, когда они возникали?`, value: ''}]
            },
            {id:3, title: 'Эмоции', fields: [
                {id:5, placeholder:`Что вы в тот момент чувствовали (грусть, тревогу, злость и т.д.)? Насколько ярко была выражена каждая из этих эмоций?`, value: ''}]
            },
            {id:4, title: 'Автоматические мысли', fields: [
                {id:6, placeholder:`(желательно) Какое когнитивное искажение вы допустили?`, value: ''},
                {id:7, placeholder:`Используйте вопросы, приведенные ниже, чтобы сформулировать ответ на автоматические мысли`, value: ''} ,
                {id:9, placeholder:`Насколько вы убеждены в каждом ответе?`, value: ''}]
            },
            {id:5, title: 'Результат ', fields: [
                {id:10, placeholder:`Насколько теперь вы убеждены в истинности каждой автоматической мысли?`, value: ''},
                {id:11, placeholder:` Какие эмоции вы сейчас испытываете? Насколько каждая из них интенсивна (В континууме 0-1 00%)?`, value: ''} ,
                {id:12, placeholder:`3. .Каковы будут ваши дальнейшие действия (или: что вы сделали)?`, value: ''}]
            },
        ]
    }),

    actions: {
        setState() {
            if(localStorage.getItem('answers')) {
                this.answers = JSON.parse(localStorage.getItem('answers')!)
            }
        },
        setAnswers() {
            localStorage.setItem('answers', JSON.stringify(this.answers))
        }
    }
})
