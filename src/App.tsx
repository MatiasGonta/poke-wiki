import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoadingSpinner } from "./components";
import { lazy, Suspense } from "react";

const Home = lazy(() => import('./pages/Home/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const Error = lazy(() => import('./pages/Error/Error'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-10 min-h-screen w-full bg-[#242424] bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-slate-600 opacity-20 blur-[100px]"></div>
      </div>

      <Suspense fallback={<LoadingSpinner type="NOFLEX" barWidth={125} />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}

export default App