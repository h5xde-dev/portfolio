import Vue from 'vue';
import * as tw from '~/tailwind.config';

export default ({ app }, inject) => {
  inject('tw', Vue.observable(tw))
  inject('myWorks', Vue.observable([
    {
        name: "G2R",
        position: "Junior Web-Developer",
        description: `Занимался поддержкой двух проектов на битриксе и разработкой закрытой ERP системы, маркетплейса, помимо этого писал парсеры под b2b площадки и сервисы которые связаны с тендерами, выявлял уязвимости веб-приложений
            <br/>Также для маркетплейса писал приложение на flutter, приложение было завершено на примерно 85%, потом проект заморозили.
            <br/>В приложении использовалась авторизация с апи сервером через bearer токен, который я хранил в shared_preferences
            <br/>Через <code>flutter_cache_manager</code> реализовывал кеширование на андроиде
            <br/>В приложении работает чат с пушами, Есть ранние остатки кода для подключения к сокету RabbitMQ.
            <br/>Также сделал функционал с камерой и сменой аватара у пользователя
            <br/>Увы приложение может уже не работать, потому что сервер с апишкой скорее всего уже закрыт`,
        images: [
            {site: 'https://g2r.su',src:'works/g2rsu.png'},
            {site: 'https://g2r.market',src:'works/Market.png'}
        ],
    },
    {
        name: "YouInRoll",
        position: "Middle Full-Stack Web-Developer",
        description: `Поддерживал и дорабатывал обучающий видеохостинг
            <br/>Разрабатывал сервис для видеоконференций на Electron и ReactJS
            <br/>Добавил на сайт чат на RabbitMQ,
            <br/>Внедрил RTMP трансляции на сайт
            <br/>(Компания судя по всему уже закрылась)`,
        images: [
            {site: 'https://youinroll.com', src:'works/YouInRoll.png'}
        ],
    },
    {
        name: "Группа компаний Сильвер",
        position: "Руководитель отдела Web-Разработки",
        description: `Занимаюсь разработкой сайтов для дилерских центров
            <br/>Разработка аудиобейджей, которые распознают речь менеджера и затем отправляют на сервер для дальнейшей аналитики
            <br/>Сервис для создания QR визиток на NuxtJS+TailwindCSS
            <br/>Анкеты для пользователей на кассе дилерского-центра
            <br/>Welcome-скрины для посетителей сервисного центра
            <br/>Аукцион для автомобилей с пробегом
            <br/>Основной сайт (до правок) с интеграцией 1С, MaxPoster и Haraba
            <br/>Недавно компания захотела сделать своё мобильное приложение, выкатили временный прототип в плей-маркет`,
        images: [
            {site: 'https://my-silver.ru', src:'work/silver.png'},
            {site: 'https://silver-moto.ru', src:'works/land-brp.png'},
            {site: 'http://hyundai-h1.my-silver.ru', src:'works/hh1.png'},
            {site: 'https://uaz2.my-silver.ru', src:'work/land-uaz.png'},
            {site: 'https://auction.my-silver.ru', src:'work/TradeSilver.png'},
            {site: 'https://jeep-silver.ru', src:'work/Jeep.png'}
        ],
    }
  ]))
}