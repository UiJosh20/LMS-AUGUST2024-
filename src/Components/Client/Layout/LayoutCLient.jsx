import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const LayoutCLient = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        /* From Uiverse.io by alexruix */
        <div class="loader"></div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default LayoutCLient;
