import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import DashboardHeader from "../../components/dashboard/Header";
import { getWatchlist } from "../../services/api/Auth";
import LazyProgress from "../../components/global/LazyProgress";
import AssetRequest from "../../services/api/Assets";
import { UserContext } from "../../userContext";
const Watchlist = lazy(() => import("./watchlist"));
const Browse = lazy(() => import("./browse"));

function Dashboard(props) {
  const [view, setView] = useState("watchlist");
  const [user, token, logOut] = useContext(UserContext);
  const [error, setError] = useState(null);
  const [assets, setAssets] = useState(null);
  const [watchlist, setWatchlist] = useState(null);

  const asset = new AssetRequest();

  useEffect(async () => {
    const [data, error] = await asset.getAll();
    if (error) return setError(error.message);
    if (data.data.status !== "success") return setError(data.data.error);
    setAssets(data.data.response.data);
  }, []);

  useEffect(async () => {
    const [data, error] = await getWatchlist(user.email);
    if (error) return console.log(error.message);
    return setWatchlist(data.data);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen dark:bg-gray-900">
      <DashboardHeader
        user={user}
        logOut={logOut}
        view={view}
        setView={setView}
      />
      <Suspense fallback={<LazyProgress />}>
        {view === "watchlist" && (
          <Watchlist user={user} watchlist={watchlist} />
        )}
        {view === "browse" && (
          <Browse assets={assets} error={error} watchlist={watchlist} />
        )}
      </Suspense>
    </div>
  );
}

export default Dashboard;
