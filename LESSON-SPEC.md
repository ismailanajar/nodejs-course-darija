# LESSON-SPEC.md — contract for every lesson & reference doc in this workspace

Canonical example: `lessons/0001-fullstack-architecture.html` (read it before writing anything).
Shared parts: `assets/lesson.css` (incl. RTL overrides), `assets/quiz.js`.

## Lesson file contract

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>الدرس {N} — {Arabic title}</title>
<link rel="stylesheet" href="../assets/lesson.css">
</head>
<body>
<main class="page">
  <header class="masthead">
    <p class="kicker">الدرس {N} · Course sections {XX}</p>
    <h1>{Arabic title, technical terms Latin}</h1>
    <p class="dek">{one sentence, why this matters, Darija Arabic script}</p>
    <p class="meta">~10 دقايق · Quiz ديال retrieval فالأخر</p>
  </header>

  <div class="callout">
    <span class="label">Win ديال هاد الدرس</span>
    {one tangible win, tied to freelance mission}
  </div>

  {2–4 short knowledge sections: h2 + p + lists/code/flow diagram}
  {every factual claim carries <span class="cite"><a href="#nX">[X]</a></span>}

  <div class="quiz"> … see below … </div>

  <footer class="lesson-footer">
    <p class="nav-links">
      <a href="../reference/{ref}">المرجع {R}</a><span>·</span>
      <a href="../{prev or next lesson}">…</a><span>·</span>
      <a href="../MISSION.md">المهمة</a>
    </p>
    <p class="nav-links" …>الدرس الجاي: <strong>{title}</strong></p>
  </footer>

  <h2 style="font-size:0.95rem">المراجع</h2>
  <ol dir="ltr" style="…">{#n1..#nX with exact .vtt filenames}</ol>
</main>
<script src="../assets/quiz.js"></script>
</body>
</html>
```

## Language (HARD RULE)

- Prose, headings, labels, feedback: **Darija written in Arabic script** (حروف عربية).
- Technical terms stay Latin/English: `Express`, `route handler`, `middleware`, `reducer`, `dispatch`, `subdocument`, `webhook`, `credits`…
- Example correct sentence: "كل ما كتبتي `app.get(...)`، كتسنا واحد **route handler**."
- NEVER Latin-script Darija ("l-app", "kiydir", "daba"…), NEVER Chinese/Japanese chars, NEVER full English prose paragraphs.

## Forbidden blocks (user explicitly banned these)

- Anything titled / containing **"Primary source"** (no "watch this" block).
- The **follow-up reminder** ("Ana m3ak", "sowlni", "ask follow-up questions").
- Grep your own output for `Primary source|follow-up|Ana m3ak` before finishing — must be zero hits.

## Quiz rules (HARD)

- 4 questions (5 max). Markup, matching `assets/quiz.js`:
  - `<p class="quiz-q"><span class="num">1.</span> {question}</p>`
  - 4 `<button class="opt">` … exactly one per question carries `data-correct`
  - immediately after the buttons: `<p class="explain">{feedback in Arabic script}</p>`
- **All 4 options of a question must have the exact same number of whitespace-separated tokens.** Count them. No length/format gives away the answer.
- Vary which position is correct across questions (never all same position).
- 1 question in each lesson (after 0001) must be **spaced retrieval**: revisit a concept from an earlier lesson, and start its question with "مراجعة: ".
- Options may mix Arabic script + Latin technical terms.

## Citation rules

- Facts come from the actual `.vtt` transcripts in the course folder (read them — do not invent lecture content).
- Cite as `<span class="cite"><a href="#n3">[3]</a></span>` and list exact filenames under `المراجع`, e.g. `03. Authentication with Google OAuth/02. The OAuth Flow.vtt`. Include `(mm:ss–mm:ss)` only if you actually saw those timestamps.
- General background knowledge (e.g. what HTTP GET means) may be uncited.

## Reference doc contract

Model: `reference/0001-emaily-architecture.html` (read it).

- Path: `reference/000N-{slug}.html`, `<html lang="ar" dir="rtl">`, link `../assets/lesson.css`.
- A **cheatsheet**: headings + compact lists/tables + `.flow` diagram + `Sources` list. Designed to be printed and skimmed in 30 seconds.
- Prose/headings Arabic script (technical terms Latin); tables, code, file paths, source list LTR English (`dir="ltr"` on those blocks).
- No quiz, no callout win, no forbidden blocks.

## Quality bar

- Completable in 10–15 minutes; working memory is small — cut anything not needed for the one win.
- Tie the win to the mission (freelance: build, explain, ship).
- Every lesson links: its reference doc, next/prev lesson, `../MISSION.md`.
- After writing: verify the file opens (check `data-correct` count == question count, no forbidden strings, `dir="rtl"` present).
