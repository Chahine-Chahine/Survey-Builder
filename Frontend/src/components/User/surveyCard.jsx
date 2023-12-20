


// eslint-disable-next-line react/prop-types
const SurveyCard = ({Title, Question}) =>{

    return(
        <div className="container">
            <h1>{Title}</h1>
            <h2>{Question}</h2>
        </div>
    );
}

export default SurveyCard;