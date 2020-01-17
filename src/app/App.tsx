import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from '../features/auth/Login';
import Register from "../features/auth/Register";
import Members from "../features/members/Members";
import Header from '../shared/components/Header';
import NewMember from "../features/members/NewMember";
import Albums from '../features/albums/Albums';
import MemberAlbums from "../features/albums/MemberAlbums";
import {membersSlice} from "../features/members/members.slice";
import {useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(membersSlice.actions.membersLoaded([
      {
        id: 4,
        name: 'Nir Kaufman',
        email: 'nir@500tech.com',
        city: 'New York',
        phone: '12341234',
        picture: "https://randomuser.me/api/portraits/thumb/men/6.jpg"
      }
    ]))
  },[]);
  return (
      <Router>
          <div className="container">
          <Header />
          <Switch>
              <Route path="/login"><Login /></Route>
              <Route path="/register"><Register/></Route>

              <Route exact path="/members"><Members/></Route>
              <Route exact path="/members/new"><NewMember/></Route>

              <Route exact path="/albums"><Albums/></Route>
              <Route exact path="/albums/group"><MemberAlbums/></Route>

              <Redirect from="*" to="/login"/>
          </Switch>
          </div>
      </Router>
  );
}

export default App;
