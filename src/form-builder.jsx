import React from "react";
import { ReactFormBuilder, ReactFormGenerator } from "react-form-builder2";
import "react-form-builder2/dist/app.css";

function FormBuilder() {
  const [data, setData] = React.useState();
  const [answerData, setAnswerData] = React.useState(null);

  const getData = () => {
    const data = localStorage.getItem("json");
    const jsonData = JSON.parse(data).task_data;
    console.log("get data: ", jsonData);
    setData(jsonData);
    return jsonData;
  };

  const onLoad = () => {
    return new Promise(getData);
  };

  const onPost = (data) => {
    localStorage.setItem("json", JSON.stringify(data));
    setData(data.task_data);
  };

  return (
    <React.Fragment>
      <ReactFormBuilder onPost={onPost} onLoad={onLoad} />
      <hr />
      <h6>Preview</h6>
      {data && (
        <ReactFormGenerator
          download_path=""
          back_action="/"
          back_name="Back"
          answer_data={{}}
          action_name="Save"
          form_action="/"
          form_method="POST"
          onSubmit={(data) => setAnswerData(data)}
          variables={undefined}
          data={data}
        />
      )}
      <br />
      <h6>Answer data read only field</h6>
      {answerData && (
        <ReactFormGenerator
          download_path=""
          back_action="/"
          back_name="Back"
          answer_data={answerData}
          action_name="Save"
          form_action="/"
          form_method="POST"
          onSubmit={(data) => localStorage.setItem("data", data)}
          variables={undefined}
          read_only={true}
          hide_actions={true}
          data={data}
        />
      )}
    </React.Fragment>
  );
}

export default FormBuilder;
