import SurveyCard from "../../components/User/surveyCard";
// import axios from "axios";
// import React from "react";


// const baseUrl = "http://localhost:8000/survey/";

function UserPage(){
    //token authorization
    // const authorization = localStorage.getItem("token");
    // const authorizationToken = "Bearer " + authorization;
    // console.log(authorizationToken);
    // //usestate & axios fetch 
    // const [survey, setSurvey] = React.useState(null);
    // React.useEffect(()=>{
    //     axios.get(baseUrl)
    //     .then((response) => {
    //         setSurvey(response.data);
    //     });
    // }, []);

    // if(!survey){
    //     return console.error("error during fetch");
    // }



    return (
        <>
        {/* <SurveyCard id={survey.id} Title={survey.Title} Question={survey.Question}/> */}
        <SurveyCard id={2} Title={"Preferable Language"} Question={"If you can use one programming language for the rest of your life what would it be?"}/>
        <SurveyCard id={3} Title={"Sports"} Question={"List Your Hobbies from most preferable to the least"}/>
        <SurveyCard id={4} Title={"Favorite instructor"} Question={"Who is Your Favorite instructor?"}/>
        <SurveyCard id={5} Title={"Favorite instructor"} Question={"Who is Your Favorite instructor?"}/>
        <SurveyCard id={6} Title={"Favorite instructor"} Question={"Who is Your Favorite instructor?"}/>
        </>
    );
}

export default UserPage;

