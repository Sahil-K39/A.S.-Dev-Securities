# Design System Strategy: The Noir Collective

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Nocturnal Gallery."** 

We are moving away from the "busy" nature of standard web layouts and toward a high-end, editorial experience that feels curated, not populated. Our goal is to emulate the feeling of a physical luxury boutique at night: spotlighting what matters, embracing the shadows, and utilizing "Extreme Whitespace" (or in our case, "Darkspace") to signal prestige. 

The system breaks the "template" look through:
- **Intentional Asymmetry:** Using the `surface-container` tiers to create staggered, overlapping layouts rather than rigid, centered grids.
- **Cinematic Contrast:** Utilizing the `#FF2A2A` primary accent sparingly—like a single red light in a dark room—to command immediate attention.
- **Micro-interactions:** Soft, "living" shadows and glassmorphism that make the UI feel like a tactile, high-end physical object.

---

## 2. Colors & Tonal Depth

Our color strategy rejects the flat, "web-default" look. We use depth and light to define space rather than lines.

### The Palette
- **Background (`surface`):** `#131313` — A rich, matte ink that acts as our canvas.
- **Primary Accent:** `#FF2A2A` — Used exclusively for high-priority calls to action and critical feedback.
- **On-Surface (`Text`):** `#EAEAEA` — A soft off-white to reduce eye strain and feel more organic than pure `#FFFFFF`.
- **Secondary Text:** `#AF8783` (Muted Rose-Gray) — For metadata and supporting copy.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders for sectioning. Traditional dividers are prohibited. 
Boundaries must be defined through:
1.  **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
2.  **Shadow Separation:** Using the "Layering Principle" (see Section 4).
3.  **Whitespace:** Using at least `64px` of vertical space to separate content blocks.

### Surface Hierarchy & Nesting
Treat the UI as a series of nested, physical layers.
*   **Base:** `surface-container-lowest` (#0E0E0E) for the deepest background elements.
*   **Standard:** `surface` (#131313) for the main body.
*   **Elevated:** `surface-container-high` (#2A2A2A) for interactive cards.
*   **Floating:** `surface-bright` (#3A3939) for overlays and tooltips.

### The "Glass & Gradient" Rule
For hero sections or premium CTAs, use a subtle radial gradient: `radial-gradient(circle at top left, #2A2A2A 0%, #131313 100%)`. Floating navigation bars must utilize **Glassmorphism**: `surface-variant` at 60% opacity with a `24px` backdrop-blur.

---

## 3. Typography

The typography scale is designed to feel like a high-fashion lookbook.

| Level | Token | Font | Size | Character Spacing | Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Epilogue | 3.5rem | -0.02em | Sentence |
| **Headline** | `headline-lg` | Epilogue | 2rem | 0.15em | **ALL CAPS** |
| **Title** | `title-lg` | Inter | 1.375rem | Normal | Sentence |
| **Body** | `body-lg` | Inter | 1rem | Normal | Sentence |
| **Label** | `label-md` | Inter | 0.75rem | 0.1em | ALL CAPS |

**Editorial Guidance:** Use `headline-lg` (Epilogue, All Caps, tracked out) for key section headers. Pair it with `body-lg` (Inter) for a sophisticated "serif-feel" without the serif. The extreme tracking (letter-spacing) on headers is our signature of luxury.

---

## 4. Elevation & Depth

We avoid the "card-on-flat-background" look. We create depth through **Tonal Layering**.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-high` card inside a `surface-container-low` section. The subtle shift in hex code creates a "soft lift."
*   **Ambient Shadows:** For floating elements (like the Primary Button or a Modal), use:
    *   `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);`
    *   The shadow must be tinted with the background color—never use pure black on a non-black surface.
*   **The "Ghost Border":** If accessibility requires a container boundary, use the `outline-variant` token at **15% opacity**. This creates a "glow" effect rather than a hard line.
*   **Radius:** Follow the Roundedness Scale religiously.
    *   **Cards:** `xl` (3rem) for a friendly yet premium feel.
    *   **Buttons:** `full` (9999px) for a "pill" aesthetic that mirrors high-end industrial design.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` (#FFB4AB) with `on-primary` text. On hover, apply a `subtle glow` using a 10px spread of the primary color at 20% opacity.
*   **Secondary (Outline):** A "Ghost Border" of `primary` with no background. Text is `primary`.
*   **Tertiary:** Text-only in `EAEAEA` with an underlined hover state that grows from the center.

### Premium Cards
Cards must never have borders. Use `surface-container-high` as the background. On hover, the card should "lift" by transitioning to `surface-bright` and increasing the corner radius from `lg` to `xl`. 

### Input Fields
Inputs should be minimalist: a simple `surface-container-lowest` background with a bottom-only `outline-variant` at 20% opacity. Upon focus, the bottom border glows `FF2A2A` and the label (using `label-sm`) floats above.

### Navigation
The navigation bar is a floating "island" (Glassmorphism). It uses the `full` radius scale and sits `24px` from the top of the viewport.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical margins. If a text block is on the left, leave the right 50% of the screen empty to create "breathing room."
*   **Do** use `epilogue` for all numbers and statistics to make them feel like architectural elements.
*   **Do** use a "Soft Glow" (shadow with primary color) for active states to simulate a high-end LED interface.

### Don't
*   **Don't** use dividers or lines to separate list items. Use vertical padding (`spacing-md`).
*   **Don't** use pure white text. It "vibrates" on a matte black background. Always use `on-surface` (#EAEAEA).
*   **Don't** use standard "drop shadows." If a shadow is visible enough to be identified as a "shadow," it is too dark. It should feel like "ambient occlusion."
*   **Don't** cram content. If a section feels full, it's already too crowded. Remove 20% of the elements.

---

## 7. Signature Elements
To finalize the "Agency" look, implement a **"Magnetic Cursor"** effect where the cursor expands and turns into a blurred `primary_container` (#FF5449) circle (opacity 10%) when hovering over interactive elements. This adds a layer of digital "soul" that standard systems lack.