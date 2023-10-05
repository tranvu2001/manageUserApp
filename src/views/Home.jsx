const Home = () => {
  return (
    <>
      <div className="d-sm-flex justify-content-between align-items-center">
        <div>
          <h1>Feature of this app</h1>
          <h3>Api from https://reqres.in/</h3>
          <ol>
            <li>Login</li>
            <li>Add user</li>
            <li>Update user</li>
            <li>Delete user</li>
            <li>List user</li>
            <li>Search user by email</li>
            <li>Sort user by (Id, email, first name, last name)</li>
            <li>Import user from csv file</li>
            <li>Export user from csv file</li>
          </ol>
        </div>
        <div>
          <h3>Please import csv file follows this format</h3>
          <img
            style={{ maxWidth: "100%" }}
            // src="assets/images/formatCSV.png"
            src="./formatCSV.png"
            alt="formatCSV"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
