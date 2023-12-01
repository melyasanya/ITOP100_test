import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Convert } from "./components/Convert/Convert";
import { Header } from "./components/Header/Header";
import { fetchCurrencies } from "./redux/operations";

import "./App.css";

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
