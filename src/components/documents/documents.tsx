import { ProfiDoc } from "./profi-doc"
import photo1 from "../../assets/img/photo1.svg"
import photo2 from "../../assets/img/photo2.svg"

import css from "./documents.module.css"

// 12.10.2021

export function Documents() {
    return (
        <div>
            <div className={css.cards}>
                <ProfiDoc
                    date={new Date(2021, 10, 12)}
                    text={`
SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.

Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
                    `}
                    source={"Комсомольская правда KP.RU"}
                    subtitle={"Скиллфэктори - лучшая онлайн-школа для будущих айтишников"}
                    badge={"Технические новости"}
                    img={photo1}
                    wordsCount={`2 543`}
                />
                <ProfiDoc
                    date={new Date()}
                    text={`
Кто такой Data Scientist и чем он занимается? Data Scientist — это специалист, который работает с большими массивами данных, чтобы с их помощью решить задачи бизнеса. Простой пример использования больших данных и искусственного интеллекта — умные ленты в социальных сетях. На основе ваших просмотров и лайков алгоритм выдает рекомендации с контентом, который может быть вам интересен. Эту модель создал и обучил дата-сайентист, и скорее всего, не один.
                    
В небольших компаниях и стартапах дата-сайентист делает все: собирает и очищает данные, создает математическую модель для их анализа, тестирует ее и презентует готовое решение бизнесу
                    `}
                    source={"VC.RU"}
                    subtitle={""}
                    badge={"Технические новости"}
                    img={photo2}
                    wordsCount={"3 233"}
                />
            </div>
        </div>
    )
}