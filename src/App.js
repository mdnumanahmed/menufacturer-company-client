import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import AdminRoute from "./authentication/AdminRoute";
import PrivateRoute from "./authentication/PrivateRoute";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/Dashboard/AddProduct";
import AddReview from "./pages/Dashboard/AddReview";
import Dashboard from "./pages/Dashboard/Dashboard";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import ManageAllOrders from "./pages/Dashboard/ManageAllOrders";
import ManageProducts from "./pages/Dashboard/ManageProducts";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import privateRoutes from "./routes/privateRoutes";
import publicRoutes from "./routes/publicRoutes";

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
          <Route path="make-admin" element={<AdminRoute><MakeAdmin/></AdminRoute>}></Route>
          <Route path="add-product" element={<AdminRoute><AddProduct/></AdminRoute>}></Route>
          <Route path="manage-product" element={<AdminRoute><ManageProducts/></AdminRoute>}></Route>
          <Route path="manage-all-orders" element={<AdminRoute><ManageAllOrders/></AdminRoute>}></Route>
        </Route>
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
