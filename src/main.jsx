import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App/App.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
