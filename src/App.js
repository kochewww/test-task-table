import React, { useState } from "react";
import Loading from "./Loading";
import Table from "./Table";
import AdditionalInfo from "./AdditionalInfo";
import DataSelector from "./DataSelector";
import Search from "./Search";
import AddUserForm from "./AddUserForm";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [direction, setDirection] = useState("desc");
  const [column, setColumn] = useState(null);
  const [row, setRow] = useState(null);
  const [isDataSelected, setIsDataSelected] = useState(false);
  const [search, setSearch] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (err) {
      setIsError(true);
      setError(err.message);
      console.log(error);
    }
    setIsLoading(false);
  }
  /* Sorting*/
  function compareBy(key) {
    return function(a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
  function sortBy(key) {
    setDirection(direction === "asc" ? "desc" : "asc");
    const arrayCopy = data.concat();
    arrayCopy.sort(compareBy(key));
    if (direction === "asc") {
      setData(arrayCopy);
    } else {
      arrayCopy.reverse();
      setData(arrayCopy);
    }
    setColumn(key);
  }
  const setArrow = key => {
    let className = "sort-direction";

    if (key === column) {
      className += direction === "asc" ? " asc" : " desc";
    }

    return className;
  };
  const onSelect = row => {
    setRow(row);
  };
  function onChoose(url) {
    setIsDataSelected(true);
    setIsLoading(true);
    fetchData(url);
  }
  /*Searching*/
  const searchHandler = search => {
    setCurrentPage(1);
    setSearch(search);
  };
  const getFilteredData = () => {
    if (!search) {
      return data;
    }

    return data.filter(person => {
      return (
        person["firstName"].toLowerCase().includes(search.toLowerCase()) ||
        person["lastName"].toLowerCase().includes(search.toLowerCase()) ||
        person["email"].toLowerCase().includes(search.toLowerCase()) ||
        person["id"].toString().includes(search) ||
        person["phone"].includes(search)
      );
    });
  };
  const filteredData = getFilteredData();
  /*Adding a person*/
  const addPerson = newPerson => {
    setData(prevData => [newPerson, ...prevData]);
  };
  if (!isDataSelected) {
    return (
      <div className="container">
        <DataSelector onChoose={onChoose} />
      </div>
    );
  }
  return (
    <div className="container">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <AddUserForm addPerson={addPerson} />
          <Search onSearch={searchHandler} />
          <Table
            data={filteredData}
            setArrow={setArrow}
            sortBy={sortBy}
            onSelect={onSelect}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}

      {row && <AdditionalInfo person={row} />}
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
