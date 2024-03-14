import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="laiout">
      <Outlet />
    </div>
    
  );
}

export default Layout;