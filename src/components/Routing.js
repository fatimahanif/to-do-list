import { Route, Routes } from "react-router-dom";
import AllTasks from "./AllTasks";
import PendingTasks from "./PendingTasks";
import ImportantTasks from "./ImportantTasks";
import CompletedTasks from "./CompletedTasks";
import NotFound from "./NotFound";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<AllTasks />} />
        <Route exact path="/all" element={<AllTasks />} />
        <Route exact path="/pending" element={<PendingTasks />} />
        <Route exact path="/important" element={<ImportantTasks />} />
        <Route exact path="/completed" element={<CompletedTasks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default Routing;
