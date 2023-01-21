import React from "react";
import { Link } from "react-router-dom";
import EmailIcon from "../../Common/Icon/EmailIcon";
import PasswordShowIcon from "../../Common/Icon/PasswordShowIcon";
import Input from "../../Common/Input";

const Login = () => {
  return (
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 h-[calc(100vh-180px)]">
      <div className="bg-mainOffPrimary max-w-md m-auto px-8 py-12 rounded-lg shadow-lg">
        <div class=" text-center">
          <h1 class="text-2xl font-bold sm:text-3xl text-textPrimary">
            Sign in
          </h1>

          {/* <p class="mt-4 text-textSecondary">
            Destination for your reading & learning.
          </p> */}
        </div>

        <form action="" class="mx-auto mt-12 mb-0 space-y-5">
          <Input
            type="email"
            placeholder="e.g. xyz@gmail.com"
            name="email"
            label={"Email"}
            icon={<EmailIcon />}
          />

          <Input
            type="password"
            placeholder="e.g. ....."
            name="password"
            label={"Password"}
            icon={<PasswordShowIcon />}
          />

          <div class="flex items-center justify-between">
            <p class="text-sm text-textSecondary">
              No account ?
              <Link class="underline ml-1" to="/register">
                Sign up
              </Link>
            </p>

            <button
              type="submit"
              class="ml-3 inline-block rounded-lg bg-mainPrimary px-5 py-3 text-sm font-medium text-textBlack hover:bg-opacity-75"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
