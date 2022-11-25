// @ts-ignore
import { defineStore } from 'pinia'

export const useInputs = defineStore({
    id: 'inputs',
    state: () => ({
        indexPag: 0,
        inputs: [
            {id:1, title: 'Тревожность', isChecked: false, value: 0},
            {id:2, title: 'Апатия', isChecked: false, value: 0},
            {id:3, title: 'Страх', isChecked: false, value: 0},
            {id:4, title: 'Ненависть', isChecked: false, value: 0},
            {id:1, title: 'Гнев', isChecked: false, value: 0},
            {id:2, title: 'Бешенство', isChecked: false, value: 0},
            {id:3, title: 'Ярость', isChecked: false, value: 0},
            {id:4, title: 'Истерия', isChecked: false, value: 0},
            {id:1, title: 'Злость', isChecked: false, value: 0},
            {id:2, title: 'Раздражение', isChecked: false, value: 0},
            {id:3, title: 'Презрение', isChecked: false, value: 0},
            {id:4, title: 'Негодование', isChecked: false, value: 0},
            {id:1, title: 'Злость', isChecked: false, value: 0},
            {id:2, title: 'Обида', isChecked: false, value: 0},
            {id:3, title: 'Ревность', isChecked: false, value: 0},
            {id:4, title: 'Уязвленность', isChecked: false, value: 0},
            {id:3, title: 'Досада', isChecked: false, value: 0},
            {id:4, title: 'Зависть', isChecked: false, value: 0},
            {id:1, title: 'Неприязнь', isChecked: false, value: 0},
            {id:2, title: 'Возмущение', isChecked: false, value: 0},
            {id:3, title: 'Отвращение', isChecked: false, value: 0},
            {id:4, title: 'Ужас', isChecked: false, value: 0},
            {id:4, title: 'Опасение', isChecked: false, value: 0},
            {id:3, title: 'Отчаяние', isChecked: false, value: 0},
            {id:4, title: 'Оцепенение', isChecked: false, value: 0},
            {id:1, title: 'Подозрение', isChecked: false, value: 0},
            {id:2, title: 'Тревога', isChecked: false, value: 0},
            {id:3, title: 'Ошаращенность', isChecked: false, value: 0},
            {id:4, title: 'Беспокойство', isChecked: false, value: 0},
            {id:1, title: 'Боязнь', isChecked: false, value: 0},
            {id:2, title: 'Унижение', isChecked: false, value: 0},
            {id:3, title: 'Замешательство', isChecked: false, value: 0},
            {id:4, title: 'Растерянность', isChecked: false, value: 0},
            {id:3, title: 'Вина, стыд', isChecked: false, value: 0},
            {id:4, title: 'Сомнение', isChecked: false, value: 0},
            {id:1, title: 'Застенчивость', isChecked: false, value: 0},
            {id:2, title: 'Смущение', isChecked: false, value: 0},
            {id:3, title: 'Сломленность', isChecked: false, value: 0},
            {id:4, title: 'Подвох', isChecked: false, value: 0},
            {id:4, title: 'Надменность', isChecked: false, value: 0},
            {id:3, title: 'Ошеломленность', isChecked: false, value: 0},
            {id:4, title: 'Страх', isChecked: false, value: 0},
            {id:1, title: 'Грусть', isChecked: false, value: 0},
            {id:2, title: 'Горечь', isChecked: false, value: 0},
            {id:3, title: 'Тоска', isChecked: false, value: 0},
            {id:4, title: 'Скорбь', isChecked: false, value: 0},

            {id:4, title: 'Жалость', isChecked: false, value: 0},
            {id:1, title: 'Отрешенность', isChecked: false, value: 0},
            {id:2, title: 'Отчаяние', isChecked: false, value: 0},
            {id:3, title: 'Беспомощность', isChecked: false, value: 0},
            {id:4, title: 'Душевная болль', isChecked: false, value: 0},
            {id:3, title: 'Безнадежность', isChecked: false, value: 0},
            {id:4, title: 'Отчуждение', isChecked: false, value: 0},
            {id:1, title: 'Разочарование', isChecked: false, value: 0},
            {id:2, title: 'Потрясение', isChecked: false, value: 0},
            {id:3, title: 'Сожаление', isChecked: false, value: 0},
            {id:4, title: 'Скука', isChecked: false, value: 0},
            {id:4, title: 'Безысходность', isChecked: false, value: 0},
            {id:3, title: 'Печаль', isChecked: false, value: 0},
            {id:4, title: 'Загнанность', isChecked: false, value: 0},

            {id:1, title: 'Радость', isChecked: false, value: 0},
            {id:3, title: 'Счастье', isChecked: false, value: 0},
            {id:4, title: 'Восторг', isChecked: false, value: 0},
            {id:1, title: 'Ликование', isChecked: false, value: 0},
            {id:2, title: 'Приподнятость', isChecked: false, value: 0},
            {id:3, title: 'Оживление', isChecked: false, value: 0},
            {id:4, title: 'Умиротворение', isChecked: false, value: 0},
            {id:1, title: 'Увлечение', isChecked: false, value: 0},
            {id:2, title: 'Интерес', isChecked: false, value: 0},
            {id:3, title: 'Забота', isChecked: false, value: 0},
            {id:4, title: 'Ожидание', isChecked: false, value: 0},

            {id:1, title: 'Возбуждение', isChecked: false, value: 0},
            {id:2, title: 'Предвкушение', isChecked: false, value: 0},
            {id:3, title: 'Надежда', isChecked: false, value: 0},
            {id:4, title: 'Любопытство', isChecked: false, value: 0},
            {id:1, title: 'Освобождение', isChecked: false, value: 0},
            {id:2, title: 'Приятие', isChecked: false, value: 0},
            {id:3, title: 'Принятие', isChecked: false, value: 0},
            {id:4, title: 'Вера', isChecked: false, value: 0},
            {id:1, title: 'Нетерпение', isChecked: false, value: 0},
            {id:2, title: 'Вера', isChecked: false, value: 0},
            {id:3, title: 'Изумление', isChecked: false, value: 0},
            {id:4, title: 'Ожидание', isChecked: false, value: 0},

            {id:1, title: 'Любовь', isChecked: false, value: 0},
            {id:2, title: 'Нежность', isChecked: false, value: 0},
            {id:3, title: 'Теплота', isChecked: false, value: 0},
            {id:4, title: 'Сочувствие', isChecked: false, value: 0},
            {id:1, title: 'Блаженство', isChecked: false, value: 0},
            {id:2, title: 'Доверие', isChecked: false, value: 0},
            {id:3, title: 'Безопасность', isChecked: false, value: 0},
            {id:4, title: 'Благодарность', isChecked: false, value: 0},
            {id:1, title: 'Спокойствие', isChecked: false, value: 0},
            {id:2, title: 'Симпатия', isChecked: false, value: 0},
            {id:3, title: 'Идентичность', isChecked: false, value: 0},
            {id:4, title: 'Гордость', isChecked: false, value: 0},

            {id:1, title: 'Восхищение', isChecked: false, value: 0},
            {id:2, title: 'Уважение', isChecked: false, value: 0},
            {id:3, title: 'Самоценность', isChecked: false, value: 0},
            {id:4, title: 'Влюбленность', isChecked: false, value: 0},
            {id:1, title: 'Любовь к себе', isChecked: false, value: 0},
            {id:2, title: 'Очарованность', isChecked: false, value: 0},
            {id:3, title: 'Смирение', isChecked: false, value: 0},
            {id:4, title: 'Искренность', isChecked: false, value: 0},
            {id:1, title: 'Дружелюбие', isChecked: false, value: 0},
            {id:2, title: 'Доброта', isChecked: false, value: 0},
            {id:3, title: 'Единство', isChecked: false, value: 0},

            {id:1, title: 'Нервозность', isChecked: false, value: 0},
            {id:2, title: 'Пренебреждение', isChecked: false, value: 0},
            {id:3, title: 'Недовольство', isChecked: false, value: 0},
            {id:4, title: 'Вредность', isChecked: false, value: 0},
            {id:1, title: 'Огорчение', isChecked: false, value: 0},
            {id:2, title: 'Нетерпимость', isChecked: false, value: 0},
            {id:3, title: 'Вседозволенность', isChecked: false, value: 0},
            {id:4, title: 'Раскаяние', isChecked: false, value: 0},
            {id:1, title: 'Безысходность', isChecked: false, value: 0},
            {id:2, title: 'Превосходство', isChecked: false, value: 0},
            {id:3, title: 'Неполноценность ', isChecked: false, value: 0},

            {id:1, title: 'Неудобство', isChecked: false, value: 0},
            {id:2, title: 'Неловкость', isChecked: false, value: 0},
            {id:3, title: 'Неуверенность', isChecked: false, value: 0},
            {id:4, title: 'Тупик', isChecked: false, value: 0},
            {id:1, title: 'Усталость', isChecked: false, value: 0},
            {id:2, title: 'Принуждение', isChecked: false, value: 0},
            {id:3, title: 'Одиночество', isChecked: false, value: 0},
            {id:4, title: 'Отверженность', isChecked: false, value: 0},
            {id:1, title: 'Подавленность', isChecked: false, value: 0},
            {id:2, title: 'Холодность', isChecked: false, value: 0},
            {id:3, title: 'Безучастность ', isChecked: false, value: 0},

            {id:1, title: 'Равнодушие', isChecked: false, value: 0},
            {id:2, title: 'Удовлетворение', isChecked: false, value: 0},
            {id:3, title: 'Уверенность', isChecked: false, value: 0},
            {id:4, title: 'Довольство', isChecked: false, value: 0},
            {id:1, title: 'Окрыленность', isChecked: false, value: 0},
            {id:2, title: 'Торжественность', isChecked: false, value: 0},
            {id:3, title: 'Жизнерадостность', isChecked: false, value: 0},
            {id:4, title: 'Облегчение', isChecked: false, value: 0},
            {id:1, title: 'Ободрение', isChecked: false, value: 0},
            {id:2, title: 'Удивление', isChecked: false, value: 0},
            {id:3, title: 'Сопереживание ', isChecked: false, value: 0},

            {id:1, title: 'Сопричастность', isChecked: false, value: 0},
            {id:2, title: 'Урановешенность', isChecked: false, value: 0},
            {id:3, title: 'Смирение', isChecked: false, value: 0},
            {id:4, title: 'Естественность', isChecked: false, value: 0},
            {id:1, title: 'Жизнелюбие', isChecked: false, value: 0},
            {id:2, title: 'Вдохновенние', isChecked: false, value: 0},
            {id:3, title: 'Воодушевление', isChecked: false, value: 0},
        ]
    }),

    actions: {
        setValue(input: { title: string, value: number}) {
            this.inputs.forEach(inputItem => {
                if(inputItem.title === input.title) {
                    if( +input.value > 100) {
                        inputItem.value = 100
                    }
                    else if( +input.value <= 1) {
                        inputItem.value = 1
                    }
                    inputItem.value = input.value
                }
            })
            localStorage.setItem('inputs', JSON.stringify(this.inputs))
        },

        setState() {
            if(localStorage.getItem('inputs')) {
                this.inputs = JSON.parse(localStorage.getItem('inputs')!)
            }
        },
        setCheck(input: {title: string, isChecked: boolean}) {
            this.inputs.forEach(inputItem => {
                if(inputItem.title === input.title) {
                    inputItem.isChecked = input.isChecked
                }
            })
            localStorage.setItem('inputs', JSON.stringify(this.inputs))
        },

        paginated(skip: number) {
            this.indexPag = skip
        }
    },

    getters: {
        paginatedInputs: (state) => state.inputs.slice(12*state.indexPag,12*state.indexPag + 12)
    }
})
