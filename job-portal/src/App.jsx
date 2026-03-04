import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Jobs from "./Jobs";
import JobDetails from "./JobDetails";
import PostJob from "./PostJob";
import PostResume from "./PostResume";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/post-resume" element={<PostResume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
