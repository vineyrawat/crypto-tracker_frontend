import React, { lazy, Suspense, useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LazyProgress from "./components/global/LazyProgress";
import { UserContext } from "./userContext";
const HomePage = lazy(() => import("./pages/homapage"));
const Dashboard = lazy(() => import("./pages/dashboard"));

function App() {
  // const [user, token, logOut] = useContext(UserContext);
  const [user, token] = useContext(UserContext);

  return (
    <BrowserRouter>
      <div className="min-h-screen font-body dark:bg-gray-900  dark:text-gray-200">
        <Suspense fallback={<LazyProgress />}>
          <Switch>
            <Route path="/" exact>
              {user && token ? <Redirect to="/dashboard" /> : <HomePage />}
            </Route>
            <Route path="/dashboard">
              {user && token ? <Dashboard /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login">
              {user && token ? (
                <Redirect to="/dashboard" />
              ) : (
                <HomePage view="login" />
              )}
            </Route>
            <Route path="/register">
              {user && token ? (
                <Redirect to="/dashboard" />
              ) : (
                <HomePage view="register" />
              )}
            </Route>
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
