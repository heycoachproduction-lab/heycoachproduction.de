# Nano Banana 2 — Гайд по промптам для Hey Coach
> Оптимізовано для генерації фото сайту. April 2026.

---

## 1. ЩО ТАКЕ NANO BANANA 2

- **Розробник:** Google DeepMind
- **Технічна назва:** `gemini-3.1-flash-image-preview`
- **Суть:** Multimodal LLM з вбудованою генерацією зображень (НЕ diffusion model)
- **Головна відмінність:** Розуміє природну мову як режисерський бріф. Не потрібні теги/ключові слова як в Stable Diffusion
- **Доступ:** Gemini app, Google AI Studio, API, fal.ai, ComfyUI

---

## 2. КЛЮЧОВІ ПРАВИЛА ПРОМПТІНГУ

| # | Правило | Деталі |
|---|---------|--------|
| 1 | **Макс. 5 прикметників** | Більше — розмиває фокус моделі |
| 2 | **Освітлення — найважливіше** | Завжди: напрямок + якість + температура |
| 3 | **Вказувати реальну камеру** | Sony A7III, Canon 5D Mark IV, Hasselblad X2D |
| 4 | **Писати як режисерський бріф** | НЕ як пошуковий запит, а як інструкція оператору |
| 5 | **ALL CAPS для наголосу** | `MUST`, `NO` — покращує дотримання |
| 6 | **НЕ використовувати buzzwords** | "hyperrealistic", "trending on artstation" — модель їх штрафує |
| 7 | **Hex-коди кольорів працюють** | `"#B87C1A gold accent"` |
| 8 | **Контекст призначення** | "for a fitness magazine cover" покращує композицію |
| 9 | **Текст в лапках** | `"7 TAGE FITSTART"` — макс. 3-5 слів |
| 10 | **Редагувати, не перегенеровувати** | Якщо на 80% ок — скажи що змінити |

---

## 3. СТРУКТУРА ПРОМПТУ

```
[SUBJECT + DETAILS] + [ACTION] in [SETTING + ENVIRONMENT],
[COMPOSITION + CAMERA], [LIGHTING + MOOD], [STYLE + QUALITY],
[HARD CONSTRAINTS / NEGATIVE INSTRUCTIONS]
```

### Формула:
```
1. SUBJECT        → хто/що (вік, статура, одяг, емоція, поза, дія)
2. ACTION         → що робить
3. SETTING        → де (конкретне місце, деталі)
4. COMPOSITION    → план, кут, кадрування
5. CAMERA         → реальна камера + об'єктив + діафрагма
6. LIGHTING       → напрямок, якість, температура
7. STYLE          → настрій, кольори, тип фотографії
8. CONSTRAINTS    → що НЕ включати (в тексті, не окреме поле)
```

---

## 4. ASPECT RATIOS

| Призначення | Ratio | Для сайту |
|-------------|-------|-----------|
| Hero banner | `16:9` | Desktop hero |
| Course card | `1:1` | Картка курсу |
| Trainer portrait | `4:5` | Профіль тренера |
| Mobile hero | `9:16` | Мобільна версія |
| Blog image | `3:2` | Стаття/блог |
| Ultra-wide | `21:9` | Панорамний банер |

---

## 5. НЕГАТИВНІ ІНСТРУКЦІЇ

**Замість negative prompts** (окремого поля немає) — додавати в кінець:

### Базовий блок:
```
No text, no watermarks, no logos. No artificial lens flare or HDR artifacts.
Strictly photorealistic — no cartoon, illustration, or painted look.
```

### Для фітнес/спорт:
```
No exaggerated muscles or unrealistic body proportions.
No stock photo aesthetic. No visible tattoos unless specified.
No generic corporate feel.
```

---

## 6. ФОТОРЕАЛІСТИЧНІ ПРИЙОМИ

- **Якорити камерою:** "Shot on Sony A7III with 85mm f/1.4"
- **Глибина різкості:** "natural uniform depth of field"
- **Фізичність:** відображення, текстура шкіри, поту, тканини
- **Контекст публікації:** "editorial fitness magazine" покращує якість
- **Плівкові стоки:** "Kodak Portra 400" для теплих тонів
- **Hex кольори бренду:** `#B87C1A` (gold), `#06081A` (dark), `#1A2248` (elevated)

---

## 7. REFERENCE IMAGES (Ключова фіча)

- До **5 людей** з consistency
- До **14 об'єктів** як reference
- Призначай ролі: "Image A = identity/pose; Image B = style; Image C = background"
- Можна завантажити фото Марлона → consistent контент

---

## 8. HEY COACH STYLE SNIPPET (копіювати в кожен промпт)

```
Professional sports photography for a premium German martial arts brand.
Clean modern aesthetic, warm tonal palette with deep blacks and subtle
burnished gold (#B87C1A) accents. Shot on high-end camera. Sharp focus.
Athletic and empowering mood. Commercial fitness brand quality.
No text, no watermarks, no logos.
```

### Lighting Snippet:
```
Dramatic rim lighting with warm fill. Professional gym lighting,
atmospheric but well-exposed. Warm key light from upper-left,
subtle cool fill from right.
```

### Camera Snippet:
```
Shot on Sony A7III, prime lens, shallow to medium depth of field,
sharp focus on subject with natural bokeh.
```

---

## 9. ГОТОВІ ПРОМПТИ ДЛЯ САЙТУ

### 9.1 Hero Banner (16:9)
```
Professional editorial photograph of a dynamic Muay Thai training session
in a modern well-equipped martial arts gym. Wide establishing shot.
Dramatic warm rim lighting from behind with atmospheric haze. Shot on
Sony A7III, 24mm f/2.8 wide-angle. Cinematic color grading with warm
amber and cool shadow tones. Visible sweat and movement energy. Intense
focused atmosphere. Professional sports photography for a premium German
fitness brand. 16:9. No text, no watermarks, no logos.
```

### 9.2 Course Cover — 7-Tage-FitStart (1:1)
```
Professional fitness photograph of an athletic male kickboxing trainer
demonstrating a perfect roundhouse kick in a clean modern gym. Dynamic
action pose captured mid-motion. Three-point lighting with dramatic side
light from the left. Shot on Canon 5D Mark IV, 85mm f/2.0, shallow depth
of field. Energetic and motivational mood. Clean commercial photography.
Sharp focus on subject with soft bokeh background. 1:1 square format.
No text, no watermarks.
```

### 9.3 Course Cover — Kickboxen €99 (16:9)
```
Cinematic action photograph of an intense kickboxing training class with
multiple students in a professional martial arts academy. Medium wide shot
showing group training energy. Dramatic overhead gym lighting with rim
light highlighting athletes. Shot on Sony A7III, 35mm f/2.8. Frozen
high-speed action. Powerful determined expressions. Sweat visible. Modern
athletic wear. Professional commercial photography with leading lines
composition. 16:9. No text, no watermarks, no logos.
```

### 9.4 Course Cover — Muay Thai €129 (4:5)
```
Professional sports photograph of an elite Muay Thai fighter executing a
powerful knee strike on a heavy bag in a modern training facility. Close
medium shot from slightly low angle creating heroic perspective. Dramatic
chiaroscuro lighting with single strong side light from the left. Shot on
Sony A7III, 70-200mm f/2.8 telephoto. Frozen motion with visible impact.
Intense focused expression. Wrapped hands and shin guards. Visible muscle
definition and sweat. Editorial sports magazine quality. 4:5. No text,
no watermarks.
```

### 9.5 Trainer Portrait (4:5)
```
Professional editorial portrait of a confident athletic martial arts
trainer. Three-quarter view, head and shoulders framing. Soft studio
lighting: key light from camera left, subtle rim light from behind.
Shot on Sony A7III, 85mm f/1.4, shallow depth of field with creamy bokeh.
Neutral dark background. Clean modern aesthetic. Warm but professional
color palette. Sharp eye focus. Natural confident expression. Magazine
cover quality. 4:5. No text, no watermarks.
```

### 9.6 Action Shot — Training (16:9)
```
Dynamic professional photograph of Muay Thai pad work training. Trainer
holding Thai pads while student delivers a powerful elbow strike. Captured
at peak action moment. Low angle shot emphasizing power and technique.
Dramatic gym lighting with warm overhead lights and atmospheric haze.
Shot on Sony A7III, 35mm f/2.0. Slight motion blur on strike, faces
sharp. Authentic training atmosphere. Professional sports photojournalism.
Raw and intense mood. 16:9. No text, no watermarks.
```

### 9.7 Marketing Banner — з місцем для тексту (16:9)
```
Clean commercial photograph of a welcoming modern martial arts gym interior
with warm inviting lighting. A few students training in soft focus
background. Foreground has clean negative space on the LEFT side for text
overlay. Shot on Canon 5D Mark IV, 24mm f/4.0, deep focus. Bright and
inviting atmosphere. Professional and approachable. Warm color temperature.
Modern fitness brand aesthetic. 16:9. No text, no watermarks, no logos.
```

### 9.8 Community / Group Training (16:9)
```
Professional photograph of a diverse group of martial arts students high-
fiving after an intense training session. Environmental group shot in a
modern gym. Natural warm overhead lighting with golden hour feel. Shot on
Sony A7III, 35mm f/2.8. Authentic candid moment. Smiling, sweaty, proud
expressions. Team spirit and community energy. Professional fitness brand
photography. 16:9. No text, no watermarks.
```

### 9.9 Physiotherapy Course (1:1)
```
Professional healthcare photograph of a sports physiotherapist performing
mobility assessment on an athletic patient in a bright modern treatment
room. Medium shot. Clean clinical yet warm lighting from large windows.
Shot on Canon 5D Mark IV, 50mm f/2.0. Modern equipment visible. Calm
trustworthy atmosphere. Soft neutral color palette with touches of teal.
Clean commercial healthcare photography. 1:1 square. No text, no watermarks.
```

### 9.10 Zertifikat / Trust Element (1:1)
```
Clean product photograph of an elegant martial arts certification document
on a dark wooden desk. Official seal and gold embossing visible. Soft
directional window light from the left creating subtle shadows. Shot on
Canon 5D Mark IV, 50mm f/2.8. Shallow depth of field. Premium and
trustworthy aesthetic. Warm tones. Professional still life photography.
1:1 square. No text content on certificate — leave blank for overlay.
```

---

## 10. WORKFLOW

```
1. Визначити → де картинка (hero, card, portrait, banner)
2. Вибрати aspect ratio → 16:9, 1:1, 4:5, 9:16
3. Взяти готовий промпт або зібрати з формули
4. Додати Hey Coach Style Snippet
5. Генерувати в Gemini / AI Studio
6. Якщо 80% ок → редагувати ("keep composition, change lighting to...")
7. Вибрати фінальний варіант
8. Зберегти в website/images/ як WebP < 200KB
```

---

## 11. ВІДМІННОСТІ ВІД ІНШИХ МОДЕЛЕЙ

| | Nano Banana 2 | Midjourney | DALL-E 3 | Stable Diffusion |
|---|---|---|---|---|
| Промпти | Природна мова | Природна + `--параметри` | Природна мова | Теги |
| Negative | В тексті промпту | `--no` | Окреме поле | Окреме поле |
| CFG/Steps/Sampler | **Немає** | Немає | Немає | Є |
| Текст в зображенні | Відмінний | Слабкий | Добрий | Поганий |
| Редагування | Conversation-based | Vary Region | Inpainting | img2img |
| Reference images | До 5 людей + 14 об'єктів | `--cref` / `--sref` | Ні | ControlNet |

---

*Цей гід створений на основі офіційної документації Google, DEV.to, CivitAI, Max Woolf та інших джерел. April 2026.*
