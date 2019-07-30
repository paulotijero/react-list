import React from "react";

import { listCharacters } from "../services/character";

const DataContext = React.createContext();

function DataProvider(props) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    listCharacters().then(list => setData(list));
  }, []);

  const value = {
    info: data.info,
    results: data.results
  };

  return <DataContext.Provider value={value} {...props} />;
}

export { DataProvider, DataContext };
