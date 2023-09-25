import { createRoot } from 'react-dom/client';

import { App } from '@/app/App';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
