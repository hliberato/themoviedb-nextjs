# Popular Movie Database

A movie search and details web application built with [Next.js](https://nextjs.org), [React](https://react.dev), and [Material UI](https://mui.com/). Search for movies, view ratings, genres, and detailed information using The Movie Database (TMDb) API.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI:** Material UI (MUI)
- **State Management:** Zustand
- **API:** TMDb (The Movie Database)
- **Styling:** SCSS Modules
- **Component Development:** Storybook
- **Testing:** Jest

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/movie-db.git
cd movie-db
npm install
```

### Environment Variables

Update `src/environment/environment.tsx` with your TMDb API key in the `authorization` field.

Example:

```ts
export const environment = {
  // ...other config
  authorization: 'Bearer <YOUR_TMDB_API_KEY>',
};
```

Check https://developer.themoviedb.org/reference/intro/authentication for more details.

## Running the App

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Storybook

This project uses [Storybook](https://storybook.js.org/) for isolated UI component development and testing.

### Running Storybook

```bash
npm run storybook
```

Storybook will start at [http://localhost:6006](http://localhost:6006).

## Building for Production

```bash
npm run build
npm start
```

## Testing

To run unit tests:

```bash
npm test
```

## Project Structure

- `app/` – Next.js app directory (routing, pages, layouts)
- `src/components/` – Reusable React components
  - `__tests__/` – Unit and integration tests for components
- `src/models/` – TypeScript models and types
- `src/services/` – API call logic
- `src/store/` – Zustand state management
- `src/http/` – Axios instance setup
- `src/stories/` – Storybook stories for components
- `src/environment/` – Environment configuration (API keys, etc.)
- `src/mocks/` – Mock data for testing and Storybook

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Material UI Documentation](https://mui.com/)
- [TMDb API Docs](https://developer.themoviedb.org/docs)
- [Storybook Documentation](https://storybook.js.org/docs)
- [Jest Documentation](https://jestjs.io/docs)
