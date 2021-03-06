import { useState } from "react";
import axios from "axios";

const Home = props => {
  const [name, setName] = useState("");
  const [responseMsg, setResponseMsg] = useState();

  const onChangeName = ({ target }) => setName(target.value);

  const onSubmit = async () => {
    const endpoint = `${process.env.SERVICE_URL}/hello`;
    const payload = { name };
    const { data } = await axios.post(endpoint, payload);
    setResponseMsg(data.msg);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh"
      }}
    >
      <div>
        <input onChange={onChangeName} />
        <button onClick={onSubmit}>Submit</button>
      </div>
      {responseMsg &&
        <h1>
          {responseMsg}
        </h1>}
    </div>
  );
};

export default Home;
