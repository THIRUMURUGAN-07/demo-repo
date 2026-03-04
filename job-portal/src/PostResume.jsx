function PostResume() {
  return (
    <div>
      <h2>Post your Resume</h2>
      <form className="form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Qualification" />
        <input type="text" placeholder="Role"></input>
        <input type="text" placeholder="Experience"></input>
        <textarea placeholder="explain about your 2 important projects"></textarea>

        <button className="btn">Upload</button>
      </form>
    </div>
  );
}

export default PostResume;
