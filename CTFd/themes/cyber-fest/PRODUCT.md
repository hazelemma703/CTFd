# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- CTF participants, playing solo or in teams, who need to find challenges, submit flags, track progress, and compare standings.
- Event organizers and administrators, who configure challenges and manage participants through CTFd's separate admin interface.

## Product Purpose

CTFd hosts capture-the-flag cybersecurity competitions. The participant experience supports solving challenges and following competition progress; the admin experience supports configuring and operating the event.

## Positioning

The product combines challenge delivery, flag validation, team or individual participation, and live competition standings in one CTF platform. This description is inferred from the current repository and the user's brief.

## Operating Context

Participants use the public theme to browse challenges, submit flags, view a scoreboard, and manage user or team accounts. Organizers use CTFd's separately implemented admin theme to configure and operate a competition.

## Capabilities and Constraints

- The `cyber-fest` theme inherits CTFd's Jinja templates, Bootstrap, Alpine.js, and Vite asset build.
- The admin interface is implemented under `CTFd/themes/admin`, outside the custom participant theme.
- Existing routes, translated strings, challenge interactions, account flows, and configuration behavior must remain functional.
- Theme motion must respect reduced-motion preferences and remain usable on mobile.

## Brand Commitments

- The user requests a cybersecurity CTF competition aesthetic inspired by Halo's military science-fiction atmosphere.
- The supplied reference sets a near-black and orbital-blue visual direction with a particle field. Halo is an inspiration for atmosphere, not a request to reproduce protected game artwork or logos.
- The theme's existing name is `cyber-fest`.

## Evidence on Hand

- Existing CTFd templates and assets under `CTFd/themes/cyber-fest`.
- Existing CTFd admin templates and assets under `CTFd/themes/admin`.
- A user-supplied visual reference showing an almost-black interface with pale blue typography and a centered particle sphere.
- No event-specific name, logo, copy, or challenge data was supplied; preserve dynamic CTFd content and do not invent event proof.

## Product Principles

- Make challenge discovery and flag submission clear.
- Keep live competition information legible and easy to scan.
- Preserve CTFd behavior across participant and administrator workflows.
- Keep motion optional and content accessible at narrow widths.
