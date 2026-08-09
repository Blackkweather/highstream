import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// If a lazy-loaded route chunk fails to fetch (e.g. a visitor has an old tab
// open from before a new deploy replaced the chunk filenames), reload once to
// pick up the current build instead of leaving a crashed blank page.
window.addEventListener('vite:preloadError', () => {
  window.location.reload();
});

createRoot(document.getElementById("root")!).render(<App />);
