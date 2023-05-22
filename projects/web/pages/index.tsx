import Head from "next/head";
import { FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <Head>
        <title>AdminHub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div>
            <div>
              <span>Safe</span>Campus
            </div>
            <div>
              <h2>Sign in to Account</h2>
              <div></div>
              <p> use your email account</p>
              <div>
                <div>
                  <FaRegUser />
                  <input type="text" name="user" placeholder="User" />
                </div>
                <div>
                  <MdLockOutline />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label>
                    <input type="checkbox" name="remember" /> Remember me
                  </label>
                  <a href="#"> Forgot Password?</a>
                </div>
                <a href="/hubPage">Sign In</a>
              </div>
            </div>
          </div>
          <div>
            <h2>Welcome!</h2>
            <div></div>
            <p>this is a short descripition, after be substituida</p>
          </div>
        </div>
      </main>
    </div>
  );
}
