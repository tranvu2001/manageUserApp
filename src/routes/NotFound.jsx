import { Alert } from "react-bootstrap";

const NotFound = () => {
  return (
    <>
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>May be you're trying to a wrong link/page</p>
      </Alert>
    </>
  );
};

export default NotFound;
