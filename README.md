# Beer Roulette

https://beer.savostyanov.com/ is a single-page website built with pure `HTML`, `CSS`, and `JavaScript`, where the user spins an animated roulette and gets a random beer “drop” from the collection.

## Development Video

The website was vibe-coded from scratch in real time on YouTube: https://youtu.be/hSPb3O-ROHI

About the author: I’m a Machine Learning Engineer at a Silicon Valley startup, where I train neural networks for 3D animation. Before that, I worked on GOSU AI.

Subscribe to my Telegram channel: https://t.me/savostyanov_dmitry

## What’s Inside

- an animated card reel with a smooth stop on the winning item;
- rarity system: `common`, `rare`, `epic`, `legendary`;
- result screen with the image, name, and rarity of the beer drop;
- responsive UI for desktop and mobile devices;
- local image collection stored in the `images/` folder.

## How to Run

### Option 1. Just Open the File

Open `index.html` in your browser.

### Option 2. Run a Local Server

If you prefer to run the project through a local server:

```bash
python3 -m http.server 8000
```
Then open http://localhost:8000 in your browser.

Where to Change Things
- `index.html` — basic page layout and result modal markup;
- `styles.css` — visual style, responsiveness, cards, and effects;
- `script.js` — roulette logic, item list, rarities, and animation;
- `images/` — images of beer bottles and cans;
- `beer.txt` — list of original image URLs.
---

# Ru
https://beer.savostyanov.com/ — одностраничный сайт на чистом `HTML`, `CSS` и `JavaScript`, где пользователь запускает анимированную рулетку и получает случайный "дроп" из коллекции пива.

## Видео с разработкой

Сайт был завайбкожен с нуля в реальном времени на YouTube: https://youtu.be/hSPb3O-ROHI

Об авторе: я Machine Learning Engineer в стартапе из Кремниевой Долины, обучаю нейросети для 3D анимации. До этого развивал проект GOSU AI. 
Подписывайтесь на мой телеграм: https://t.me/savostyanov_dmitry

## Что внутри

- анимированная лента карточек с плавной остановкой на выигранном предмете;
- система редкостей: `common`, `rare`, `epic`, `legendary`;
- экран результата с изображением, названием и редкостью выпавшего пива;
- адаптивный интерфейс для десктопа и мобильных устройств;
- локальная коллекция изображений в папке `images/`.

## Запуск

### Вариант 1. Просто открыть файл

Откройте `index.html` в браузере.

### Вариант 2. Запустить локальный сервер

Если удобнее запускать проект через локальный сервер:

```bash
python3 -m http.server 8000
```

После этого откройте в браузере [http://localhost:8000](http://localhost:8000).

## Где что менять

- `index.html` — базовая разметка страницы и модального окна результата;
- `styles.css` — визуальный стиль, адаптивность, карточки и эффекты;
- `script.js` — логика рулетки, список предметов, редкости и анимация;
- `images/` — изображения бутылок и банок;
- `beer.txt` — список исходных ссылок на изображения.
