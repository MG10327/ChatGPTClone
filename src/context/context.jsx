import { createContext } from "react";
import PropTypes from 'prop-types';
import run from "../config/gemini";
import { useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [previousPrompts, setPreviousPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const delayPara = (index, nextWork) => {

    }


    const onSent = async(prompt) => {

        setResultData("") //removes the previous response from the state varialbe
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const response = await run(input)
        let responseArray = response.split("**")
        let newResponse;
        for(let i=0; i < responseArray.length; i++){
            if(i === 0 || i%2 !== 1) {
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>" +responseArray[i] + "</b>"
            }
        }
        let newResponse2 = newResponse.split("*").join("</br> </br>")
        setResultData(newResponse2)
        setLoading(false)
        setInput("")
    }

    const contextValue = {
        previousPrompts,
        setPreviousPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider