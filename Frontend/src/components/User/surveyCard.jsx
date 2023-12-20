import "./surveyCard.css"
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const SurveyCard = ({id, Title, Question}) =>{

    return(
        <div className="container">
            <h1>{Title}</h1>
            <h2>{Question}</h2>
            <Link to={`/survey/${id}`}>Take Survey</Link>
        </div>
    );
}

export default SurveyCard;