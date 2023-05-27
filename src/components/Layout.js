import { MDBCol } from "mdb-react-ui-kit";
import "../styles/Styles.css";

const Layout = () => {
  return (
    <>
      <div className="d-flex content">
        <MDBCol lg={2} className="sideNav">
          <p>All</p>
          <p>Pending</p>
          <p>Important</p>
          <p>Completed</p>
        </MDBCol>
        <MDBCol lg={10} className="pageContent">
          My Tasks
        </MDBCol>
      </div>
    </>
  );
};

export default Layout;
