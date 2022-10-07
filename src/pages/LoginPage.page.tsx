import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../apis/auth.api';
import { useAppDispatch } from '../app/hooks';
import { User } from '../dto/User.dto';
import { setAuthState } from '../slices/Auth.slice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !email ? setEmailError(true) : setEmailError(false);
    !password ? setPasswordError(true) : setPasswordError(false);

    try {
      const response = (await login({ email, password })) as { data: User };
      dispatch(setAuthState({ user: response.data }));
      navigate('/');
      console.log(email, password);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg"
          alt="netflix background"
        />

        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-full mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              <form
                onSubmit={handleLogin}
                className="w-full flex flex-col py-4"
              >
                <input
                  className={`p-3 my-2 bg-gray-700 rounded ${
                    emailError && 'border-red-500'
                  }`}
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && (
                  <p className="text-xl text-red-500">
                    Email must not be empty
                  </p>
                )}
                <input
                  className={`p-3 my-2 bg-gray-700 rounded ${
                    passwordError && 'border-red-500'
                  }`}
                  type="password"
                  placeholder="Password"
                  autoComplete="current-pasword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && (
                  <p className="text-xl text-red-500">
                    Password must not be empty
                  </p>
                )}
                <button
                  type="submit"
                  className="bg-red-600 py-3 my-6 rounded font-bold"
                >
                  Sign In
                </button>

                <div className="flex flex-col items-left justify-between space-y-2">
                  <p>
                    <input type="checkbox" className="mr-2" /> Remember Me
                  </p>
                  <Link to="/signup">
                    <p>
                      New to Netflix?{' '}
                      <span className="text-slate-700 cursor-pointer hover:underline">
                        Sign up!
                      </span>{' '}
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
