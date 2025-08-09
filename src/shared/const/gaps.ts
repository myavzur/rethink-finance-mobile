// TODO: Правило 4px grid по стандарту Material Design и подобных.
//  Убрать слишком близкие значения, пример выхлопа
/*
* export const Gaps = {
  // Базовые отступы (кратные 4 для лучшего выравнивания)
  g4: 4,    // маленький отступ (может быть полезен для плотных интерфейсов)
  g8: 8,    // стандартный маленький отступ
  g12: 12,  // средний отступ (заменяет ваш g10 и g15)
  g16: 16,  // стандартный средний отступ
  g20: 20,  // большой отступ (оставляем как было)
  g24: 24,  // дополнительный вариант между 20 и 28
  g32: 32,  // очень большой отступ (вместо g30)

  // Семантические отступы (можно переименовать по вашему усмотрению)
  listItem: 12,          // вместо "latest-categories-list": 20
  listSection: 6,        // вместо "category-and-transaction-list": 6
  accordionHeader: 10,   // оставляем как было
  cardPadding: 16,       // часто используемое значение
  screenPadding: 20,     // отступы по краям экрана
} as const; */
export const Gaps = {
	g5: 5,
	g10: 10,
	g15: 15,
	g20: 20,
	g25: 25,
	g30: 30,
	mainLayoutHorizontal: 20,
	mainLayoutVertical: 15,
	"latest-categories-list": 20,
	"category-and-transaction-list": 6,
	"accordion-header": 10
} as const;
