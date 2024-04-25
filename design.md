# EveryoneGames

## Methodologies

- BEM
- Commit: Angular convention
  - 'feat: *message*' : add/remove feature
  - 'style: *message*' : styling
  - 'fix: *message*' : fix a bug
  - 'refactor: *message*' : refactor the code WITHOUT modifying any behaviour
  - 'docs: *message*>' : affect documentation of the project
  - 'perf: *message*' : improve performance

## Tools

- Framer-motion
- React-router-dom
- Infinite scroll

## Features

- Dark/Light theme
- Search by title
- Filter by
  - Platforms
  - Genre
- Order by
  - Date added
  - Name
  - Release date
  - Rating

## Routes

- App
  - home: New and trending games (<1 month - suggestions)
  - new-release: New releases (release date: day 0 to day-7)
  - next-week: Next week (release date: day+1 to day+7)
  - best-of: Best of (sorted by best ratings)
- Game page
  - game/:id : Display all information related to a game

## Pages & Components

- App
  - Navbar
  - Search
  - Sort by
  - Filters
  - Cards
    - Card: displays basic game information
- Game page
  - Navbar
  - Page layout

## Game information

All the properties needed from the API, exact names and types

### Game information card

- id : number (UUID)

### Game information page

-

## API Calls

-
