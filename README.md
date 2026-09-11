# App Prototype

> Three-screen mobile app prototype — [Course Assignment]

**Live Demo:** _[URL added after deployment]_
**Repository:** [github.com/codefool9/three-screens](https://github.com/codefool9/three-screens)

---

## 1. Need, Persona, Capability & Value

> _Fill these in once the problem and solution are defined._

**Need:** [The user's situation, what gets in the way, what they do now, and what that workaround costs them. Do not name the product or its features.]

**Persona:** [2–3 characteristics and 1–2 situations. E.g. "studies on campus 2–3 times per week, has 45–90 min gaps between classes."]

**Capability:** [The key observable action the product lets the user complete. Not "save time" — that is a value.]

**Fundamental Value:** [One or two words, then why that payoff matters. E.g. "Momentum — the student preserves working momentum between classes."]

---

## 2. Three Screens

| # | Name | Job | Why it earned a slot | Design question |
|---|------|-----|----------------------|-----------------|
| 1 | Landing | Signal the core value and primary capability at first glance | Every prototype needs a landing screen; this one has to communicate value before the user reads a word | Does the landing screen make the capability and value clear at first glance? |
| 2 | [Name TBD] | Demonstrate the primary capability in action | [Reason this screen over alternatives] | [Design question this screen helps answer] |
| 3 | [Name TBD] | Deliver and confirm the primary value | [Reason this screen over alternatives] | [Design question this screen helps answer] |

---

## 3. Feedback Questions

> _Rewrite in the words you would say to your persona. Add a prediction beside each._

**Need**
1. [Question] — *Prediction:*

**Value**
2. [Question] — *Prediction:*

**Persona**
3. [Question] — *Prediction:*

**Capability**
4. [Question] — *Prediction:*

---

## 4. Design Justification & First Read

> _Complete after reviewing and revising the initial AI output._

**Landing screen:** Does it signal the primary capability and fundamental value at first glance, before reading?

**Grouping:** What information and actions belong together on each screen, and which Gestalt principle communicates that?

**Navigation:** All three screens return to the landing screen via the Home tab in the bottom navigation bar. Screens 2 and 3 also have an explicit back-to-Home link in their headers.

**Before / After:**

| | Initial (first commit) | Revised |
|-|------------------------|---------|
| Change | — | — |
| Why | — | — |

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the app shows as a phone frame on desktop and full-screen on mobile.

## Deployment

Deploys to GitHub Pages automatically on every push to `main` via GitHub Actions.

**One-time setup:** Go to **Settings → Pages → Source → GitHub Actions**.
