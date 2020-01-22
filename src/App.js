import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Table from "./Table";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [direction, setDirection] = useState("desc");
  const [column, setColumn] = useState(null);
  const urlSmallData =
    "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(urlSmallData);
        const data = await response.json();
        setData(data);
      } catch (err) {
        setIsError(true);
        setError(err.message);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [error]);
  function compareBy(key) {
    return function(a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
  function sortBy(key) {
    setDirection(direction === "desc" ? "asc" : "desc");
    const arrayCopy = data.concat();
    arrayCopy.sort(compareBy(key));
    if (direction === "asc") {
      setData(arrayCopy);
    } else {
      arrayCopy.reverse();
      setData(arrayCopy);
      setColumn(key);
    }
  }
  const setArrow = key => {
    let className = "sort-direction";

    if (key === column) {
      className += direction === "asc" ? " asc" : " desc";
    }

    console.log(className);

    return className;
  };

  return (
    <div className="container">
      {isLoading ? (
        <Loading />
      ) : (
        <Table data={data} setArrow={setArrow} sortBy={sortBy} />
      )}
      {isError && (
        <div>
          <p>Ошибка: {error}</p>
          <h2>Извините, что-то пошло не так, попробуйте ещё раз</h2>
        </div>
      )}
    </div>
  );
}

export default App;
