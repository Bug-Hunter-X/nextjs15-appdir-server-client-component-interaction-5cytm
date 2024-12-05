# Next.js 15 app directory - Unexpected behavior when using Server Components with Client Components

This repository demonstrates an unexpected behavior in Next.js 15's app directory when using Server Components in conjunction with Client Components.  The issue is observed when data fetching or state management across these component types is not handled correctly.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Observe the unexpected behavior (described in more detail below).

## Expected Behavior

The expected behavior is for the client component to receive the data properly and render the information correctly.

## Actual Behavior

Instead, [Describe the actual behavior observed].

## Potential Solution

The potential solution involves correctly managing data fetching and state updates when using Server and Client Components.  Strategies such as using `use` or a context API, or refactoring the component structure to leverage React's features, might be needed.