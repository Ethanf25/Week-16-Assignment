import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering
import App from './components/App'; // Import main App component
import './styles/app.css'; // Import app CSS styles

ReactDOM.createRoot(document.getElementById('root')!).render( // Create React root and render inside element with id 'root'
  <React.StrictMode> {/* Enable strict mode for highlighting potential issues */}
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
