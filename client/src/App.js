import React from 'react';
import useAuth from './hooks/useAuth';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
import Cities from './pages/Cities/Cities';
import FAQ from './pages/FAQ/FAQ';
import Register from './pages/Register/Register';
import Regulations from './pages/Regulations/Regulations';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import EditProfile from './pages/EditProfile/EditProfile';
import { Routes, Route, Navigate } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import Dashboard from './pages/Dashboard/Dashboard';
import NewPost from './pages/NewPost/NewPost';
import NotFound from './components/NotFound';
import Unauthorized from './components/Unauthorized';
import Layout from './components/Layout';

const ROLES = {
  User: 3,
  Mod: 2,
  Admin: 1,
};

function App() {
  const { auth } = useAuth();

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* Public Home | Private Dashboard  */}

          {Object.keys(auth).length > 0 ? (
            <Route
              element={
                <RequireAuth
                  allowedRoles={[ROLES.Admin, ROLES.Mod, ROLES.User]}
                />
              }
            >
              <Route index element={<Dashboard />} />
            </Route>
          ) : (
            <Route index element={<Home />} />
          )}

          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='cities' element={<Cities />} />
          <Route path='regulations' element={<Regulations />} />

          <Route path='post/:id' element={<Post />} />

          {/* PRIVATE FOR MANY */}
          <Route
            element={
              <RequireAuth
                allowedRoles={[ROLES.Admin, ROLES.Mod, ROLES.User]}
              />
            }
          >
            {/* <Route path='/:id' element={<Dashboard />} /> */}
            <Route path='profile/:username' element={<Profile />} />
            <Route path='profile/:username' element={<Profile />} />
            <Route path='profile/:username/edit' element={<EditProfile />} />
            <Route path='post/create' element={<NewPost />} />
          </Route>

          {/* Private for ADMINS */}
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path='faq' element={<FAQ />} />
          </Route>
          {/* Private */}

          {/* Errors */}
          <Route path='unauthorized' element={<Unauthorized />} />
          <Route path='404' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
