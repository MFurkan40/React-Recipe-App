import { Outlet, useNavigate } from "react-router-dom";

const PrivateRouter2 = ({ auth }) => {
  const navigate = useNavigate();

  if (auth) {
    navigate("/");
  } else {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
};
export default PrivateRouter2;
