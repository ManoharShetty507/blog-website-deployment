import userContext from "../context/userContext";
import Base from "../components/Base";

const About = () => {
  return (
    <userContext.Consumer>
      {(object) => (
        <Base>
          <h1>This is about the page</h1>
          <p>We are building the blog website</p>
          {console.log(object)}
          <h1>Welcome User: {object.user.login && object.user.data.name}</h1>
        </Base>
      )}
    </userContext.Consumer>
  );
};

export default About;
