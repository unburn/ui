# @unburn/ui Design Guidelines

@unburn/ui is a **Premium Soft** React component library. It balances modern, organic geometry with high-contrast precision. To maintain its sophisticated and "airy" aesthetic, all components must adhere to the following strict guidelines.

## 1. Geometric Precision (The 20px Standard)
- **The Golden Radius**: Every primary element must have a smooth, organic corner. Use `var(--radius)` (**20px**) for all containers, buttons, inputs, and the Dock.
- **Zero-Shadow Philosophy**: The library uses a flat design language. Elevation is communicated through high-contrast borders and subtle background tints, never drop shadows.
- **Border Weights**: Standard borders are `1px solid var(--border-color)`.

## 2. Typography & Brand Voice
We use three distinct font families to create a high-fashion, technical look:
- **Serif (`Gloock`)**: Exclusively for large headers (`.hero-title`, `.section-title`). Usually set to `font-weight: 100` for a refined editorial feel.
- **Sans (`Google Sans Flex` / `Inter`)**: For descriptions and general interface text.
- **Mono (`JetBrains Mono`)**: For technical labels, code snippets, and button text. UI labels should be `text-transform: uppercase` with `letter-spacing: 0.1em`.

## 3. The Universal Dock
The `Dock` is the heart of the @unburn/ui experience.
- **Positioning**: Supports `top`, `bottom`, `left`, and `right` positions with adaptive layouts.
- **Orientation**: Switches between horizontal (top/bottom) and vertical (left/right) automatically.
- **Collapsibility**: Features a `showHideToggle` with directional icons that point toward the screen edge for collapse and toward content for expand.
- **Vertical Menu**: Vertical docks use `writing-mode: vertical-lr` for the "MENU" label to maximize space and aesthetic impact.

## 4. Branding & Dynamic Identity
- **Logo**: A circular circular SVG design that adapts to the current `--accent-color`.
- **Dynamic Favicon**: The favicon is generated on-the-fly to match the user's chosen accent color, with the "UI" lettering locked to pure white (#ffffff) for maximum tab visibility.
- **Accent Centricity**: A single `--accent-color` drives the entire UI state. Switching the accent updates everything from button borders to the browser tab icon.

## 5. Premium Aesthetics
- **Viewport Glow**: A large, soft, accent-colored radial orb (fixed top-left) active on the landing page to provide depth and atmospheric lighting.
- **Glassmorphism**: Primary navigation (Header, Dock) uses `.glass` utility for backdrop-filter blurs and semi-transparent backgrounds.
- **Instant Theme Switching**: Transitions on `background-color` and `color` are disabled globally to ensure that theme swaps feel snappy and industrial, while functional animations (sliding/expanding) remain "liquid" via `cubic-bezier(0.2, 0.8, 0.2, 1)`.

## 6. Layout Hierarchy
- **Desktop Sidebar**: Hidden by default in favor of the Universal Dock to provide a cleaner, more focused canvas.
- **Showcase Blocks**: Standardized preview containers with integrated "VIEW CODE" functionality and theme-aware syntax highlighting.

---

*Refer to `src/index.css` for the source of truth on variable definitions.*
