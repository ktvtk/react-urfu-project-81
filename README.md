# Генератор форм на TypeScript

[![hexlet-check](https://github.com/ktvtk/react-urfu-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ktvtk/react-urfu-project-81/actions)

Библиотека, с помощью которой удобно создавать формы в шаблонах сайтов. Она позволяет генерировать HTML-разметку формы и её полей, автоматически подставляя значения из переданного шаблона.

Учебный проект Хекслета: [https://ru.hexlet.io/](https://ru.hexlet.io/)

## Стек

- TypeScript
- JavaScript
- Node.js
- Vitest

## Установка

Клонируйте репозиторий и перейдите в директорию проекта:

```bash
git clone https://github.com/ktvtk/react-urfu-project-81.git
cd react-urfu-project-81
```

Установите зависимости:

```bash
npm install
```

## Использование

Библиотека позволяет создавать HTML-формы с помощью метода `formFor`.

Пример создания формы с текстовым полем и многострочным полем `textarea`:

```typescript
import HexletCode from "./src/index";

const template = {
  name: "rob",
  job: "hexlet",
  gender: "m",
};

const form = HexletCode.formFor(template, { method: "post" }, (f) => {
  f.input("name");
  f.input("job", { as: "textarea" });
});

console.log(form);
```

Результат:

```html
<form action="#" method="post"><input name="name" type="text" value="rob"><textarea cols="20" rows="40" name="job">hexlet</textarea></form>
```

### Дополнительные возможности

**Указание URL формы**

```typescript
HexletCode.formFor(template, { url: "/users" }, (f) => {
  f.input("name");
});
```

**Добавление HTML-атрибутов**

```typescript
HexletCode.formFor(template, {}, (f) => {
  f.input("name", { class: "user-input" });
});
```

**Настройка `textarea`**

```typescript
HexletCode.formFor(template, {}, (f) => {
  f.input("job", { as: "textarea", rows: 50, cols: 50 });
});
```

Если поле отсутствует в переданном объекте, библиотека выбрасывает ошибку с названием отсутствующего поля.

## Проверка

Запуск тестов:

```bash
npm test
```

Проверка типов TypeScript:

```bash
npm run typecheck
```

Проверка форматирования и линтинга:

```bash
make lint
```

---

<details>
<summary>Автоматические тесты Хекслета</summary>

Тесты запускаются на каждый коммит. За запуск отвечает файл `.github/workflows/hexlet-check.yml` — не удаляйте и не переименовывайте ни его, ни репозиторий.

</details>

## О Хекслете

[Хекслет](https://ru.hexlet.io/) — школа программирования: авторские программы обучения с практикой, поддержкой наставников и реальными проектами, которые остаются в резюме. Этот репозиторий — один из таких проектов.
