# NOTES

## تفضيلات المستخدم / User preferences
- **اللغة**: الشرح بالدارجة المغربية **بحروف عربية**، والكلمات التقنية (Express, middleware, route handler, state…) كتبقى بالإنجليزي. المؤشرات، الانتقالات، والتشجيع بالدارجة. (confirmed 2026-10-02)
- **ما بغاهاش داخل الدروس** (2026-10-02):
  - blok «Primary source — watch this» (ما بغيش نقول ليه شنو يشوف من الكورس)
  - blok تذكير «ask follow-up questions» (الأمر صريح: بلاها)
- **المستوى**: backend experience (Node/Express). React هو الوجه الضبابي — نمشي بطيء على components/state/hooks، وكنعتبر routing/middleware review.
- **شكل الحصة**: قصيرة (10–15 دقيقة)، win واحد ملموس.
- **المنهاج**: ترتيب الكورس المحلي (sections 01→13).

## Workspace conventions
- Lessons: `lessons/000N-<dash-case>.html`, `dir="rtl" lang="ar"`, link `../assets/lesson.css` + `../assets/quiz.js`.
- Every lesson: citations inline to course `.vtt` lectures, link to reference doc, quiz with equal-token options.
- Skip blocks listed above under "ما بغاهاش".
- Reference docs: `reference/000N-*.html` when a lesson compresses into a cheat sheet.

## Session log
- 2026-10-02: Workspace created. Mission interviewed (freelance). Lesson 1.1 published (architecture).
- 2026-10-02: Language refined → Arabic script; removed primary-source + follow-up blocks from lesson 1.1.
- 2026-10-02: **الكورس كاملة بنيات**: دروس 0001–0020 (sections 01–13) + 7 cheatsheets فـ `reference/` + `lessons/index.html` (خريطة الكورس). البناء تعاون مع 5 agents وفق `LESSON-SPEC.md`؛ تم التحقق بسكربت: token-counts متساوية، 4 quiz questions/درس، ما كاينش CJK/Cyrillic، ما كاينش الروابط الميتة، ما كاينش الحظر (primary-source/follow-up). **ملاحظة**: الـ GLOSSARY.md ما زال ما خلقناه — نبداوو من بعد ما المستخدم يجاوب الquizzes ويتأكدو المصطلحات.
- 2026-10-02: **تحسين بصري للدروس**: زدنا components مReusable فـ `assets/lesson.css` (stack, seq, cycle, steps, compare, analogy, pitfall) ووثقناهم فـ `LESSON-SPEC.md`. 5 batches ديال agents زادو diagram + aid توضيحي لكل درس من الـ20 (quizzes و citations ما تمسّاتش، تحقق كامل ناجح).
- 2026-10-02: **Polish ثاني (محتوى + charts، بلا push)**: كل درس ولى فيه diagram جوج max بـartifacts ملموسة (endpoints, function names) + caption «كيفاش تقرا هاد المخطط» + أضعف فقرة معاودة + جملة freelance. النمو ≤ ~6%. quizzes byte-identical. التبديلات باقية فـworking tree للمراجعة.
