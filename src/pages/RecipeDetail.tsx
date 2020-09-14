import React from "react";
import {useParams
} from "react-router-dom";
interface Props {}

const RecipeDetail: React.FC<Props> = props => {
  let { id } = useParams();
  
  return (<>I am Nice Detail</>);
}

export default RecipeDetail;
