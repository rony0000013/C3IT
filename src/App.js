
import React from "react";
import Home from "./component/home/Home";
import Nav from "./component/Wrap/nav/nav";
import Footer from "./component/Wrap/footer/Footer";
import Schedule from "./component/Schedule/Schedule";
import Speaker from "./component/Speaker/Speaker";
import Scope from "./component/Scope/Scope";
import Submission from "./component/Submission/Submission";
import Advisory from "./component/Committee/Advisory/Advisory";
import Technical from "./component/Committee/Technical/Technical";
// import Cochair from "./component/Committee/Co-chair/Co-chair";
import Organasing from "./component/Committee/Organising/Organasing";
// import Patrons from "./component/Committee/Patrons/Patrons";
// import Steering from "./component/Committee/Steering/Steering";
import Registration from "./component/Registration/Registration";
import Attractions from "./component/Attractions/Attractions";
import Sponsors from "./component/Sponsors/Sponsors";
import Loding from "./component/loading/Loding";
import PrevConf from "./component/PrevConf/PrevConf";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BrochureDetail from "./component/home/BrochureDetail";
import GoToTop from "./component/home/GoToTop";

function App() {


    // Disable right-click
    // document.addEventListener('contextmenu', (e) => e.preventDefault());

    // function ctrlShiftKey(e, keyCode) {
    //   return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
    // }

    // document.onkeydown = (e) => {
    //   // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
    //   if (
    //     e.keyCode === 123 ||
    //     ctrlShiftKey(e, 'I') ||
    //     ctrlShiftKey(e, 'J') ||
    //     ctrlShiftKey(e, 'C') ||
    //     (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    //   )
    //     return false;
    // };

  return (
    <Router>
      {/* <Loding /> */}
      <GoToTop />
      <Nav></Nav>
      <Switch>
        <Route path="/schedule">
          <Schedule />
        </Route>
        <Route path="/speakers">
          <Speaker />
        </Route>
        <Route path="/scope">
          <Scope />
        </Route>
        <Route path="/Submission">
          <Submission/>
        </Route>
        <Route path="/Committee/Advisory">
          <Advisory />
        </Route>
        <Route path="/Committee/Technical">
          <Technical />
        </Route>
        <Route path="/Committee/Organising">
          <Organasing />
        </Route>

        {/* <Route path="/Committee/Patrons">
          <Patrons />
        </Route>
        <Route path="/Committee/Co-chair">
          <Cochair />
        </Route>
        <Route path="/Committee/Steering">
          <Steering />
        </Route> */}
        <Route path="/Registration">
          <Registration />
        </Route>
        <Route path="/Attractions">
          <Attractions />
        </Route>
        <Route path="/PrevConf">
          <PrevConf />
        </Route>
        <Route path="/Sponsors">
          <Sponsors />
        </Route>
        <Route path="/brochure-detail">
          <BrochureDetail />
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>

      </Switch>
      <Footer/>
    </Router>

  );
}

export default App;
