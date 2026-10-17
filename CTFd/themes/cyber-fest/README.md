# Cyber Fest CTF Theme

An orbital operations theme for CTFd competitions, based on the CTFd core theme. It keeps CTFd's routes, translations, templates, and challenge interactions while applying a dark blue interface with an animated particle field.

## Build

The participant theme uses Vite to compile files from `assets/` into `static/`.

```sh
yarn install
yarn dev
```

Use `yarn build` to compile production assets. The `node_modules/` directory is not part of the theme bundle.

## Administration

CTFd's admin interface is a separate theme under `../admin`. The Cyber Fest visual system is also applied there so organizers get a consistent interface.

## Customization

- Edit templates in `templates/`.
- Edit styles and images in `assets/scss/` and `assets/img/`.
- Edit browser behavior in `assets/js/`.
- Adjust the orbital particle field in `assets/js/theme/orbit-field.js`.
- See `DESIGN.md` for design tokens and visual rules.

Choose `cyber-fest` in CTFd's theme configuration to activate the participant theme.
