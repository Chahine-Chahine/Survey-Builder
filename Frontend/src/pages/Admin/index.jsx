import  { useState } from "react";
import "./index.css"
import request from "../../helpers/request_helper";
const AdminPage = () => {
  const [surveyData, setSurveyData] = useState({
    title: "",
    questions: [
      {
        text: "",
        type: "text",
        answers: [{ text: "" }],
      },
    ],
  });

  //handle change
  const handleChange = (event, questionIndex, answerIndex) => {
    const { name, value, type, checked } = event.target;

    setSurveyData((prevData) => {
      if (type === "checkbox") {
        const updatedQuestions = [...prevData.questions];
        updatedQuestions[questionIndex].answers[answerIndex][name] = checked;
        return { ...prevData, questions: updatedQuestions };
      } else {
        return {
          ...prevData,
          [name]: value,
          questions: prevData.questions.map((question, i) =>
            i === questionIndex
              ? {
                  ...question,
                  answers:
                    answerIndex !== undefined
                      ? question.answers.map((answer, j) =>
                          j === answerIndex
                            ? { ...answer, [name]: value }
                            : answer
                        )
                      : question.answers,
                }
              : question
          ),
        };
      }
    });
  };

  //add a question function
  const addQuestion = () => {
    setSurveyData((prevData) => ({
      ...prevData,
      questions: [
        ...prevData.questions,
        {
          text: "",
          type: "text",
          answers: [{ text: "" }],
        },
      ],
    }));
  };

  //add an answer function
  const addAnswer = (questionIndex) => {
    setSurveyData((prevData) => {
      const updatedQuestions = [...prevData.questions];
      updatedQuestions[questionIndex].answers.push({ text: "" });
      return { ...prevData, questions: updatedQuestions };
    });
  };

  //remove question function
  const removeQuestion = (questionIndex) => {
    setSurveyData((prevData) => {
      const updatedQuestions = [...prevData.questions];
      updatedQuestions.splice(questionIndex, 1);
      return { ...prevData, questions: updatedQuestions };
    });
  };

  //remove answer function
  const removeAnswer = (questionIndex, answerIndex) => {
    setSurveyData((prevData) => {
      const updatedQuestions = [...prevData.questions];
      updatedQuestions[questionIndex].answers.splice(answerIndex, 1);
      return { ...prevData, questions: updatedQuestions };
    });
  };

  //handle submit
  const handleSubmit = async () => {
    try {
      const response = await request({
        route: "/",
        method: "POST",
        body: surveyData
      });
      if (response.status === 201) {
        console.log('Survey submitted successfully');
      } else {
        console.error('Failed to submit survey');
      }
    } catch (error) {
      console.error('An error occurred while submitting survey:', error);
    }
  };

  return (
    <div>
      <h1>Create Survey</h1>
      <form>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={surveyData.title}
            onChange={(e) => handleChange(e)}
          />
        </label>

        {surveyData.questions.map((question, questionIndex) => (
          <div key={questionIndex}>
            <label>
              Question:
              <input
                type="text"
                name="text"
                value={question.text}
                onChange={(e) => handleChange(e, questionIndex)}
              />
            </label>
            <label>
              Type:
              <select
                name="type"
                value={question.type}
                onChange={(e) => handleChange(e, questionIndex)}
              >
                <option value="text">Text</option>
                <option value="radio">Radio</option>
                <option value="checkbox">Checkbox</option>
              </select>
            </label>

            {question.answers.map((answer, answerIndex) => (
              <div key={answerIndex}>
                <label>
                  Answer:
                  <input
                    type="text"
                    name="text"
                    value={answer.text}
                    onChange={(e) => handleChange(e, questionIndex, answerIndex)}
                  />
                </label>

                {question.type === "checkbox" && (
                  <label>
                    Correct:
                    <input
                      type="checkbox"
                      name="correct"
                      checked={answer.correct}
                      onChange={(e) =>
                        handleChange(e, questionIndex, answerIndex)
                      }
                    />
                  </label>
                )}

                <button
                  type="button"
                  onClick={() => removeAnswer(questionIndex, answerIndex)}
                >
                  Remove Answer
                </button>
              </div>
            ))}

            <button type="button" onClick={() => addAnswer(questionIndex)}>
              Add Answer
            </button>

            <button
              type="button"
              onClick={() => removeQuestion(questionIndex)}
            >
              Remove Question
            </button>
          </div>
        ))}

        <button type="button" onClick={addQuestion}>
          Add Question
        </button>

        <button type="button" onClick={handleSubmit}>
          Submit Survey
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
