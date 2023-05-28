import { MDBCol } from "mdb-react-ui-kit";
import "../styles/Styles.css";
import SideNav from "./SideNav";
import Routing from "./Routing";

const Layout = () => {
  return (
    <>
      <div className="d-flex content">
        <MDBCol lg={2} className="sideNav">
          <SideNav />
        </MDBCol>
        <MDBCol lg={10} className="pageContent">
          <Routing />
        </MDBCol>
      </div>
    </>
  );
};

export default Layout;
