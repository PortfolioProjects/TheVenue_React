# TheVenue_React

An application with idea to present a venue(hall) and different events inside it.
TheVenue is created with React, back-end and database will be added later.

## Libraries, Frameworks

- React - library for building user interfaces,
- material-ui/core, material-ui/icons
- react-reveal, react-scroll, react-slick

## General functionality

- Featured Component - with Carousel and TimeUntil
- Carousel:
  - uses Slider from react-slick to create carousel
- TimeUntil:
  - uses Fade from react-reveal to animate time until event
- VenueNfo:
  - uses Zoom from react-reveal to zoom info elements
- Highlights - with Description and Discount
- Discount:
  - uses Fade, Slide from react-reveal
  - uses reusable component MyButton
- Pricing: uses react-reveal/Zoom and reusable MyButton
- Location: uses google maps iframe to show the location
