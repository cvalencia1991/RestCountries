# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Features](#features)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Key Technical Features](#key-technical-features)
  - [AI Collaboration](#ai-collaboration)
- [Project Configuration](#project-configuration)
  - [Environments](#environments)
  - [Setup](#setup)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Features

- **Robust Error Handling:** Specific UI feedback for API errors (401 Unauthorized, 403 Forbidden, etc.).
- **Responsive Design:** Optimized for mobile, tablet, and desktop views.
- **Theme Switching:** Persistent light and dark mode.
- **Dynamic Routing:** Individual pages for every country with detailed statistics.

## My process

### Built with

- [Angular 18+](https://angular.dev/)
- [TypeScript](https://www.typescript.org/)
- [RxJS](https://rxjs.dev/) for reactive state and API handling
- CSS Custom Properties (Variables)
- CSS Grid & Flexbox

### Key Technical Features

#### Signals-based State Management
Used Angular Signals for efficient, fine-grained reactivity in components like the country list and search filters.

#### Advanced API Error Handling
Implemented a centralized error handling strategy in the `CountryService` and UI feedback in components.
```typescript
catchError((error) => {
  let msg = 'Could not load countries. Please try again later.';
  if (error.status === 401) {
    msg = 'Unauthorized access (401). Please check your API token.';
  } else if (error.status === 403) {
    msg = 'Forbidden (403). API limit reached or permission denied.';
  }
  this.errorMessage.set(msg);
  this.isLoading.set(false);
  return of({ data: { objects: [] } });
})
```

### AI Collaboration

This project utilized **Gemini CLI** as a pair-programming partner to:
- **Environment Debugging:** Analyzed `angular.json` to correctly configure development and production environments.
- **UI Improvements:** Implemented the error messaging system in both the logic and the styling.
- **Documentation:** Structured and updated this README to reflect the actual tech stack and features.

## Project Configuration

### Environments

The project uses Angular's environment-specific file replacements:
- **Development:** `src/environments/environment.development.ts` (Used by `ng serve`)
- **Production:** `src/environments/environment.ts` (Used by `ng build`)

### Setup

1. **Clone the repository**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure API Token:**
   Add your API token to the environment files in `src/environments/`.
4. **Run local development server:**
   ```bash
   ng serve
   ```
5. **Build for production:**
   ```bash
   ng build
   ```
