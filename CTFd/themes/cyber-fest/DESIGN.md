---
name: Cyber Fest CTF
description: Orbital signal operations interface for cybersecurity competitions.
colors:
  primary: "#87b6eb"
  primary-hover: "#b5d5f7"
  signal-link: "#93bdf1"
  signal-highlight: "#c2ddff"
  signal-distant: "#6689b0"
  success-capture: "#66d9a6"
  status-warning: "#e6bd78"
  status-error: "#ec7d82"
  neutral-bg: "#080c12"
  neutral-raised: "#0d141d"
  neutral-panel: "#111b27"
  neutral-panel-strong: "#172434"
  neutral-copy: "#d9e6f4"
  neutral-muted: "#a2b2c5"
  neutral-line: "rgba(142, 177, 214, 0.2)"
  light-neutral-bg: "#eaf1f8"
  light-neutral-raised: "#f6f9fc"
  light-neutral-panel: "#f4f8fc"
  light-neutral-panel-strong: "#e6eef7"
  light-primary: "#376b9f"
  light-primary-hover: "#173b61"
  light-signal-distant: "#607f9f"
  light-success-capture: "#16855a"
  light-neutral-copy: "#162738"
  light-neutral-muted: "#516578"
  light-neutral-line: "rgba(27, 60, 94, 0.2)"
typography:
  display:
    fontFamily: "Raleway, RalewayOffline, sans-serif"
    fontSize: "clamp(2.3rem, 5.5vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Lato, LatoOffline, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  sm: "0.4rem"
  md: "0.55rem"
  pill: "1rem"
spacing:
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#07111c"
    rounded: "{rounded.sm}"
    height: "2.65rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "#07111c"
  button-success:
    backgroundColor: "{colors.success-capture}"
    textColor: "#062015"
  card:
    backgroundColor: "{colors.neutral-panel}"
    textColor: "{colors.neutral-copy}"
    rounded: "{rounded.md}"
    padding: "1rem"
  input:
    backgroundColor: "#0a1119"
    textColor: "#e2edf9"
    rounded: "{rounded.sm}"
    height: "2.65rem"
---

# Design System: Cyber Fest CTF

## Overview

**Creative North Star: “Orbital Signal Intercept”**

This visual system frames a cybersecurity competition as an operations environment. Near-black surfaces, orbital-blue signals, and the animated particle field adapt the supplied reference to CTFd's challenge and scoreboard workflows. Raleway carries display headings; Lato keeps dense competition and administration content readable.

The participant theme and CTFd's separate admin theme share the dark palette, typography, and particle-field implementation. The participant theme also supports a light color mode; the admin theme currently uses the dark palette. Existing CTFd content, routes, and behavior remain the source of truth. The Halo inspiration informs atmosphere only; the system does not use Halo names, logos, characters, or game artwork.

**Key Characteristics:**

- Near-black operational surfaces with pale orbital-blue actions and links.
- A low-contrast canvas particle sphere animates behind page content.
- Green is reserved for captured challenges and successful submissions.
- Amber and red communicate warning and error states.
- Participant and admin screens share the dark visual language; only participants have the documented light palette.

## Colors

The dark palette layers graphite surfaces beneath pale blue signals. The participant light mode remaps the same roles to blue-gray surfaces. The frontmatter contains the literal values used by the stylesheets; colors in the admin interface may also be affected by its bundled legacy Bootstrap rules.

### Primary
- **Orbital Action** ({colors.primary}): Filled primary and informational actions; text remains dark for contrast.
- **Action Hover** ({colors.primary-hover}): Hover and active emphasis on filled actions.
- **Orbital Link** ({colors.signal-link}): Links, focus outlines, values, and active controls.
- **Signal Highlight** ({colors.signal-highlight}): Headings, brand text, and high-priority navigation.
- **Distant Signal** ({colors.signal-distant}): Secondary challenge markers and low-emphasis signal details.

### Secondary
- **Captured Green** ({colors.success-capture}): Solved challenges and successful submissions only.
- **Warning Amber** ({colors.status-warning}): Warning feedback.
- **Alert Red** ({colors.status-error}): Error and invalid-input feedback.

### Neutral
- **Void** ({colors.neutral-bg}): Dark page and browser surface.
- **Raised Void** ({colors.neutral-raised}): Dropdown, dialog, and elevated work surface.
- **Operations Panel** ({colors.neutral-panel}): Cards and compact work areas.
- **Panel Lift** ({colors.neutral-panel-strong}): Hover, selected, and table-row surfaces.
- **Mission Copy** ({colors.neutral-copy}): Primary text and body copy.
- **Telemetry Muted** ({colors.neutral-muted}): Supporting text, placeholders, and metadata.
- **Signal Border** ({colors.neutral-line}): Table structure, card edges, and separators.

### Participant Light Mode
- **Sky Ground** ({colors.light-neutral-bg}): Light-mode page surface.
- **Cloud Surface** ({colors.light-neutral-raised}): Raised light-mode surfaces.
- **Ice Panel** ({colors.light-neutral-panel}): Cards and dialog surfaces.
- **Panel Selection** ({colors.light-neutral-panel-strong}): Selected and hover surfaces.
- **Deep Orbital Blue** ({colors.light-primary}): Light-mode links and actions.
- **Deep Highlight** ({colors.light-primary-hover}): High-priority text and action hover.
- **Light Distant Signal** ({colors.light-signal-distant}): Secondary details.
- **Light Capture Green** ({colors.light-success-capture}): Solved and successful states.
- **Light Mission Copy** ({colors.light-neutral-copy}): Primary text.
- **Light Telemetry** ({colors.light-neutral-muted}): Secondary text.
- **Light Signal Border** ({colors.light-neutral-line}): Borders and separators.

### Named Rules
**The Capture State Rule.** Green means a successful submission or solved challenge; it is not a general accent.

**The Signal Contrast Rule.** Primary action text stays dark against the filled blue action; links and focus indicators use the brighter signal colors.

## Typography

**Display Font:** Raleway (with RalewayOffline, sans-serif fallback)
**Body Font:** Lato (with LatoOffline, sans-serif fallback)

**Character:** Raleway gives page headings a crisp, angular operational voice. Lato supports long challenge descriptions, forms, tables, and admin records without competing with the display face. Both families are bundled for offline use.

### Hierarchy
- **Display** (600, responsive 2.3rem–4.25rem, 1.04 line height): Main page titles.
- **Headline** (600, responsive 1.5rem–2.1rem): Section and view headings.
- **Title** (600, responsive 1.2rem–1.55rem): Challenge categories and panel titles.
- **Body** (400, 1rem, 1.55 line height): Instructions, descriptions, and form content.
- **Label** (700, about 0.83rem): Table headings and compact controls.

### Named Rules
**The Two-Font Rule.** Use Raleway for headings and Lato for interface and running text; avoid adding another display face.

## Layout

The participant theme uses a centered content frame up to 1320px wide and a navigation frame up to 1440px. Existing Bootstrap grids organize challenge targets, standings, forms, and account views. The fixed navigation reserves vertical space above the page; the navigation collapses below 767.98px. Challenge targets retain generous touch height on wide layouts and reduce their minimum height on phones. Tables preserve their tabular scanning behavior and may scroll horizontally where the data requires it.

The admin theme retains CTFd's own Bootstrap page structures and adapts them with the shared orbital palette. Its workflow layouts remain denser than participant pages to support configuration and competition operations.

## Elevation & Depth

Depth comes mainly from dark tonal surfaces and subtle blue-gray borders. Panels remain calm at rest. Offset shadows are reserved for floating dropdowns and dialogs. The particle sphere is a fixed, pointer-transparent canvas behind the interface; it animates with randomized orbital drift and twinkle, becomes quieter on phones, pauses while the page is hidden, and draws a static frame when reduced motion is requested.

### Shadow Vocabulary
- **Floating menu** (`0 1rem 2rem rgba(0, 0, 0, 0.3)`): Dropdown menus.
- **Dialog** (`0 1.4rem 4rem rgba(0, 0, 0, 0.46)`): Modal windows.

### Named Rules
**The Quiet Orbit Rule.** The particle field stays behind content, never captures pointer input, and never animates for users who request reduced motion.

## Shapes

Cards, dialogs, and challenge targets use gently curved corners (0.55rem). Buttons, fields, alerts, and badges use compact corners (0.4rem). The scrollbar thumb alone uses a pill-like radius (1rem). Borders remain subtle blue-gray strokes; the admin's structural tables retain the sharper geometry required for dense records.

## Components

### Buttons
- **Primary action:** Filled orbital blue with dark text; minimum height 2.65rem and compact corners. Hover shifts to the lighter action blue; press moves down 1px.
- **Secondary action:** Outlined blue with a restrained tinted hover fill.
- **Success action:** Green is reserved for success and capture outcomes.
- **Focus:** Keyboard focus uses a visible 2px blue outline with 3px offset.

### Cards and Challenge Targets
- **Panels:** Graphite fill, muted blue-gray edge, and 0.55rem corners. Headers may step up one surface tone.
- **Challenge target:** At least 8rem high on wide screens and 6.5rem on phones. Hover raises it slightly and strengthens its blue edge; solved targets switch to green.
- **Tables:** Preserve striped and hover states, tabular alignment, and the shared structural border color.

### Inputs and Fields
- **Style:** Dark inset fill, blue-gray border, compact corners, and readable placeholder text.
- **Focus:** Orbital-blue border and a restrained focus ring.
- **Validation:** Preserve CTFd feedback behavior; success uses green, warnings amber, and errors red.

### Navigation
- **Style:** Fixed, near-black bar with Raleway wordmark and Lato links. Active, hover, and focus states brighten to the signal highlight.
- **Responsive behavior:** The Bootstrap collapse remains scrollable within the viewport; mobile links receive a minimum 2.75rem row height.

## Do's and Don'ts

### Do:
- **Do** use orbital blue for actions, links, active controls, and focus.
- **Do** reserve green for captured or successful states.
- **Do** keep the particle field quiet behind dense challenge and admin content.
- **Do** preserve CTFd's translated strings, routes, plugin slots, and keyboard behaviors.
- **Do** keep participant light mode consistent with its remapped blue-gray token roles.

### Don't:
- **Don't** place the particle field at full opacity beneath text-heavy content.
- **Don't** use Halo names, logos, characters, or game artwork as theme assets.
- **Don't** use warning amber or error red as general decoration.
- **Don't** replace established CTFd terminology with invented operational labels.
