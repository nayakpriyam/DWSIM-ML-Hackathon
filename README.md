# ML4ChemE Website

This repository contains the static website for **ML4ChemE — Machine Learning Meets Chemical Process Simulation**, a FOSSEE, IIT Bombay hackathon focused on combining DWSIM-based chemical process simulation with machine-learning surrogate models.

The website is built using plain HTML, CSS and JavaScript, so no framework or build step is required.

## Website Files

- `index.html` — main webpage content and page sections
- `styles.css` — layout, colors, typography and responsive styling
- `script.js` — navigation and interactive page behaviour
- `assets/` — IIT Bombay, FOSSEE and DWSIM logos used by the website

## View the Website Locally

### Option 1 — Open directly in a browser

1. Extract the ZIP file.
2. Open the extracted `DWSIM-ML-Hackathon` folder.
3. Double-click `index.html`.
4. The webpage will open in your default web browser.

This is sufficient for quickly viewing the website.

### Option 2 — Run a local web server using Python

Running through a local web server is recommended while editing the website.

1. Open a terminal or command prompt inside the `DWSIM-ML-Hackathon` folder.
2. Run:

```bash
python -m http.server 8000
```

3. Open a browser and visit:

```text
http://localhost:8000
```

4. To stop the local server, return to the terminal and press `Ctrl + C`.

If `python` is not recognised on Windows, try:

```bash
py -m http.server 8000
```

## Editing the Website

The folder can be opened in any code editor such as Visual Studio Code.

- Edit `index.html` to change text, sections, links or page content.
- Edit `styles.css` to change the visual design, spacing, fonts or responsive behaviour.
- Edit `script.js` to change interactive behaviour.
- Keep the `assets` folder in the same relative location so the logos continue to load correctly.

After making changes, refresh the browser to view them.
