import AddProduct from "../pages/Dashboard/AddProduct";
import AddReview from "../pages/Dashboard/AddReview";
import Dashboard from "../pages/Dashboard/Dashboard";
import MakeAdmin from "../pages/Dashboard/MakeAdmin";
import ManageAllOrders from "../pages/Dashboard/ManageAllOrders";
import ManageProducts from "../pages/Dashboard/ManageProducts";
import MyOrders from "../pages/Dashboard/MyOrders";
import MyProfile from "../pages/Dashboard/MyProfile";

const privateRoutes = [    
    {path: "dashboard", name: "Dashboard", Component: Dashboard },
    {path: "myprofile", name: "My Profile", Component: MyProfile },
    {path: "my-orders", name: "My Orders", Component: MyOrders },
    {path: "add-review", name: "Add Review", Component: AddReview },
    {path: "make-admin", name: "Make Admin", Component: MakeAdmin },
    {path: "add-product", name: "Add Product", Component: AddProduct },
    {path: "manage-product", name: "Manage Product", Component: ManageProducts },
    {path: "manage-all-orders", name: "Manage All Orders", Component: ManageAllOrders },
]

export default privateRoutes;