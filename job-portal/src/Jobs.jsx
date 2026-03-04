import JobCard from "./JobCard";

function Jobs() {
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Google" },
    { id: 2, title: "Backend Developer", company: "Amazon" },
    { id: 3, title: "Software Engineer", company: "Accenture" },
    { id: 4, title: "Devops", company: "zoho" },
    { id: 5, title: "Software Testing", company: "IBM" },
    { id: 6, title: "Full Stack Developer", company: "HCL" },
  ];

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default Jobs;
