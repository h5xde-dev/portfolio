(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,r,t){"use strict";var n=t(3),o=t(235);r.a=function(e,r){e.app;r("tw",n.a.observable(o)),r("myWorks",n.a.observable([{name:"G2R",position:"Junior Web-Developer",description:"Занимался поддержкой двух проектов на битриксе и разработкой закрытой ERP системы, маркетплейса, помимо этого писал парсеры под b2b площадки и сервисы которые связаны с тендерами, выявлял уязвимости веб-приложений\n            <br/>Также для маркетплейса писал приложение на flutter, приложение было завершено на примерно 85%, потом проект заморозили.\n            <br/>В приложении использовалась авторизация с апи сервером через bearer токен, который я хранил в shared_preferences\n            <br/>Через <code>flutter_cache_manager</code> реализовывал кеширование на андроиде\n            <br/>В приложении работает чат с пушами, Есть ранние остатки кода для подключения к сокету RabbitMQ.\n            <br/>Также сделал функционал с камерой и сменой аватара у пользователя\n            <br/>Увы приложение может уже не работать, потому что сервер с апишкой скорее всего уже закрыт",images:[{site:"https://g2r.su",src:"works/g2rsu.png"},{site:"https://g2r.market",src:"works/Market.png"}]},{name:"YouInRoll",position:"Middle Full-Stack Web-Developer",description:"Поддерживал и дорабатывал обучающий видеохостинг\n            <br/>Разрабатывал сервис для видеоконференций на Electron и ReactJS\n            <br/>Добавил на сайт чат на RabbitMQ,\n            <br/>Внедрил RTMP трансляции на сайт\n            <br/>(Компания судя по всему уже закрылась)",images:[{site:"https://youinroll.com",src:"works/YouInRoll.png"}]},{name:"Группа компаний Сильвер",position:"Руководитель отдела Web-Разработки",description:"Занимаюсь разработкой сайтов для дилерских центров\n            <br/>Разработка аудиобейджей, которые распознают речь менеджера и затем отправляют на сервер для дальнейшей аналитики\n            <br/>Сервис для создания QR визиток на NuxtJS+TailwindCSS\n            <br/>Анкеты для пользователей на кассе дилерского-центра\n            <br/>Welcome-скрины для посетителей сервисного центра\n            <br/>Аукцион для автомобилей с пробегом\n            <br/>Основной сайт (до правок) с интеграцией 1С, MaxPoster и Haraba\n            <br/>Недавно компания захотела сделать своё мобильное приложение, выкатили временный прототип в плей-маркет",images:[{site:"https://my-silver.ru",src:"work/silver.png"},{site:"https://silver-moto.ru",src:"works/land-brp.png"},{site:"http://hyundai-h1.my-silver.ru",src:"works/hh1.png"},{site:"https://uaz2.my-silver.ru",src:"work/land-uaz.png"},{site:"https://auction.my-silver.ru",src:"work/TradeSilver.png"},{site:"https://jeep-silver.ru",src:"work/Jeep.png"}]}]))}},163:function(e,r,t){"use strict";var n=t(3),o=t(238),l=t(239);n.a.use(l.a),n.a.use(o.a)},235:function(e,r,t){var n=t(146);e.exports={theme:{colors:{transparent:"transparent",current:"currentColor",primary:n.blue,black:n.black,white:n.white,gray:n.gray,emerald:n.emerald,indigo:n.indigo,yellow:n.yellow,red:n.red,blue:n.blue,green:n.green}},variants:{extend:{opacity:["disabled"],cursor:["disabled"]}},plugins:[t(325)]}},240:function(e,r,t){"use strict";var n=t(5),component=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("nuxt"),e._v(" "),t("background")],1)}),[],!1,null,null,null);r.a=component.exports;installComponents(component,{Background:t(410).default})},241:function(e,r,t){t(242),e.exports=t(243)},410:function(e,r,t){"use strict";t.r(r);var n=t(11),o={data:function(){var e;return{config:(e={num:[1,2],position:"absolute",color:[this.$tw.theme.colors.primary[400],this.$tw.theme.colors.primary[500],this.$tw.theme.colors.primary[700]],top:0,zIndex:-1,type:"circle",life:[1.5,2],rps:.1,radius:[1,1]},Object(n.a)(e,"life",[1.5,3]),Object(n.a)(e,"v",[1,2]),Object(n.a)(e,"tha",[-30,30]),Object(n.a)(e,"alpha",[.6,0]),Object(n.a)(e,"scale",[-.3,.1]),Object(n.a)(e,"position","all"),Object(n.a)(e,"cross","dead"),Object(n.a)(e,"random",2),e)}}},l=t(5),component=Object(l.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"fixed top-0 h-screen w-screen",staticStyle:{"z-index":"-1",filter:"blur(30px)"}},[t("div",{staticClass:"h-screen relative w-screen"},[t("client-only",{attrs:{placeholder:"Loading..."}},[t("particles-bg",{attrs:{color:e.config.color,config:e.config,type:e.config.type,bg:!0}})],1)],1)])}),[],!1,null,null,null);r.default=component.exports}},[[241,3,1,4]]]);