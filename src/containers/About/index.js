import React from "react";
import "./style.css";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";

const AboutUs = () => {
  return (
    <Layout>
      <Card width={"68%"}>
        <h3>About</h3>
        <p>
          This is a simple boiler plate for a Blog developed in React. It uses
          React States, React Hooks and React Router. It should also provide an
          insight how data can be used from a JSON format.
        </p>
        <p>
          This project should help you understand the basic folder and file
          structure for a React project. Please feel free to use the template to
          build your own Blog App and add more features to it.
        </p>
        <p>
          This is not using any styling libraries like Boottsrap or Material UI.
          This was done solely to help one understand the basic principles of
          React and how you can manage link between multiple pages using 'React
          Router' and 'React Hooks'.
        </p>
      </Card>
    </Layout>
  );
};

export default AboutUs;
