import { Link } from 'react-router-dom';

const AdminLanding = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('./assets/images/pexels.jpg')] bg-no-repeat bg-center bg-cover">
      <fieldset className="p-[2rem] border text-white">
        <legend className="text-center">Administrator</legend>

        <form
          action=""
          method="post"
          className="flex justify-center gap-x-4 py-[2rem]"
        >
          <div className="flex flex-col gap-8">
            <label htmlFor="uname">Username:</label>

            <label htmlFor="pword">Password:</label>
          </div>

          <div className="flex flex-col gap-8">
            <input
              type="text"
              id="uname"
              name="username"
              defaultValue={'admin'}
              required
              className="bg-transparent border px-2"
            />

            <input
              type="password"
              id="pword"
              name="pword"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
              className="bg-transparent border px-2"
            />

            <Link
              to={'/create-event'}
              className="px-[1rem] py-[4px] rounded-full bg-white text-black font-semibold hover:bg-gradient-to-r from-purple-500 to-blue-500 text-center"
            >
              Log In
            </Link>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default AdminLanding;
