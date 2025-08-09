export interface Dictionary {
	dates_today: string;
	dates_yesterday: string;
	dates_tomorrow: string;

	tabbar_home: string;
	tabbar_categories: string;
	tabbar_analysis: string;
	tabbar_settings: string;

	expenses: string;
	income: string;

	/* Обход для того, чтобы библиотека react-intl могла сожрать объект
	 * типа Dictionary в пропе messages */
	[key: string]: string;
}
