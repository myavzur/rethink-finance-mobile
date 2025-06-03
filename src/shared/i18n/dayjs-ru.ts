// Russian [ru]
// @ts-nocheck

import dayjs from 'dayjs'
import { Locale } from "@/shared/stores";

const monthFormat = 'Января_Февраля_Марта_Апреля_Мая_Июня_Июля_Августа_Сентября_Октября_Ноября_Декабря'.split('_')
const monthStandalone = 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split('_')

const monthShortFormat = 'Янв._Февр._Мар._Апр._Мая_Июня_Июля_Авг._Сент._Окт._Нояб._Дек.'.split('_')
const monthShortStandalone = 'Янв._Февр._Март_Апр._Май_Июнь_Июль_Авг._Сент.Окт._Нояб._Дек.'.split('_')

const MONTHS_IN_FORMAT = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/

function plural(word, num) {
	const forms = word.split('_')
	return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]) // eslint-disable-line
}
function relativeTimeWithPlural(number, withoutSuffix, key) {
	const format = {
		mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
		hh: 'час_часа_часов',
		dd: 'день_дня_дней',
		MM: 'месяц_месяца_месяцев',
		yy: 'год_года_лет'
	}
	if (key === 'm') {
		return withoutSuffix ? 'минута' : 'минуту'
	}

	return `${number} ${plural(format[key], +number)}`
}
const months = (dayjsInstance, format) => {
	if (MONTHS_IN_FORMAT.test(format)) {
		return monthFormat[dayjsInstance.month()]
	}
	return monthStandalone[dayjsInstance.month()]
}
months.s = monthStandalone
months.f = monthFormat

const monthsShort = (dayjsInstance, format) => {
	if (MONTHS_IN_FORMAT.test(format)) {
		return monthShortFormat[dayjsInstance.month()]
	}
	return monthShortStandalone[dayjsInstance.month()]
}
monthsShort.s = monthShortStandalone
monthsShort.f = monthShortFormat

const locale = {
	name: "ru",
	weekdays: 'Воскресенье_Понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
	weekdaysShort: 'Вск_Пнд_Втр_Срд_Чтв_Птн_Сбт'.split('_'),
	weekdaysMin: 'Вс_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
	months,
	monthsShort,
	weekStart: 1,
	yearStart: 4,
	formats: {
		LT: 'H:mm',
		LTS: 'H:mm:ss',
		L: 'DD.MM.YYYY',
		LL: 'D MMMM YYYY г.',
		LLL: 'D MMMM YYYY г., H:mm',
		LLLL: 'dddd, D MMMM YYYY г., H:mm'
	},
	relativeTime: {
		future: 'через %s',
		past: '%s назад',
		s: 'несколько секунд',
		m: relativeTimeWithPlural,
		mm: relativeTimeWithPlural,
		h: 'час',
		hh: relativeTimeWithPlural,
		d: 'день',
		dd: relativeTimeWithPlural,
		M: 'месяц',
		MM: relativeTimeWithPlural,
		y: 'год',
		yy: relativeTimeWithPlural
	},
	ordinal: n => n,
	meridiem: (hour) => {
		if (hour < 4) {
			return 'ночи'
		} else if (hour < 12) {
			return 'утра'
		} else if (hour < 17) {
			return 'дня'
		}
		return 'вечера'
	}
}

dayjs.locale(locale, null, true)

export default locale
