import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { fetchQuotes } from "../../actions/quotes";

import './index.css'

export const Quotes = () => {

    const state = useSelector((state) => state.quotes.payload);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch( fetchQuotes() )

        setInterval(() => {
            dispatch( fetchQuotes() );
        }, 30000)

    }, [dispatch]);

    return (
        <div className="animate__animated animate__backInLeft">
            <p>
                “{state?.quote}”
            </p>
            <h4>
                {state?.author}
            </h4>
        </div>
    )
}