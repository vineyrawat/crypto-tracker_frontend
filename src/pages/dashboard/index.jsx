import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import DashboardHeader from "../../components/dashboard/Header";
import { Switch, Route, useHistory } from "react-router-dom";
import LazyProgress from "../../components/global/LazyProgress";
import { UserContext } from "../../userContext";
const Watchlist = lazy(() => import("./watchlist"));
const AssetDetail = lazy(() => import("./AssetDetail"));
const Browse = lazy(() => import("./browse"));

function Dashboard(props) {
  const [view, setView] = useState("watchlist");
  const [user, token, logOut] = useContext(UserContext);
  return (
    <div className="bg-gray-100 min-h-screen dark:bg-gray-900">
      <DashboardHeader
        user={user}
        logOut={logOut}
        view={view}
        setView={setView}
      />
      <Suspense fallback={<LazyProgress />}>
        {view === "watchlist" && <Watchlist />}
        {view === "browse" && <Browse />}
        {view === "profile" && "Profile"}
      </Suspense>
    </div>
  );
}

export default Dashboard;
