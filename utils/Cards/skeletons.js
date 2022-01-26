import Skeleton from 'react-loading-skeleton';
import React from 'react';
const Skeletons = ({count})=>{
    let res = [];
    for(let i = 0; i < count; i++){
        res.push(<Skeleton baseColor="#aaaaaa50" highlightColor="#dddddd70" borderRadius={10} height={200} width={350}/>);
    }
    return (
        <>{res}</>
    )
}
export default Skeletons;