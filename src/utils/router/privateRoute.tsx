import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {
    const auth = 'ROOT';
    return (
        process.env.REACT_APP_ROLE === auth ? <Outlet/> : <Navigate to="login"/>
    );
};

export default PrivateRoute;