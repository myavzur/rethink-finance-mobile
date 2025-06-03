import dayjs from 'dayjs'
import dayjsLocaleEn from "dayjs/locale/en";
import { Locale } from "@/shared/stores";

const locale = {
	en: Locale.ENGLISH,
	...dayjsLocaleEn
} // Your Day.js locale Object.

dayjs.locale(locale, undefined, true) // load locale for later use

export default locale