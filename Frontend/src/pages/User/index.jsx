import SurveyCard from "../../components/User/surveyCard";





function UserPage(){

    return (
        <>
        <SurveyCard id={1} Title={"Favorite instructor"} Question={"Who is Your Favorite instructor?"}/>
        <SurveyCard id={2} Title={"Preferable Language"} Question={"If you can use one programming language for the rest of your life what would it be?"}/>
        <SurveyCard id={3} Title={"Sports"} Question={"List Your Hobbies from most preferable to the least"}/>
        <SurveyCard id={4} Title={"Favorite instructor"} Question={"Who is Your Favorite instructor?"}/>
        <SurveyCard id={5} Title={"Favorite instructor"} Question={"Who is Your Favorite instructor?"}/>
        <SurveyCard id={6} Title={"Favorite instructor"} Question={"Who is Your Favorite instructor?"}/>
        </>
    );
}

export default UserPage;