import React from "react"
import { useRouter } from "next/router";
const indPage = ()=>{
    const router = useRouter();
    const { id } = router.query;
    return (
        <React.Fragment>
            <h1>{id}</h1>
        </React.Fragment>
    )
}
export default indPage;