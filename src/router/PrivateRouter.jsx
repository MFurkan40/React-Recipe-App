import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = ({ auth }) => {
  return <div>{auth ? <Outlet /> : <Navigate to={"/login"} />}</div>;
};

export default PrivateRouter;
