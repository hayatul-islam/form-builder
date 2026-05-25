# BuildForm — Drag & Drop + Code Generator

> A visual drag-and-drop form builder that lets anyone create, customize, and export production-ready forms — with real-time multi-device preview and automatic code generation.

Live Website: https://form-builder-24.vercel.app/

---

## What is this?

**Form Builder** eliminates the need to write repetitive form code from scratch. Just drag fields onto a canvas, customize everything visually, preview across devices, and export clean code — ready to drop into any project.

| 🤚 Drag & Drop | 15+ Field Types | 70% Dev Time Saved | Auto-generated Code |
|:-:|:-:|:-:|:-:|

---

##  Problems it solves

-  Writing repetitive form code manually wastes developer time on boilerplate
-  Non-developers cannot create or customize forms without engineering support
-  Testing form layouts across devices requires building first, then checking
-  Iterating on form designs means rewriting code repeatedly for small tweaks

---

##  Key Features

### Form Builder
- Drag & drop field placement
- Add, remove & reorder fields
- Field types: text, email, select, checkbox, textarea & more
- Real-time canvas update on every change

### Customization
- Customize labels, placeholders & validation
- Change layout, colors & font styles
- Toggle required fields
- Predefined template library

### Preview & Export
- Live preview across mobile, tablet & desktop
- Auto-generate clean React/HTML code
- One-click code copy
- Responsive output for all screen sizes

---

## Tech Stack
 React.js, JavaScript, Tailwind CSS, dnd-kit 


---

##  Challenges

** Drag & Drop State Consistency**
Keeping the visual canvas in sync with the underlying form schema during drag reorders required careful index management and optimistic UI updates to prevent flicker or desync.

** Accurate Code Generation**
Generating clean, production-quality React and HTML code from a dynamic schema — including proper validation attributes, accessibility labels, and styling — demanded a structured template engine approach.

** Multi-device Live Preview**
Simulating real device viewports inside a builder UI — without iframes or separate routes — required CSS-only viewport scaling with container queries and fixed-width simulation containers.

---

## What I Learned

- Drag & drop UX design with dnd-kit
- Dynamic code generation from structured schemas
- Component-driven form architecture
- Responsive design simulation techniques
- Template systems and preset composition
- Clipboard API for one-click code copy
- Client-side-only application architecture

---


