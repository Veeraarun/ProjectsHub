# ProjectsHub 🚀

A personal project showcase website that organizes and presents my frontend, JavaScript, and other development projects in one place.

## 🌐 Live Demo

**[Open ProjectsHub](https://veeraarun.github.io/ProjectsHub/)**

## ✨ Features

- Project portfolio grid.
- Category-based project filtering.
- "All" and category-specific views.
- Animated project filtering.
- Dynamic visible/total project count.
- Keyboard support for filter controls.
- Responsive project showcase.
- Accessible `aria-selected` state for filter tabs.
- Smooth scrolling support.

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Responsive Web Design
- CSS animations/transitions

## 🏗️ How Filtering Works

Each project is represented as a `.project-item` with a category stored in `data-category`.

When a filter is selected:

1. The active filter state is updated.
2. Projects are compared against the selected category.
3. Matching projects are shown.
4. Non-matching projects receive the hiding animation and are removed from the visible grid.
5. The project counter is recalculated.

## 📁 Project Structure

```text
ProjectsHub/
├── index.html              # Project showcase page
├── script.js               # Filtering and UI interactions
├── style.css               # Main styling
├── Javascript Projects/    # JavaScript project collection
├── Icons/                  # UI/project icons
└── README.md
```

## 🚀 Run Locally

No build tools are required.

```bash
git clone https://github.com/Veeraarun/ProjectsHub.git
cd ProjectsHub
```

Open `index.html` directly or use a local static server.

## 🎯 Purpose

ProjectsHub acts as a central index for smaller projects and experiments, making it easier to explore my learning progression without searching through individual repositories.

## 📌 Status

Personal portfolio/learning project. New projects can be added as the collection grows.

## 👤 Author

**Veeraarun V** — [GitHub](https://github.com/Veeraarun)
