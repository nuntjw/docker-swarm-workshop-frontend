import { useState, Fragment } from "react";
import axios from "axios";
import Head from "next/head";

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
    <Fragment>
      <Head>
        <title>Workshop</title>
      </Head>
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
          <button onClick={onSubmit}>Submit Your Name</button>
        </div>
        {responseMsg &&
          <h1>
            {responseMsg}
          </h1>}
      </div>
    </Fragment>
  );
};

export default Home;
