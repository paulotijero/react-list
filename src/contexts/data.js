import React from "react";

import { allCharacters, findCharacters } from "../services/character";

const DataContext = React.createContext();

function DataProvider(props) {
  const [data, setData] = React.useState([]);
  const [find, setFind] = React.useState("");

  React.useEffect(() => {
    allCharacters().then(list => setData(list));
  }, []);

  React.useEffect(() => {
    findCharacters(find).then(list => setData(list));
  }, [find]);

  function handleKey(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      setFind(find + String.fromCharCode(event.keyCode));
    } else if (event.keyCode === 8 && find.length !== 0) {
      setFind(find.slice(0, -1));
    }
  }

  const value = {
    info: data.info,
    results: data.results,
    handleKey: handleKey
  };

  return <DataContext.Provider value={value} {...props} />;
}

export { DataProvider, DataContext };
