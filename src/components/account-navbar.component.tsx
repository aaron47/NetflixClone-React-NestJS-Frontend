import { Link } from 'react-router-dom';
const AccountNavbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div>
        <Link to="/account">
          <button className="text-white pr-4">Account</button>
        </Link>
        <Link to="/">
          <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
            Log Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AccountNavbar;
