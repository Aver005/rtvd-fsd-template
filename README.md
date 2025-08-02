# 🚀 RTVD FSD Template

**React + TypeScript + Vite + DaisyUI Feature-Sliced Design Template**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 🌟 Особенности

- ⚡ **Молниеносная разработка** с Vite
- 🧩 **Готовый FSD (Feature-Sliced Design)** архитектурный подход
- 🎨 **Красивый UI** с DaisyUI + TailwindCSS
- 🏗 **TypeScript** для типобезопасности
- 🧠 **Zustand** для управления состоянием
- 🖼 **Lucide Icons + кастомные иконки** для полной гибкости
- 🕶 **Готовая темная тема** из коробки
- 🧹 **Чистая структура** с продуманной организацией кода

## 📦 Установленные зависимости

### Основные
- `react` + `react-dom`
- `typescript`
- `vite`
- `daisyui`
- `tailwindcss`

### Дополнительные
- `zustand` (глобальный state-менеджер)
- `lucide-react` (иконки)
- `react-router-dom` (роутинг)

## 🏗 Структура проекта (FSD)

```
├───public
└───src
    ├───app/          # Инициализация приложения, хранилища, routing
    │   └───stores/   # Глобальные состояния (Zustand)
    ├───features/     # Бизнес-фичи (по feature-slug)
    ├───pages/        # Страницы приложения
    ├───shared/       # Переиспользуемые ресурсы
    │   ├───icons/    # Кастомные иконки (TSX компоненты)
    │   ├───styles/   # Глобальные стили (globals.css, fonts.css, themes.css)
    │   ├───types/    # Общие типы и интерфейсы
    │   └───ui/       # Базовые UI компоненты (кнопки, инпуты и т.д.)
    │   └───hooks/    # Базовые хуксы (useAuth, useForm и т.д.)
    └───widgets/      # Самостоятельные сложные виджеты
```

## 🛠 Быстрый старт

1. **Клонировать репозиторий**
   ```bash
   git clone https://github.com/aver005/rtvd-fsd-template.git .
   ```

2. **Установить зависимости**
   ```bash
   yarn install
   # или
   pnpm install
   ```

3. **Запустить dev-сервер**
   ```bash
   yarn dev
   # или
   pnpm dev
   ```

4. **Собрать production**
   ```bash
   yarn build
   # или
   pnpm build
   ```

## 🎨 Темы и стили

Проект включает готовую темную тему. Все стили настроены через Tailwind + DaisyUI.

Основные файлы стилей:
- `src/shared/styles/fonts.css` - настройки шрифтов
- `src/shared/styles/themes.css` - настройки тем
- `src/shared/styles/globals.css` - глобальные стили

## 🤖 Рекомендации по разработке

### 1. Работа с фичами
- Каждая фича в `features/` должна быть самодостаточной
- Именуйте фичи по доменному имени (например: `auth`, `profile`, `dashboard`)
- Фича может содержать:
  - `components/` - специфичные для фичи компоненты
  - `api/` - API-слой фичи
  - `types/` - специфичные типы
  - `hooks/` - кастомные хуки

### 2. Использование shared-ресурсов
- **Иконки**:
  - Готовые иконки из Lucide импортируйте напрямую (лучше с `Icon` постфиксом, например `<ClockIcon />`)
  - Кастомные иконки добавляйте в `shared/icons/` как TSX компоненты
- **UI компоненты**:
  - Базовые элементы (кнопки, инпуты) храните в `shared/ui/`
  - Компоненты должны быть максимально переиспользуемыми
- **Типы**:
  - Глобальные типы/интерфейсы храните в `shared/types/`
  - Именуйте файлы по доменной области (например: `auth.types.ts`)

### 3. Работа с состоянием
- Глобальное состояние - через Zustand в `app/stores/`
- Локальное состояние - через React hooks
- Для сложных фич можно создавать отдельные store-файлы внутри фичи
- Именуйте файлы по доменной области (например: `auth.store.ts`)

### 4. Стилизация
- В первую очередь используйте Tailwind утилиты
- Для сложных стилей - DaisyUI компоненты
- Кастомные стили добавляйте через `@apply` в CSS-файлах
- Глобальные стили - только в `shared/styles/`

## 📜 Лицензия

MIT © Artemiy Averyanov