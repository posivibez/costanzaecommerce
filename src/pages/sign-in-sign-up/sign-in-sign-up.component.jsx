import React from "react";
import "./sign-in-sign-up.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up-component/sign-up.component";

const SignInSignUpPage = () => {
  return (
    <div className="sign__in__sign__up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
