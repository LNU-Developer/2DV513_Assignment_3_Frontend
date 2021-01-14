import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps <{city: string}> {
    
}

 const CityList: React.FC<Props> = ({match}) => {

    useEffect(() => {
        
    }, [])

    console.log(match);
    
    return (
        <div>
            <h1>hello {match.params.city}</h1>
        </div>
    )
}

export default CityList