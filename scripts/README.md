# website/scripts

Допоміжні скрипти для статичного сайту HeyCoach (`heycoachproduction.de`,
GitHub Pages, branch `main`, Cloudflare).

## gen-sitemap.sh — авто-генерація sitemap.xml

Сканує `website/*.html`, відкидає чернетки і генерує `website/sitemap.xml`
з `<loc>https://heycoachproduction.de/<file></loc>` + `<lastmod>` = поточна дата.

### Запуск

```bash
# з кореня website/
bash scripts/gen-sitemap.sh

# або з кореня проєкту
bash website/scripts/gen-sitemap.sh
```

Скрипт сам знаходить теку `website/` відносно себе, тож CWD не важливий.
У stderr друкує кількість публічних URL; у stdout — рядок `PUBLIC_URLS=<N>`
(зручно для CI/hook'ів).

### Налаштування виключень

Список чернеток — масив `EXCLUDE_PATTERNS` зверху скрипта (basename-глоби,
case-insensitive). Додавай/прибирай рядки за потреби. `index.html` завжди
мапиться на канонічний `/` (не дублюється).

### Перевірка результату

```bash
grep -c '<loc>' website/sitemap.xml   # має дорівнювати кількості публічних URL
```

---

## Як повісити hook'ом (автозапуск після правок HTML)

> Це лише ІНСТРУКЦІЯ. `.claude/settings.json` редагувати вручну за бажанням —
> цей README його НЕ змінює.

Щоб sitemap регенерувався автоматично щоразу, коли Claude редагує `website/*.html`,
додай у `.claude/settings.json` hook типу **PostToolUse** на інструменти `Edit`/`Write`:

```jsonc
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            // запускати тільки якщо правка торкнулася website/*.html
            "command": "f=\"$CLAUDE_TOOL_FILE_PATH\"; case \"$f\" in *website/*.html) bash \"/Users/allweart/Desktop/Hey Coach/website/scripts/gen-sitemap.sh\" >/dev/null ;; esac"
          }
        ]
      }
    ]
  }
}
```

Примітки:
- `matcher` фільтрує за назвою інструмента; перевірку шляху файла робимо в самій
  команді (`case`), бо PostToolUse спрацьовує на будь-яку `Edit`/`Write`.
- Назва env-змінної зі шляхом файла залежить від версії харнесу
  (`$CLAUDE_TOOL_FILE_PATH` / `$TOOL_FILE_PATH` / payload у stdin) — звір з
  `update-config` скілом або документацією перед використанням.
- Альтернатива без hook'а: git `pre-commit` hook, що запускає скрипт і `git add website/sitemap.xml`.

## Перед деплоєм

Запусти субагента **site-QA** (`.claude/agents/site-QA.md`) — він read-only
перевіряє биті лінки, зображення, schema.org, звертання "Sie" і базовий DSGVO.
