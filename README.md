# 🍅 Green Tomato

A minimalist Pomodoro timer built with React. Helps you stay focused with automatic work/break cycles and animated progress tracking.

![Green Tomato Timer](screenshot.png)

## Features

- **Animated progress ring** — visual countdown around the clock face
- **Work / Break cycles** — automatically switches between work and break sessions (break = work time / 5)
- **Customizable timer** — adjust work duration from 5 to 60 minutes via slider
- **Session tracking** — keeps count of completed work sessions
- **Pause & Reset** — full control over the timer at any time

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- SVG animations

## Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/green-tomato.git

# Install dependencies
cd green-tomato
npm install

# Start development server
npm run dev
```

## How It Works

1. Set your desired work duration using the slider (default: 25 min)
2. Hit **Start** to begin the session
3. The green ring fills up as time passes
4. When the session ends, the timer automatically switches to a break
5. Repeat and track your sessions

## Live Demo

[green-tomato.vercel.app](https://green-tomato.vercel.app)
