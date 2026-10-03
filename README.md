# Sam Shady’s personal website

An original editorial portfolio with About, category-filtered Posts, and Misc pages.

## Publishing

In Settings → Pages, select **Deploy from a branch**, choose **main**, and **/(root)**. The site is available at https://samshady-math.github.io/ once GitHub Pages finishes publishing.

## Content

All dates use America/Detroit (Eastern time). Posts are ordered newest first. Images and PDFs live in `assets/`, so they can be viewed directly in the browser. The homepage reserves space for a portrait and a research visualization. To add them, replace the matching placeholder in `index.html` with an image and descriptive alt text.

To add a post, copy a folder in `posts/`, update its contents and dates, then add an entry to `posts/index.html` with `data-category="Math"`, `"Computing"`, or `"Misc"`. News and courses are in `index.html`. Pizza entries are in `misc/index.html`. `assets/content.json` is a readable record of the initial content; pages do not load from it dynamically.

The website uses static HTML, CSS, and JavaScript with no build step or external dependencies.
