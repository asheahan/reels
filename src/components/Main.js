import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from './search/Search';
import MovieDetail from './movie-detail/MovieDetail';

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/movies/:id" component={MovieDetail} />
      </Switch>
    </main>
  );
}

export default Main;
