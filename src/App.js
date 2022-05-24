import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminRoute from "./authentication/AdminRoute";
import PrivateRoute from "./authentication/PrivateRoute";
import Navbar from "./components/Navbar";
import publicRoutes from "./routes/publicRoutes";
import privateRoutes from "./routes/privateRoutes";
import Dashboard from "./pages/Dashboard/Dashboard";
import adminRoutes from "./routes/adminRoutes";
import MyProfile from "./pages/Dashboard/MyProfile";
import MyOrders from "./pages/Dashboard/MyOrders";
import AddReview from "./pages/Dashboard/AddReview";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import AddProduct from "./pages/Dashboard/AddProduct";
import ManageProducts from "./pages/Dashboard/ManageProducts";
import ManageAllOrders from "./pages/Dashboard/ManageAllOrders";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        <Route element={<PrivateRoute />}>
          {privateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>

        <Route path="dashboard" element={<Dashboard />} >
          <Route index element={<MyProfile/>}></Route>     
          <Route path="my-orders" element={<MyOrders/>}></Route>
          <Route path="add-review" element={<AddReview/>}></Route>
          <Route path="make-admin" element={<MakeAdmin/>}></Route>
          <Route path="add-product" element={<AddProduct/>}></Route>
          <Route path="manage-product" element={<ManageProducts/>}></Route>
          <Route path="manage-all-orders" element={<ManageAllOrders/>}></Route>
        </Route>


      </Routes>
    </div>
  );
}

export default App;
