import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchQuotes } from "../../actions/quotes";

import "./index.css";

export const Quotes = () => {
  const state = useSelector((state) => state.quotes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuotes());
    const intervalId = setInterval(() => {
      dispatch(fetchQuotes());
    }, 30000);

    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);

  return !!state.author && state.quote ? (
    <div className="animate__animated animate__backInLeft">
      <p>“{state.quote}”</p>
      <h5>{state.author}</h5>
    </div>
  ) : (
    <></>
  );
};
