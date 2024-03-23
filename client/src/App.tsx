import { ThemeProvider } from "@/components/theme-provider";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Toaster } from "sonner";
import AllRoutes from "./AllRoutes";
import Header from "./components/Header";
import { useGetUserDetailsQuery } from "./redux/slices/api";
import { updateCurrentUser, updateIsLoggedIn } from "./redux/slices/appSlice";

function App() {
  const { data, error } = useGetUserDetailsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(updateCurrentUser(data));
      dispatch(updateIsLoggedIn(true));
    } else if (error) {
      dispatch(updateCurrentUser({}));
      dispatch(updateIsLoggedIn(false));
    }
  }, [data, dispatch, error]);

  return (
    <>
      <Toaster position="bottom-right" theme="dark" />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <AllRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
