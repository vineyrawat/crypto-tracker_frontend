import { useEffect } from "react";
import np from "nprogress";
import "nprogress/nprogress.css";
np.configure({ showSpinner: false });

const LazyProgress = () => {
  useEffect(() => {
    np.start();
    np.set(0.4);
    return () => {
      np.done();
    };
  });
  return "";
};

export default LazyProgress;
