# Changelog

All notable changes to the **@unburn/ui** project will be documented in this file.

## [0.1.0-beta.7] - 2026-05-14

### Added
- **New Component: `CodeBlock`**: A premium code preview component with syntax highlighting, integrated copy-to-clipboard, and header support.
- **`ComponentAnatomy` Component**: Blueprint-style diagrams for all component documentation to clarify sub-element styling keys.
- **`ApiReference` Component**: Standardized property tables for technical documentation.

### Changed
- **Sub-Component Styling API**: Implemented `styles` and `classNames` props across ALL components (`Button`, `Avatar`, `Badge`, `Alert`, `Accordion`, `Dock`, `CodeBlock`) for deep UI customization.
- **Refined Documentation**: Updated all component pages with visual anatomy diagrams and comprehensive API references.
- **Catalog Design**: Redesigned the `CodeBlock` preview in the component gallery to a "Minimalistic Bold" aesthetic with soft 12px radius.
- **Home Page Updates**: Refined marketing copy and featured the latest core philosophies (Technical Anatomy, Dynamic Theming).

### Fixed
- Improved mobile responsiveness for code previews in the documentation site.
- Corrected internal logic for `Accordion` and `Dock` to better handle custom styling injection.