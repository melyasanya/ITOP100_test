import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Convert } from "./components/Convert/Convert";
import { Header } from "./components/Header/Header";
import { fetchCurrencies } from "./redux/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Convert />
    </>
  );
}

export default App;
