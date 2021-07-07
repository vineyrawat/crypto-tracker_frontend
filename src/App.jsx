import React, { lazy, Suspense } from "react";
import ThemeToggleButton from "./components/global/ThemeButton";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LazyProgress from "./components/global/LazyProgress";
const HomePage = lazy(() => import("./pages/homapage"));
const Dashboard = lazy(() => import("./pages/dashboard"));

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-body dark:bg-gray-900  dark:text-gray-200">
        <ThemeToggleButton />
        <Suspense fallback={<LazyProgress />}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login">
              <HomePage view="login" />
            </Route>
            <Route path="/register">
              <HomePage view="register" />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
