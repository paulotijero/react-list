import React from "react";

import { allCharacters, findCharacters } from "../services/character";

const DataContext = React.createContext();

function DataProvider(props) {
  const [data, setData] = React.useState([]);
  const [filter, setFilter] = React.useState({
    name: "",
    gender: "",
    status: ""
  });

  React.useEffect(() => {
    allCharacters().then(list => setData(list));
  }, []);

  React.useEffect(() => {
    findCharacters(filter).then(list => setData(list));
  }, [filter]);

  function handleKey(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      setFilter({
        ...filter,
        name: filter.name + String.fromCharCode(event.keyCode)
      });
    } else if (event.keyCode === 8 && filter.name.length !== 0) {
      setFilter({ ...filter, name: filter.name.slice(0, -1) });
    }
  }

  function handleButton(event) {
    event.preventDefault();
    setFilter({ ...filter, [event.target.name]: event.target.value });
  }

  const value = {
    info: data.info,
    results: data.results,
    handleKey: handleKey,
    handleButton: handleButton
  };

  return <DataContext.Provider value={value} {...props} />;
}

export { DataProvider, DataContext };
