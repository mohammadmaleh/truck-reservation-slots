# Truck Reservation Slots

A web application that displays the available time slots for a truck reservation.

## Instructions

### To install dependencies

```bash
pnpm install
```

### To run dev server

```bash
pnpm dev
```

### To run tests

```bash
pnpm test
```

## project's stack

the stack used in the project:

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Pinia](https://pinia.vuejs.org/)
- [Axios](https://github.com/axios/axios)
- [Vue3 Toastify](https://www.npmjs.com/package/vue3-toastify)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)

## Development Approach and Design Decisions

### Architecture

The project follows a modular architecture emphasizing the separation of concerns. The structure is divided into three main components:

- `TruckReservationSlots.vue`: The main container component responsible for displaying the grouped time slots across multiple days.
- `TimeSlotDay.vue`: A child component that renders all the time slots for a specific day.
- `TimeSlot.vue`: A reusable component representing a single time slot, displaying time and capacity information dynamically.

### State Management

The application uses Pinia as the state management solution to maintain a clean and reactive global state:

- Efficient Data Formatting
  - API data is pre-processed into a key-value object structure. This allows SSE updates to the data to run in O(1) time complexity rather than O(n) by avoiding looping over arrays for updates.
- Use of Getters
  - Pinia getters are used to group the time slot data by day. This approach optimizes Vue's rendering by leveraging arrays for iteration, as they are more efficient in this context.

### Design decisions

The following design choices were made to enhance usability and maintainability:

- Time Slot Grouping by Day:
  Time slots are organized under their respective days with clear indications for today and tomorrow to improve readability.
- Live-Update Visual Indicators:
  Each time slot features a dynamic, live-updating indicator that changes color based on its category (e.g., green, yellow, or red) in real time.
- Real-Time Data Display:
  Both time and current capacity of each time slot are updated live, reflecting the latest state changes from the server.
- Error Notifications:
  Integrated Vue3 Toastify to handle and display error messages to users gracefully.

This design prioritizes performance, clarity, and user experience by optimizing data handling, improving rendering efficiency, and ensuring seamless error reporting.

# Thank you for reading
