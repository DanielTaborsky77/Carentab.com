import { createRoot } from 'react-dom/client';

import './index.css'; //import index.css
import App from './App'; //import App.js

const container = document.getElementById('result')
const root = createRoot(container)
root.render(<App tab="home" />) //render do divu id=result