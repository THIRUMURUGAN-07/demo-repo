function PostJob() {
  return (
    <div>
      <h2>Post a New Job</h2>
      <form className="form">
        <input type="text" placeholder="Job Title" />
        <input type="text" placeholder="Company Name" />
        <textarea placeholder="Job Description"></textarea>
        <button className="btn">Post Job</button>
      </form>
    </div>
  );
}

export default PostJob;
