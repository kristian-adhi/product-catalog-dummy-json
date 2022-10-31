import ReactDOM from 'react-dom/client';

function render_element(id, react_element) {
    const content = document.getElementById(id);
    const root = ReactDOM.createRoot(content);
  
    root.render(react_element);
}

export { render_element }
