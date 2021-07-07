import React from "react";
import DashboardHeader from "../../components/dashboard/Header";
import Browse from "./browse";
import { useLocation, Switch, Route } from "react-router-dom";

function Dashboard(props) {
  const {} = useLocation();
  return (
    <div className="bg-gray-100 min-h-screen dark:bg-gray-900">
      <DashboardHeader />
      <Switch>
        <Route path="/dashboard/browse">
          <Browse />
        </Route>
      </Switch>
    </div>
  );
}

export default Dashboard;
