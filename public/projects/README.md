# Project images

Drop project screenshots / photos in this folder, then reference them from
`content/projects.ts`. Anything in `public/` is served from the site root, so a
file at `public/projects/penncloud-admin.png` is referenced as
`/projects/penncloud-admin.png`.

## Naming

Use the project slug as a prefix so files stay grouped, e.g.:

- `computational-sprinting-simulator-gui.png`
- `penncloud-admin-console.png`
- `instalite-feed.png`

## How to wire one up

In `content/projects.ts`, add `cover` (shown on the home card + at the top of
the case study) and/or `gallery` (extra images in the case-study body):

```ts
{
  slug: "penncloud",
  // ...existing fields...
  cover: {
    src: "/projects/penncloud-admin-console.png",
    alt: "PennCloud admin console showing live node health across the cluster",
  },
  gallery: [
    {
      src: "/projects/penncloud-drive.png",
      alt: "PennCloud Drive file listing",
      caption: "The Drive UI, backed by the distributed key-value store.",
    },
  ],
}
```

`alt` text is required — describe what the image shows (it's read by screen
readers and shown if the image fails to load). `caption` is optional.

## Recommended specs

- **Cover:** roughly 16:9, ~1600×900px. Displayed at up to 1024px wide.
- **Gallery:** roughly 4:3. Displayed up to ~512px wide each (two per row).
- PNG for UI screenshots, JPG for photos. Keep each file under ~500KB if you can.
