import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <Link to={`/jobs/${job.id}`} className="btn">View Details</Link>
    </div>
  );
}

export default JobCard;
