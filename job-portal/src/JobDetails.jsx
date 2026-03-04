import { useParams } from "react-router-dom";

function JobDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Job Details</h2>
      <p>Job ID: {id}</p>
      <p>Description about the job...</p>
      <button className="btn">Apply Now</button>
    </div>
  );
}

export default JobDetails;
