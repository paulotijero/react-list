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

  function handleChange(event) {
    if (filter[event.target.name] === event.target.value) {
      setFilter({
        ...filter,
        [event.target.name]: ""
      });
    } else {
      setFilter({
        ...filter,
        [event.target.name]: event.target.value
      });
    }
  }

  const value = {
    info: data.info,
    results: data.results,
    handleChange: handleChange
  };

  return <DataContext.Provider value={value} {...props} />;
}

export { DataProvider, DataContext };
