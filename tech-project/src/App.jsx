 import React from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Welcome to My React + Vite App!</h1>
      <p>
        This is some sample content to show on your site. You can edit
        <code>src/App.jsx</code> to add your own content.
      </p>

      <div style={{ marginTop: "30px", fontStyle: "italic" }}>
        React + Vite deployed successfully on Vercel 🚀
      </div>
    </div>
  );
}



export default App
