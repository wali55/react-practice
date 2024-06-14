const SignUp = () => {
  return (
    <form
      onClick={(e) => {
        e.preventDefault();
        alert("Submitting");
      }}
      className="my-3"
    >
      <input className="border" type="text" name="" id="" />
      <button className="bg-yellow-300 ml-2">Submit</button>
    </form>
  );
};

export default SignUp;
