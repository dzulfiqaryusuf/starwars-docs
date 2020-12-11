import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterList from "./CharacterList";
import { Switch, Route, Link, useParams } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json"
      );
      setData(result.data);
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <CharacterList data={data} />} />
        <Route path="/:id" component={CharacterDetail} />
      </Switch>
    </div>
  );
};

export default App;
