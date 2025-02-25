# Final project

Необходимо создать приложение `pokedex`.

Это последнее задание в курсе. Дедлайн - **14.12**!

Для выполнения этого ДЗ Вам понадобятся следующие npm-пакеты:

* `react`
* `react-dom`
* `react-router-dom`

Выше описаны только самые необходимые пакеты, вы всегда можете добавить что-то еще, например, `prop-types` или `axios`. Для создания react-проекта разрешено пользоваться `create-react-app`.

### Требования:

1. **Главная страница**. Здесь должен выводиться список покемонов карточками. В каждой карточке должен быть id покемона, его имя и кнопка "Catch" (поймать). При нажатии на кнопку покемон "ловится". У пойманных покемонов кнопка должна быть `disabled`. При нажатии на карточку покемона - нужно переходить на страничку покемона.

2. **Страница покемона**. Здесь должна выводиться более подробная информация по указанному покемону: id, имя, картинка, названия его способностей (abilities), названия его типов (types), вес (weight), текущий статус (пойман или нет). Если покемон пойман, то необходимо показывать дату его поимки.

3. **Пойманные покемоны**. Здесь логика точно такая же, как и на главной странице, за исключением того, что должны выводиться только пойманные покемоны.

### Общие требования:

1. **Пагинация**. Может быть реализована любым способом: 
    * Кнопка "Load more", которая подгружает следующую страницу в общий список
    * Endless scroll. Принцип тот же, что и у load more, за исключением того, что следующая порция должна подгружаться автоматически при достижении конца страницы.
    * Традиционная пагинация с номерами страниц

2. **Навигация**. Может быть реализована в хедере, футере или же в боковом меню. Позволяет переключаться между главной страницей и страницей пойманных покемонов, а также возвращаться на эти страницы со страницы покемона.

3. **Адаптивный дизайн**. desktop, tablet, mobile.

4. **Кросс-браузерность**. Должны поддерживаться последние версии современных браузеров. 

### Работа с данными:

Данные по покемонам мы будем получать с помощью [PokeAPI](https://pokeapi.co/):

* Чтобы получить общую информацию по всем покемонам: **GET https://pokeapi.co/api/v2/pokemon**. Мы получим JSON следующего формата:

```json
{
   "count": 1118,
   "next": "https://pokeapi.co/api/v2/pokemon?offset=719&limit=399",
   "previous": null,
   "results": [
      {
         "name": "bulbasaur",
         "url": "https://pokeapi.co/api/v2/pokemon/1/"
      },
      {
         "name": "ivysaur",
         "url": "https://pokeapi.co/api/v2/pokemon/2/"
      },
      ...
   ]
}
```
  * Покемоны в массиве уже отсортированы, т.е. индексы элементов массива `results` соответствуют `id` покемонов
  * Чтобы получить информацию по нужному количеству покемонов, добавьте к запросу параметр limit. Например, **GET https://pokeapi.co/api/v2/pokemon?limit=12** вернет информацию по первым 12 покемонам
  * Чтобы получить информацию по следующей партии покемонов, выполните запрос к URL из поля `next`. Для предыдущей партии, выполните запрос к URL из поля `previous`. Это поможет вам при реализации пагинации


* Чтобы получить более подробную информацию по одному покемону, необходимо сделать запрос **GET "https://pokeapi.co/api/v2/pokemon/:id"**, где `id` - это индекс объекта нужного покемона в массиве `results`(данная ссылка также доступна в поле `url` каждого покемона). Мы получим JSON следующего формата:

```json
{
   "abilities": [
      {
         "ability": {
            "name": "overgrow",
            "url": "https://pokeapi.co/api/v2/ability/65/"
         },
         "is_hidden": false,
         "slot": 1
      },
      {
         "ability": {
            "name": "chlorophyll",
            "url": "https://pokeapi.co/api/v2/ability/34/"
         },
         "is_hidden": true,
         "slot": 3
      },
      ...
   ],
   ...
   "types": [
      {
         "slot": 1,
         "type": {
            "name": "grass",
            "url": "https://pokeapi.co/api/v2/type/12/"
         }
      },
      {
         "slot": 2,
         "type": {
            "name": "poison",
            "url": "https://pokeapi.co/api/v2/type/4/"
         }
      }
   ],
   "weight": 69,
   "sprites": {
      "other": {
         "official-artwork": {
            "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
         },
      },
      ...
   }
}
``` 
  * Путь к картинке покемона находится здесь: `pokemon.sprites.other['official-artwork'].front_default`
  * Для страницы покемона нам потребуется следующая информация: `abilities`, `types`, `weight`. Обратите внимание, что для `abilities` и для `types` нам необходимо выводить только поле `name`.

### Рекомендации:

1. Используйте css-framework, чтобы верстка заняла минимум времени.

2. Постарайтесь построить хорошую архитектуру приложения. Как минимум, стоит отделить бизнес-логику приложения от ее презентационного слоя (деление на "умные" и "глупые" компоненты).

### Nice to have, задания со звездочкой:

Мы приветствуем инициативу. При желании, в дополнение к обязательным и общим требованиям:

1. Если есть опыт работы с дополнительными пакетами, не указанными в списке - не стесняйтесь их использовать (redux, MobX, styled-components, css-modules, и т.д.)

2. Приветствуется создание доступного интерфейса.
 
3. Реализация дополнительного функционала: при поимке покемона кнопка "Catch" не становится `disabled`, а меняется на "Release", что позволяет отпустить пойманного покемона.

4. Любые другие улучшения, не противоречащие обязательным и общим требованиям :) 

Не забудьте продемонстрировать все реализованные "задания со звёздочкой" на финальном собеседовании, которое состоит из защиты проекта и технического интервью! Желаем удачи!

### Если не любите покемонов:

Если есть особая нетерпимость к покемонам, то можно воспользоваться любым понравившимся API и реализовать все фичи из задания (функциональность по поимке покемона можно заменить закладками, лайками и т.п.)
