// import './App.css';
import AddNewBlog from "./Pages/AddNewBlog"
// import Blogs from "./Components/Blogs";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"

// import { Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
{/*<Router> <Routes>
              <Route path='/' exact component={Home} />
              <Route path='/blog/:id' component={Blogs} />
            </Routes>
       </Router>
           
  */}

    </div>
  );
}

export default App;





// import Topbar from "./components/topbar/Topbar";
// import Homepage from "./pages/homepage/Homepage";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Settings from "./pages/settings/Settings";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// function App() {
//   const currentUser = true;
//   return (
//     <Router>
//       <Topbar />
//       <Switch>
//         <Route exact path="/">
//           <Homepage />
//         </Route>
//         <Route path="/posts">
//           <Homepage />
//         </Route>
//         <Route path="/register">
//           {currentUser ? <Homepage /> : <Register />}
//         </Route>
//         <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
//         <Route path="/post/:id">
//           <Single />
//         </Route>
//         <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
//         <Route path="/settings">
//           {currentUser ? <Settings /> : <Login />}
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;