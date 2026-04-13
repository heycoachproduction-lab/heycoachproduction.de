# AI Image Prompting Guide — Hey Coach Production GmbH
> Повний довідник для створення професійних зображень сайту через AI генерацію.
> Дата: April 2026 | На основі аналізу 20+ джерел

---

## 1. ГОЛОВНА ФОРМУЛА (Master Formula)

```
[IMAGE TYPE] of [SUBJECT] in [ENVIRONMENT/SETTING], [COMPOSITION/FRAMING], [LIGHTING], [CAMERA/LENS], [STYLE/MOOD], [QUALITY MODIFIERS] --[PARAMETERS]
```

### Розгорнута структура (8 компонентів):

```
1. IMAGE TYPE        → photo, portrait, action shot, editorial photograph
2. SUBJECT           → хто/що (деталі: вік, одяг, емоція, поза, дія)
3. ENVIRONMENT       → де (конкретне місце, час доби, погода, деталі)
4. COMPOSITION       → як скадровано (план, кут, правило третин)
5. LIGHTING          → тип світла (джерело, якість, напрямок)
6. CAMERA/LENS       → технічні деталі (об'єктив, діафрагма, ISO)
7. STYLE/MOOD        → атмосфера, кольорова гама, настрій
8. QUALITY/NEGATIVES → якість + що виключити
```

---

## 2. КЛЮЧОВІ СЛОВА ПО КАТЕГОРІЯХ

### 2.1 Image Type (Тип зображення)
```
professional photograph       editorial photograph
commercial photography        candid shot
DSLR photo                    shot on film
photorealistic image          cinematic still
product photography           documentary photograph
studio portrait               action shot
```

### 2.2 Subject Description (Опис суб'єкта)
**Правило:** Конкретика замість узагальнень.

| Погано | Добре |
|--------|-------|
| a fighter | a 28-year-old athletic male martial artist in a focused fighting stance |
| a trainer | a confident male Muay Thai trainer wearing black fight shorts and hand wraps |
| people training | three students in white t-shirts practicing roundhouse kicks in formation |

**Деталі для людей:** вік, статура, одяг, емоція, поза, дія, аксесуари.

### 2.3 Environment / Setting (Середовище)
```
modern martial arts gym               professional training facility
spacious dojo with wooden floors      industrial-style gym with exposed brick
well-lit training hall                 boxing ring with red ropes
sunlit outdoor training area          minimalist studio with dark background
gym interior with punching bags       professional fitness studio
```

### 2.4 Composition / Framing (Композиція)
```
ПЛАНИ:
extreme close-up                macro shot
close-up portrait               head-and-shoulders portrait
medium shot (waist up)          full body shot
wide establishing shot          environmental portrait

КУТИ:
eye level                       low angle (hero shot — робить потужним)
high angle / bird's eye         Dutch angle (напруга)
over-the-shoulder               three-quarter view

ПРАВИЛА:
rule of thirds                  centered composition
symmetrical framing             leading lines
negative space                  foreground interest
shallow depth of field          deep focus
```

### 2.5 Lighting (Освітлення) — НАЙВАЖЛИВІШИЙ МНОЖНИК ЯКОСТІ

```
ПРИРОДНЕ СВІТЛО:
golden hour warm light          soft natural window light
blue hour cool ambient light    overcast diffused daylight
harsh midday directional sun    dawn/dusk atmospheric light

СТУДІЙНЕ:
studio three-point lighting     softbox key light 45° camera left
rim lighting / backlight        dramatic side lighting
high-key lighting (яскравий)    low-key lighting (темний, драматичний)
Rembrandt lighting              butterfly lighting

СПЕЦІАЛЬНЕ:
cinematic rim lighting          volumetric light / god rays
neon accent lighting            warm tungsten glow
chiaroscuro (різкі тіні)       soft diffused bounced light
spot light on subject           split lighting
```

### 2.6 Camera / Lens (Камера та об'єктив)

```
ПОРТРЕТИ:
shot on 85mm lens, f/1.4       Canon 85mm f/1.2, shallow depth of field
beautiful bokeh background      shot on medium format camera

ЕКШН/СПОРТ:
shot on 70-200mm f/2.8          fast telephoto lens
high-speed capture              frozen motion, fast shutter speed
1/1000s shutter speed           panning motion blur

ЗАГАЛЬНІ/ШИРОКОКУТНІ:
shot on 35mm lens, f/2.8        24mm wide angle
shot on 50mm prime lens         Fujifilm X-T5 aesthetic

КІНЕМАТОГРАФІЧНІ:
anamorphic lens                 CineStill 800T film stock
film grain                      Kodak Portra 400 color science
```

### 2.7 Style / Mood (Стиль та настрій)

```
ПРОФЕСІЙНИЙ:
clean and modern                sleek and professional
editorial quality               commercial photography style
magazine-quality                award-winning photography
high-end brand aesthetic         minimalist and elegant

СПОРТИВНИЙ/ЕНЕРГІЙНИЙ:
intense and powerful             dynamic and energetic
gritty and raw                   fierce determination
focused and disciplined          athletic and strong
powerful movement                explosive action

КІНЕМАТОГРАФІЧНИЙ:
cinematic color grading          moody atmospheric
dramatic contrast                film noir aesthetic
warm color palette               desaturated tones
teal and orange grading          muted earth tones
```

### 2.8 Quality Modifiers (Модифікатори якості)

```
ТОПОВІ (працюють скрізь):
8K resolution                    ultra-detailed
sharp focus                      high dynamic range
professional color grading       shot on high-end camera

ТЕКСТУРНІ (роблять реалістичним):
visible skin texture and pores   sweat droplets on skin
fabric texture visible           scuff marks on equipment
dust particles in light beams    moisture on surfaces

УНИКАТИ (не працюють / надто загальні):
masterpiece                      best quality (надто загальне)
beautiful                        perfect (AI ігнорує)
```

---

## 3. NEGATIVE PROMPTS (Що виключати)

### 3.1 Універсальний негативний промпт (базова лінія)
```
blurry, out of focus, deformed, mutated hands, extra limbs, extra fingers,
poorly drawn face, text, watermark, signature, cartoon, illustration,
low resolution, ugly, flat lighting, overexposed, oversaturated,
plastic skin, waxy appearance, 3d render
```

### 3.2 Для реалістичних фото людей
```
deformed anatomy, disproportionate body, extra limbs, missing limbs,
fused fingers, too many fingers, long neck, cross-eyed, poorly drawn hands,
poorly drawn feet, disfigured face, mutation, ugly, blurry, bad anatomy,
bad proportions, gross proportions, malformed limbs, missing arms,
missing fingers, extra arms, extra legs, duplicate features
```

### 3.3 Для спортивних/фітнес фото
```
unrealistic muscles, cartoon proportions, anime style, painted look,
stiff pose, floating objects, impossible anatomy, bad lighting,
cluttered background, logos, text overlay, stock photo watermark
```

### 3.4 Midjourney синтаксис
```
--no text, watermark, blurry, cartoon, illustration, deformed hands
```

---

## 4. ПАРАМЕТРИ ПО ПЛАТФОРМАХ

### 4.1 Midjourney

| Параметр | Що робить | Рекомендація |
|----------|-----------|--------------|
| `--ar 16:9` | Aspect ratio | Для банерів сайту |
| `--ar 4:5` | Aspect ratio | Для портретів |
| `--ar 1:1` | Aspect ratio | Для карток курсів |
| `--ar 3:4` | Aspect ratio | Для мобільних |
| `--ar 9:16` | Aspect ratio | Для Stories/Reels |
| `--s 50-150` | Stylize | Для фотореалізму |
| `--s 300-500` | Stylize | Для художності |
| `--style raw` | Стиль | Максимальний фотореалізм |
| `--q 2` | Якість | Максимальна деталізація |
| `--no` | Виключити | Негативні промпти |
| `--seed 1234` | Зерно | Для консистентності |
| `--v 7` | Версія | Остання модель |
| `--cref [URL]` | Character ref | Консистентність персонажа |
| `--sref [URL]` | Style ref | Консистентність стилю |

### 4.2 DALL-E 3 / ChatGPT
- Не підтримує негативні промпти — описуй ТІЛЬКИ що хочеш бачити
- Найкраще розуміє природну мову (повні речення)
- Для фотореалізму: починай з "A professional photograph..." або "A DSLR photo..."
- Розміри: 1024x1024 (квадрат), 1792x1024 (ландшафт), 1024x1792 (портрет)

### 4.3 Stable Diffusion
- Підтримує weighted keywords: `(keyword:1.2)` для підсилення
- Окреме поле для негативних промптів
- CFG Scale: 7-12 для фотореалізму
- Steps: 25-50 для оптимальної якості

---

## 5. РОЗМІРИ ЗОБРАЖЕНЬ ДЛЯ САЙТУ

| Призначення | Розмір (px) | Aspect Ratio | AI параметр |
|-------------|-------------|--------------|-------------|
| Hero banner (desktop) | 1920x1080 | 16:9 | `--ar 16:9` |
| Hero banner (retina) | 2560x1440 | 16:9 | `--ar 16:9` |
| Course card image | 800x800 | 1:1 | `--ar 1:1` |
| Trainer portrait | 800x1000 | 4:5 | `--ar 4:5` |
| Blog/feature image | 1200x630 | ~1.9:1 | `--ar 16:9` |
| Instagram post | 1080x1350 | 4:5 | `--ar 4:5` |
| Instagram Story/Reel | 1080x1920 | 9:16 | `--ar 9:16` |
| YouTube thumbnail | 1280x720 | 16:9 | `--ar 16:9` |
| OG/Share image | 1200x630 | ~1.9:1 | `--ar 16:9` |
| Mobile hero | 1080x1920 | 9:16 | `--ar 9:16` |

**Важливо:** Тримати розмір файлу до 200KB для оптимальної швидкості сайту. Стискати через WebP формат.

---

## 6. ГОТОВІ ПРОМПТИ ДЛЯ HEY COACH

### 6.1 Hero Banner — Головна сторінка
```
Professional editorial photograph of a dynamic Muay Thai training session
in a modern, well-equipped martial arts gym with atmospheric lighting,
wide establishing shot, dramatic rim lighting from behind with warm
tungsten fill light, shot on 24mm wide-angle lens f/2.8, cinematic
color grading with teal and warm orange tones, 8K ultra-detailed,
visible sweat and movement energy, intense focused atmosphere,
professional sports photography style --ar 16:9 --s 100 --style raw
```

### 6.2 Course Cover — 7-Tage-FitStart (€9 Mini-Course)
```
Professional fitness photography of an athletic male kickboxing trainer
demonstrating a perfect roundhouse kick technique in a clean modern gym,
dynamic action pose captured mid-motion, studio three-point lighting
with dramatic side light, shot on 85mm f/2.0 lens with shallow depth
of field, energetic and motivational mood, clean commercial photography
style, sharp focus on subject with soft bokeh background, professional
sports editorial quality --ar 1:1 --s 150 --style raw
```

### 6.3 Course Cover — Kickboxen (€99 Full Course)
```
Cinematic action photograph of an intense kickboxing training class with
multiple students in a professional martial arts academy, medium wide shot
showing the energy of group training, dramatic overhead gym lighting with
rim light highlighting the athletes, shot on 35mm lens f/2.8, high-speed
frozen action, powerful determined expressions, sweat visible, modern
athletic wear, professional commercial photography, dynamic composition
with leading lines --ar 16:9 --s 100 --style raw
```

### 6.4 Course Cover — Muay Thai (€129 Full Course)
```
Professional sports photograph of an elite Muay Thai fighter executing a
powerful knee strike on a heavy bag in a traditional yet modern training
facility, close medium shot from slightly low angle creating heroic
perspective, dramatic chiaroscuro lighting with single strong side light,
shot on 70-200mm f/2.8 telephoto lens, frozen motion with visible impact,
intense focused expression, authentic Thai boxing atmosphere, wrapped hands
and shin guards, 8K ultra-detailed with visible muscle definition and
sweat, editorial sports magazine quality --ar 4:5 --s 120 --style raw
```

### 6.5 Trainer Portrait — Professional Headshot
```
Professional editorial portrait of a confident athletic martial arts
trainer, three-quarter view, head and shoulders framing, soft studio
lighting with key light from camera left and subtle rim light, shot on
Canon 85mm f/1.4 lens, shallow depth of field with creamy bokeh,
neutral dark background, clean and modern aesthetic, warm but professional
color palette, sharp eye focus, natural confident expression, magazine
cover quality --ar 4:5 --s 100 --style raw
```

### 6.6 Action Shot — Training Session
```
Dynamic professional photograph of Muay Thai pad work training, trainer
holding Thai pads while student delivers a powerful elbow strike, captured
at peak action moment, low angle shot emphasizing power and technique,
dramatic gym lighting with warm overhead lights and atmospheric haze,
shot on 35mm f/2.0, slight motion blur on strike showing speed while
faces remain sharp, authentic training atmosphere, professional sports
photojournalism style, raw and intense mood --ar 16:9 --s 80 --style raw
```

### 6.7 Marketing Banner — Promotion
```
Clean commercial photograph of a welcoming modern martial arts gym
interior with warm inviting lighting, a few students visible in the
background training with soft focus, foreground has clean negative space
on the left for text overlay, shot on 24mm f/4.0 with deep focus,
bright and inviting atmosphere, professional and approachable mood,
warm color temperature, high-key lighting, modern fitness brand
aesthetic --ar 16:9 --s 150
```

### 6.8 Team Photo — Group Shot
```
Professional group photograph of a martial arts coaching team of 4-6
people in matching athletic wear, standing confidently in their modern
gym, environmental portrait, even professional lighting with soft fill,
shot on 35mm f/4.0 lens for full sharpness, friendly but professional
expressions, clean modern gym background with subtle brand colors,
corporate team photo style adapted for sports, warm natural color
grading --ar 16:9 --s 100 --style raw
```

### 6.9 Instagram Content — Technique Tip
```
Professional fitness photography of a detailed Muay Thai technique
demonstration, close-up of proper hand wrapping technique, soft
directional lighting highlighting the texture of hand wraps, shot on
100mm macro lens f/2.8, shallow depth of field, clean dark background,
instructional yet artistic composition, warm tones, sharp focus on
hands and wraps, 4K quality --ar 4:5 --s 120
```

### 6.10 Physiotherapy Course Cover
```
Professional healthcare photography of a sports physiotherapist performing
mobility assessment on an athletic patient in a bright modern treatment
room, medium shot, clean clinical yet warm lighting from large windows,
shot on 50mm f/2.0, professional medical setting with modern equipment
visible, calm and trustworthy atmosphere, soft neutral color palette
with touches of teal, clean commercial healthcare photography style
--ar 1:1 --s 100 --style raw
```

---

## 7. ФОРМУЛА КОНСИСТЕНТНОСТІ (Brand Consistency)

### 7.1 Hey Coach Style Snippet (копіювати в КОЖЕН промпт)
```
STYLE SNIPPET:
"professional sports photography, clean modern aesthetic, warm tonal
palette with deep blacks, subtle teal accents, shot on high-end camera,
sharp focus, athletic and empowering mood, commercial fitness brand quality"
```

### 7.2 Lighting Snippet
```
LIGHTING SNIPPET:
"dramatic rim lighting with warm fill, professional gym lighting,
atmospheric but not dark, well-balanced exposure"
```

### 7.3 Camera Snippet
```
CAMERA SNIPPET:
"shot on professional DSLR, prime lens, shallow to medium depth of
field, sharp focus on subject"
```

### 7.4 Як підтримувати консистентність

1. **Зберегти seed** — коли отримаєш хороший результат, запам'ятай `--seed XXXX`
2. **Використовувати --sref** — завантаж еталонне зображення для стилю
3. **Використовувати --cref** — для консистентності обличчя/персонажа
4. **Один шаблон** — кожна серія зображень починається з одного базового промпта
5. **Фіксувати колір** — завжди вказуй одну кольорову палітру
6. **Фіксувати освітлення** — один тип освітлення на всю серію
7. **Документувати** — зберігай промпти, seeds, параметри у файлі

---

## 8. ПОШИРЕНІ ПОМИЛКИ (Що НЕ робити)

### 8.1 Промпт-помилки
| Помилка | Чому погано | Як правильно |
|---------|------------|--------------|
| "Don't include text" | AI не розуміє заперечення | Використовуй `--no text` |
| "beautiful perfect image" | Надто загально, AI ігнорує | Конкретні деталі якості |
| Занадто довгий промпт (100+ слів) | AI втрачає фокус | 30-60 слів оптимально |
| Суперечливі стилі ("realistic anime") | Конфлікт → випадковий результат | Один чіткий стиль |
| Починати з деталей, не суб'єкта | AI пріоритизує перші слова | Суб'єкт завжди першим |
| "Avoid blurry" в основному промпті | AI може додати blur | Окреме поле negative |
| Занадто багато --no елементів | Конфузить AI | 3-5 максимум |

### 8.2 Контент-помилки для Hey Coach
| Помилка | Ризик |
|---------|-------|
| Генерувати обличчя реальних тренерів | Deepfake — юридичний ризик |
| Медичні зображення з обіцянками | Порушення §20 SGB V |
| Зображення дітей у бійках | Етичний та юридичний ризик |
| Fake травми або кров | Відлякує клієнтів |
| Нереалістичне тіло (занадто мускулисте) | Виглядає fake, втрата довіри |
| Текст на зображенні (AI генерований) | Завжди з помилками — додавай текст окремо |

---

## 9. WORKFLOW: ВІД ІДЕЇ ДО ГОТОВОГО ЗОБРАЖЕННЯ

```
КРОК 1: Визначити призначення
   → Де буде використано? (hero, card, portrait, social)
   → Який розмір потрібен? (--ar параметр)

КРОК 2: Базовий промпт (Pass 1)
   → Суб'єкт + Середовище (тестуємо концепцію)
   → Приклад: "Muay Thai fighter training in modern gym"

КРОК 3: Додати композицію та позу (Pass 2)
   → Уточнити план, кут, дію
   → Приклад: додати "medium shot from low angle, executing roundhouse kick"

КРОК 4: Додати освітлення та камеру (Pass 3)
   → Конкретне освітлення + об'єктив
   → Приклад: додати "dramatic side lighting, shot on 85mm f/2.0"

КРОК 5: Полірування (Pass 4)
   → Style snippet + quality + negative prompts
   → Приклад: додати "professional sports photography, 8K, --no text watermark"

КРОК 6: Генерація та відбір
   → Згенерувати 4+ варіанти
   → Вибрати найкращий, запам'ятати seed

КРОК 7: Пост-обробка
   → Upscale до потрібного розміру
   → Стиснути (WebP, < 200KB для web)
   → Додати текст окремо в Canva/Figma якщо потрібен
```

---

## 10. ШВИДКА ДОВІДКА — COPY-PASTE ШАБЛОНИ

### Template A: Hero/Banner (16:9)
```
Professional [editorial/cinematic] photograph of [SUBJECT + ACTION]
in [SETTING], [SHOT TYPE] from [ANGLE], [LIGHTING TYPE],
shot on [LENS] f/[APERTURE], [MOOD/STYLE], [QUALITY],
professional sports photography --ar 16:9 --s [80-150] --style raw
--no text, watermark, cartoon, illustration
```

### Template B: Portrait (4:5)
```
Professional portrait of [PERSON DESCRIPTION],
[three-quarter/head-and-shoulders] framing, [LIGHTING],
shot on 85mm f/1.4 lens, shallow depth of field,
[BACKGROUND], [MOOD], magazine-quality editorial portrait
--ar 4:5 --s 100 --style raw
--no text, watermark, deformed
```

### Template C: Course Card (1:1)
```
Professional [fitness/sports] photography of [SUBJECT + ACTION]
in [SETTING], [COMPOSITION], [LIGHTING],
shot on [LENS] f/[APERTURE], [STYLE], commercial photography quality,
clean and impactful --ar 1:1 --s 120 --style raw
--no text, watermark, blurry
```

### Template D: Action Shot (16:9)
```
Dynamic professional photograph of [ACTION DESCRIPTION],
captured at peak moment, [ANGLE], [LIGHTING],
shot on [LENS] f/2.8, [frozen motion/motion blur on limbs],
[MOOD], high-speed sports photography, 8K ultra-detailed
--ar 16:9 --s 80 --style raw
--no text, watermark, blurry, deformed
```

### Template E: Instagram (4:5 or 9:16)
```
Professional [fitness/sports] content photograph of [SUBJECT],
[COMPOSITION], [LIGHTING], shot on [LENS],
[STYLE], clean modern fitness aesthetic, social media ready
--ar 4:5 --s 120 --style raw
--no text, watermark
```

---

## 11. МАГІЧНІ СЛОВА (Power Words по категоріях)

### Для фотореалізму:
```
photorealistic, hyperrealistic, shot on DSLR, RAW photo,
untouched photo, candid moment, documentary style,
natural skin texture, authentic, unposed
```

### Для драматичності:
```
cinematic, dramatic, moody, atmospheric, epic,
intense, powerful, striking, bold, fierce
```

### Для професіоналізму:
```
editorial, commercial, magazine-quality, award-winning,
high-end, premium, polished, refined, sophisticated
```

### Для спорту/фітнесу:
```
athletic, dynamic, explosive, powerful, disciplined,
intense training, peak performance, raw energy,
competition-ready, warrior spirit
```

### Для довіри/бренду:
```
welcoming, approachable, professional, confident,
trustworthy, authentic, community, empowering,
supportive, expert
```

---

*Цей гід створений на основі аналізу офіційних документацій Midjourney, DALL-E, Stable Diffusion, та 20+ професійних ресурсів по AI image generation (April 2026).*
