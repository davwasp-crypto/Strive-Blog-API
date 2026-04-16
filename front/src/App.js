import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://my-backend-gfw.onrender.com/api/test")
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div>
      <h1>Frontend collegato 🚀</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;