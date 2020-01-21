import React, { useEffect, useState } from "react";
import Loading from "./Loading";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const urlSmallData =
    "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
  useEffect(() => {
    setIsLoading(true);
    fetch(urlSmallData)
      .then(res => res.json())
      .then(data => console.log(data));
    setIsLoading(false);
  }, []);

  return (
    <div className="container">{isLoading ? <Loading /> : <p>loaded</p>}</div>
  );
}

export default App;
