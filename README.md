# kuttiyil.net

Jekyll site hosted on GitHub Pages.

## Styles

Tailwind CSS is compiled locally and the output (`assets/css/tailwind.css`) is committed, because GitHub Pages cannot run Node builds.

Rebuild after adding or changing Tailwind classes in any layout, page or post:

    npm install      # first time only
    npm run build:css

Then commit `assets/css/tailwind.css` with the change.
