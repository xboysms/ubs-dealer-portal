import Dashboard from "@material-ui/icons/Dashboard";
import Storefront from "@material-ui/icons/Storefront";
import DirectionsCar from "@material-ui/icons/DirectionsCar";
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import Orders from "../component/Orders";
import DashboardPage from "../component/Dashboard";
import VersionList from "../component/VersionList";
import Deposits from "../component/Deposits";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    // icon: Dashboard,
    component: DashboardPage,
    // layout: "/admin"
  },
  {
    path: "/adsites",
    name: "Advertisement Sites",
    // icon: Storefront,
    component: Orders,
    // layout: "/admin"
  },
  {
    path: "/users",
    name: "User Management",
    // icon: PeopleAlt,
    component: Deposits,
    // layout: "/admin"
  },
  {
    path: "/stocks",
    name: "Stocks",
    // icon: DirectionsCar,
    component: VersionList
  }
];

export default dashboardRoutes;