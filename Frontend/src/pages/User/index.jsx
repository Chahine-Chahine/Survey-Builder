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


// Fetch with bugs


// import { useState, useEffect } from "react";
// import SurveyCard from "../../components/User/surveyCard";
// import request from "../../helpers/request_helper"; 

// function UserPage() {
//   const [surveys, setSurveys] = useState([]);

//   useEffect(() => {
//     const fetchSurveys = async () => {
//       try {
//         const response = await request({
//           route: "/", 
//           method: "GET",
//         });

//         if (response.status === 200) {
//           setSurveys(response.data.surveys);
//           console.log('Surveys fetched successfully');
//         } else {
//           console.error('Failed to fetch surveys');
//         }
//       } catch (error) {
//         console.error('An error occurred while fetching surveys:', error);
//       }
//     };

//     fetchSurveys();
//   }, []); 

//   return (
//     <>
//       {surveys.map((survey) => (
//         <SurveyCard
//           key={survey._id}
//           id={survey._id}
//           Title={survey.title}
//           Question={survey.questions.length > 0 ? survey.questions[0].text : ""}
//         />
//       ))}
//     </>
//   );
// }

// export default UserPage;
