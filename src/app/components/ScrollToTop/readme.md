# ScrollToTopButton Component

## Overview

The `ScrollToTopButton` component provides a floating button that appears when the user scrolls down a specified distance (200px). The button fades in and out smoothly, and when clicked, it scrolls the user back to the top of the page with a smooth animation.

## Dependencies

- **React**: Used to manage the component lifecycle and state.
- **react-icons (FaArrowUp)**: Used for displaying an up arrow icon in the button.
- **lodash (throttle)**: Throttles the scroll event handler for performance optimization.

## Usage

This component can be used in any React page or layout where you'd like to offer a scroll-to-top functionality.

## Props

The component does not accept any external props.

## State

- **isVisible (boolean)**: Tracks whether the scroll-to-top button is visible. It is set to `true` when the user scrolls past 200px and `false` otherwise.

## Methods

### handleScroll

This function determines the current scroll position and toggles the visibility of the button. It is throttled to run less frequently to avoid performance issues on pages with a lot of scrolling.

### scrollToTop

This function scrolls the page back to the top with a smooth animation. It is triggered when the user clicks the scroll-to-top button.

## Styling

The button is styled using Tailwind CSS classes to create a rounded, floating button with smooth transitions:

- **Positioning**: `fixed bottom-8 right-8` places the button at the bottom-right corner of the screen.
- **Color**: Background color changes on hover.
- **Opacity Transition**: The button smoothly fades in and out based on the user's scroll position.

## Example

```tsx
import ScrollToTopButton from './components/ScrollToTopButton';

const Page = () => (
  <div>
    {/* Page content */}
    <ScrollToTopButton />
  </div>
);
