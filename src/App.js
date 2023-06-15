import { useState } from "react";


function App() {
  const [selectedPage, setSelectedPage] = useState('home');

  return (
    <div className="App">
      <h1>My Portfolio</h1>
    <h3>Full Stack Developer</h3>
    </div>
  );
}

export default App;
