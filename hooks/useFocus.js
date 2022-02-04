import React, {useRef} from "react";
// Custom hook
const useFocus = () => {
    const ref = useRef(null)
    const setFocus = (st) => {
        if(st == true) ref.current.focus();
        console.log(st)
        if(st == false) ref.current.blur();
    }
    return [ ref, setFocus ] 
}
export default useFocus;