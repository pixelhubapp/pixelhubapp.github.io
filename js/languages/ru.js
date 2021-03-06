var config = {
	appname:"HustBee",
	title:"HustBee - Лучший облачный хостинг",
	header:{
		mobileopen:"Открыть",
        vk:"Группа ВК",
        helpdeskz:"База знаний",
        main:"Главная",
        whyus:"Почему мы",
        tarif:"Тарифы",
        status:"Статус платформы",
        login:" Войти в аккаунт",
        register:"Присоединиться"
	},
	main:{
		title:"Лучший облачный хостинг",
		p1:"Нашими услугами пользуются более",
		p2:"разработчиков",
		youremail:"Ваш Email",
		youremailpl:"Введите свой Email",
		buttonstart:"Начать",
        whyus:"Почему мы?",
        whyusfull:"Мы - специалисты в области облачных технологий.",
        fasthost:"Быстрый хостинг",
        fasthostfull:"Наш хостинг был независимо протестирован и признан самым быстрым бесплатным хостингом в мире.",
        unlimitedhost:"Неограниченный хостинг",
        unlimitedhostfull:"HustBee - это хостинг сайтов с неограниченным дисковым пространством и неограниченной пропускной способностью.",
        noads:"Нет принудительной рекламы",
        noadsfull:"Ваш сайт является вашим собственным, мы никогда не будем навязывать рекламу на вашем сайте.",
        h5title:" В знак признания нашей усердной работы и стремления предоставить вам хостинг высочайшего качества, мы с гордостью сообщаем вам, что iFastNet(спонсор HustBee) получил премию TMT Telecoms Award 2017 за «Лучший премиум-хостинг»!",
        sites:"Сайтов",
        clients:"Клиентов",
        servers:"Более 100 серверов с 32 ядрами на узел",
        plans:"Тарифные планы",
        selectplan:"Выберите тарифный план",
        planmore:"Все сайты размещаются в кластерной сети GRID, что делает Ваш сайт невероятно быстрым и устойчивым к сбоям.",
        svgctatitle:"Хотите создать сайт бесплатно?",
        svgctap:"Бесплатный и неограниченный хостинг навсегда - что может быть лучше?",
        createbutton:"Создать"
	},
	plans:{
		econom:"Эконом",
		premium:"Премиум",
		cp2:"25% скидка",
		limitcpu1:"Ограниченная мощность сервера",
		limitcpu2:"Средняя мощность сервера",
		limitcpu3:"Большая мощность сервера",
		unlimtftp:" ∞ учетных записей FTP",
		stoftp:"100 учетных записей FTP",
		oneftp:"1 аккаунт FTP",
		stomail:"100 учетных записей электронной почты",
		tenmail:"10 учетных записей электронной почты",
		unlimail:" ∞ учетных записей электронной почты",
		freehits:"50 000 ежедневных хитов",
		unlimthits:"Неограниченные хиты",
		premiumsupport:"Премиум поддержка",
		selectbutton:"Выбрать",
		month:"месяц",
        ptos:"Выбирая тариф, вы соглашаетесь с нашими",
        ptos2:"условиями обслуживания",
	},
	required:{
		email:"Пожалуйста,введите свой Email",
	},
	footer:{
		info:"Информация",
		about:"О нас",
		company:"Компания",
		forum:"Форум",
		contact:"Контакты",
		contactmail:"Контактные Email",
		p1:"Сотрудничество",
		abuse:"Сообщить о злоупотреблении"
	}
};
var templateScript = $('#app').html();
var template = Handlebars.compile(templateScript);
$(document.body).append(template(config));
document.title = config["title"];
