# PawSteps — Dog Training App

> Step-by-step training courses and local specialist finder for new puppy owners.

**Live Demo:** [codefool9.github.io/three-screens](https://codefool9.github.io/three-screens/)
**Repository:** [github.com/codefool9/three-screens](https://github.com/codefool9/three-screens)

---

## 1. Need, Persona, Capability & Value

**Need:** New puppy owners do not know where to start with training — they bounce between YouTube videos and Reddit threads, basic commands do not stick without a clear progression, and by 4–6 months bad habits are already set.

**Persona:** Got their first puppy in the last three months; no prior dog training experience; tries one-off YouTube videos but cannot follow through consistently; has a smartphone and uses it for everything; trains at home in short gaps — during lunch, after work, or before bed.

**Capability:** Find and follow a structured training course for their puppy, at their own pace at home, with the option to contact a local specialist if they need hands-on help.

**Fundamental Value:** Confidence — the owner feels like they are doing it right and can see their puppy actually responding to commands.

---

## 2. Three Screens

| # | Name | Job | Why it earned a slot | Design question |
|---|------|-----|----------------------|-----------------|
| 1 | Landing | Signal the core value (confidence + structure) and primary capability (start a training course) at first glance, before reading | Every prototype needs a clear entry point; this one has to communicate "guided courses for puppy owners" in under 3 seconds | Does a first-time user understand what PawSteps does without reading a paragraph? |
| 2 | Browse Courses | Let the user explore and select a course; also surfaces local specialists as a supporting option | This is where the primary capability is exercised — choosing a course. Without it, the CTA on Screen 1 has no payoff | Does filtering by goal (Obedience, Tricks, Hunting, Agility) make the right course findable? |
| 3 | Course Detail | Deliver the value: show the user exactly what a course involves (lesson list, duration, progress) so they feel confident committing | The value is not "there are courses" — it is "I know what I am signing up for and it feels manageable" | Does seeing 8 clearly named lessons make training feel less overwhelming than an open-ended YouTube search? |

---

## 3. Feedback Questions

**Need**
1. "Tell me about the last time you tried to train your dog at home — what did you actually do?" — *Prediction: Most will describe a YouTube search that trailed off after a few attempts.*

**Value**
2. "If you could say one or two words to describe what you would get out of an app like this, what would they be?" — *Prediction: Answers like 'structure,' 'consistency,' or 'knowing what to do next.'*

**Persona**
3. "How often does training come up for you right now, and what are you usually doing when you try to work on it?" — *Prediction: Short sessions at home, often alone, phone in hand.*

**Capability**
4. "I am going to show you this screen for five seconds. (Hide it.) What does this product do?" — *Prediction: Most will say 'train your dog' or 'dog training courses' — a correct but shallow read. Testing whether the lesson structure on Screen 3 adds the 'guided' signal.*

---

## 4. Design Justification & First Read

**Landing screen signal:** The headline "Train your best friend, step by step" names the capability (training) and implies the value (structure → confidence) before the user reads anything else. The golden retriever illustration and amber palette reinforce the pet context immediately.

**Grouping (Gestalt):**
- *Proximity*: On Screen 2, course title, category badge, difficulty badge, and rating are grouped inside a single card — the user reads them as one unit.
- *Similarity*: All course cards share the same card shape, border, and icon-left layout, so the list reads as one type of content rather than a mixed page.
- *Common region*: The "Local Specialists" section on Screen 2 is visually separated from the course list by a full-width label, creating a clear region boundary between self-guided and expert-led paths.

**Navigation:** Every screen returns to Home — via the bottom nav "Home" tab, and via a "Home" text link in the headers of Screens 2 and 3.

**Before / After:**

| | Initial commit (df7b69d) | Revised (dog-trainer-app branch) |
|-|--------------------------|----------------------------------|
| Landing | Generic gray placeholder with "[Your headline]" | Amber palette, "Train your best friend, step by step," category grid, two preview course cards |
| Screen 2 | 4 skeleton list cards with no content | 9 real courses, filterable by Obedience/Tricks/Hunting/Agility, with ratings and horizontal specialist cards |
| Screen 3 | Skeleton image + lorem-style lines | Named 8-lesson course, progress bar, per-lesson duration, specialist nudge at bottom |
| What changed and why | The initial output had equal visual weight on every element — nothing signaled the primary capability. Reorganized the landing screen so the headline is the single dominant element (oversized, no competing visual near it). Added course categories to group related content (Gestalt: similarity + proximity). |

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deploys to GitHub Pages automatically on every push to `main` via GitHub Actions.

GitHub Pages source is set to **GitHub Actions** (already configured).
