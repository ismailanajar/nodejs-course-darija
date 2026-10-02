# كورس Node + React Fullstack — بالدارجة المغربية

دليل ديال **20 درس HTML** قصيرة (كل درس 10–15 دقيقة) + **7 مراجع (cheatsheets)**، من architecture ديال l-app حتى l-deploy النهائي: Node + Express + MongoDB + React + Redux + Stripe + SendGrid.

الشرح كامل **بالدارجة المغربية بحروف عربية**، والكلمات التقنية (`Express`, `middleware`, `reducer`, `webhook`…) كتبقى بالإنجليزي.

## كيفاش تستعمل

1. افتح [`lessons/index.html`](lessons/index.html) فالمتصفح — هادي الخريطة ديال الكورس كاملة.
2.سير بالروابط «الدرس السابق / الدرس الجاي» من الدرس 1 حتى الدرس 20.
3. فآخر كل درس كاين **quiz ديال retrieval** (4 أسئلة) بـfeedback فوري — جاوب من راسك قبل ما تحل.

> كل درس ملف واحد HTML مستقل — ما يحتاجش internet، غير نقرة على الملف ولا افتحو مباشرة من GitHub (raw).

## خريطة الدروس

### Phase 1 — السيرفر و الـ auth (sections 01–04)

| # | الدرس |
|---|--------|
| 1 | [شكون كيتكلم مع شكون: Fullstack Architecture](lessons/0001-fullstack-architecture.html) |
| 2 | [نشأو السيرفر: npm init و أول route handler](lessons/0002-server-bootstrap.html) |
| 3 | [Google OAuth و Passport JS: كيفاش كيمشي الـ flow](lessons/0003-google-oauth-passport.html) |
| 4 | [MongoDB و Mongoose: connection + models + queries](lessons/0004-mongo-mongoose-models.html) |
| 5 | [الـ session ديال authentication: passport callbacks + cookies + logout](lessons/0005-passport-session-cookies.html) |

### Phase 2 — البيئة و الـ client (sections 05–07)

| # | الدرس |
|---|--------|
| 6 | [Dev vs Prod: keys و environment variables](lessons/0006-dev-vs-prod-env.html) |
| 7 | [الـ Client: separate server و CRA proxy](lessons/0007-client-server-split.html) |
| 8 | [Redux و auth reducer: أول state ديالنا](lessons/0008-redux-auth-store.html) |
| 9 | [React Router و Header: التصفح و current user](lessons/0009-react-router-header.html) |
| 10 | [Redux Thunk و fetchUser: جلب currentUser و redirects](lessons/0010-redux-thunk-fetch-user.html) |

### Phase 3 — الدفع، deploy، و data ديال survey (sections 08–10)

| # | الدرس |
|---|--------|
| 11 | [الدفع بـ Stripe: tokens و charges و credits](lessons/0011-stripe-payments.html) |
| 12 | [فـ production: Express كيقدم الـ React build](lessons/0012-production-routing.html) |
| 13 | [Mongoose ديال survey: subdocs و relationship fields](lessons/0013-survey-model.html) |
| 14 | [الـ mailer: SendGrid و templates ديال survey](lessons/0014-sendgrid-mailer.html) |

### Phase 4 — الـ form، webhooks، و الـ dashboard (sections 11–13)

| # | الدرس |
|---|--------|
| 15 | [Redux Form: صياغة survey form بـ custom fields](lessons/0015-redux-form-survey.html) |
| 16 | [الـ validation و الـ wizard ديال form](lessons/0016-form-validation-wizard.html) |
| 17 | [تصفيط survey للسيرفر و redirect](lessons/0017-post-survey-redirect.html) |
| 18 | [Webhooks: ngrok و encoding ديال survey data](lessons/0018-webhooks-dev-setup.html) |
| 19 | [من webhook لنتائج: lodash chain و mongoose queries](lessons/0019-webhook-results-query.html) |
| 20 | [الـ dashboard: جلب و عرض قائمة surveys](lessons/0020-dashboard-surveys.html) |

## المراجع (cheatsheets)

صفحات مصممة باش تتprinti و تتقرا ف30 ثانية — هادي اللي كترجع ليها من بعد:

| المرجع | كيغطي |
|--------|-------|
| [0001 — Emaily Architecture](reference/0001-emaily-architecture.html) | الـ user flow و شكون كيتكلم مع شكون (sections 01–02) |
| [0002 — Auth + Mongoose Flow](reference/0002-auth-mongoose-flow.html) | OAuth, Passport, user model, cookies (sections 03–04) |
| [0003 — Client + Redux](reference/0003-client-redux-architecture.html) | جوج servers, proxy, Redux flow, router (sections 06–07) |
| [0004 — Stripe + Deploy](reference/0004-stripe-deploy.html) | billing flow و static serving (sections 08–09) |
| [0005 — Survey Model + Mailer](reference/0005-survey-model-mailer.html) | schema, subdocs, Mailer class (section 10) |
| [0006 — Redux Form Wizard](reference/0006-redux-form-wizard.html) | Field, validation, wizard, POST (section 11) |
| [0007 — Webhook → Results](reference/0007-webhook-results.html) | pipeline, results query, list endpoint (sections 12–13) |

## بنية الـ repo

```
├── lessons/           20 درس + index.html (الخريطة)
├── reference/         7 cheatsheets
├── assets/
│   ├── lesson.css     الستايل المشترك (RTL + print-ready)
│   └── quiz.js        الـ widget ديال retrieval quiz
├── learning-records/  شنو تعلم و شنو بقا خاصو يتقاد
├── MISSION.md         علاش هاد الكورس موجود
├── RESOURCES.md       المصادر الموثوقة
├── LESSON-SPEC.md     العقد اللي كيتبعو كل درس جديد
└── NOTES.md           تفضيلات التدريس
```

## كيفاش تصاوب درس جديد

1. اقرأ [`LESSON-SPEC.md`](LESSON-SPEC.md) — العقد الكامل (اللغة، الـquiz، الـcitations).
2. اقرأ درس موجود كمثال: [`lessons/0001-fullstack-architecture.html`](lessons/0001-fullstack-architecture.html).
3. اكتب `lessons/000N-<slug>.html` وزيدو للـindex، و **commit بوحدو**.

---

**Author:** Ismail Anajar · <ismailanajar52@gmail.com>
