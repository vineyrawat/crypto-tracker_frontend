import React, { lazy, Suspense } from "react";
import DashboardHeader from "../../components/dashboard/Header";
import { useLocation, Switch, Route } from "react-router-dom";
import LazyProgress from "../../components/global/LazyProgress";
const AssetDetail = lazy(() => import("./AssetDetail"));
const Browse = lazy(() => import("./browse"));

function Dashboard(props) {
  const {} = useLocation();
  return (
    <div className="bg-gray-100 min-h-screen dark:bg-gray-900">
      <DashboardHeader />
      <Suspense fallback={<LazyProgress />}>
        <Switch>
          <Route exact path="/dashboard/browse">
            <Browse />
          </Route>
          <Route path="/dashboard/browse/:id">
            <AssetDetail />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default Dashboard;
