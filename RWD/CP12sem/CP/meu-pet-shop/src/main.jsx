import ReactDOM from 'react-dom';
import App from './App.jsx';  // Se estiver usando .jsx para App
import './index.css';

const root = document.getElementById('app');
const appRoot = ReactDOM.createRoot(root);
appRoot.render(<App />);
