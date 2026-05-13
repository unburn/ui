# Contributing to @unburn/ui

Thank you for your interest in contributing to @unburn/ui! We are building a high-end, premium component library, and we have strict design and technical standards to ensure consistency.

## Design Philosophy
Before building any component, please read our [DESIGN.md](DESIGN.md). Key takeaways:
- **Soft Geometry**: All components must use `var(--radius)` (20px). No sharp corners.
- **Accent-Centric**: Use `var(--accent-color)` and `var(--accent-text)` for all primary interactions.
- **Glassmorphism**: Use the `.glass` utility for navigation and floating containers.
- **Zero Shadows**: We communicate elevation through contrast and spacing, not drop shadows.

## Technical Standards
- **Framework**: React 19 (Functional Components with Hooks).
- **TypeScript**: Strict typing is required. No `any`.
- **Styling**: Pure CSS using CSS variables. Avoid ad-hoc inline styles for core component logic.
- **Icons**: Use `lucide-react` for all icons.
- **Performance**: Ensure zero-latency theme switching. Do not add transitions to `background-color` or `color` unless specifically requested.

## Contribution Workflow
1. **Discuss**: Before starting a new component, please open an issue or start a discussion to ensure it fits the library's roadmap.
2. **Implementation**: 
   - Build the component in `src/components/ui/`.
   - Create a corresponding CSS file in the same directory (or `src/index.css` if it's a global utility).
   - Add a documentation page in `src/pages/` and register it in `App.tsx`.
3. **Review**: Ensure your component is responsive and looks perfect in both **Light** and **Dark** modes.

## Coding Style
- Use `cn()` utility for class name merging.
- Prefer `var(--phi)` (1.618) based spacing for padding/margins.
- Component props should always include an optional `className` and `style`.

We look forward to your contributions!
