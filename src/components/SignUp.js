import React from 'react';

export default function() {
  return (
    <div className="signup-wrapper">
      <div className="small-dialog-headline">
        <h4 className="text-center">Sign Up</h4>
      </div>
      <div className="small-dialog-content">
        {/* Start of Registration form */}
        <form id="cariera_registration" action="#" method="POST">
          <p className="status" />
          <div className="form-group">
            <label htmlFor="movify_user_login">Username</label>
            <input
              name="movify_user_login"
              id="movify_user_login"
              className="form-control"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="movify_user_email">Email</label>
            <input
              name="movify_user_email"
              id="movify_user_email"
              className="form-control"
              type="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="movify_user_pass"
              id="movify_password"
              className="form-control"
              type="password"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-main btn-effect nomargin"
              defaultValue="Register"
            />
          </div>
        </form>
        {/* End of Registration form */}
        <div className="bottom-links">
          <span>
            Already have an account?
            <a className="signInClick">Sign in</a>
          </span>
          <a className="forgetPasswordClick pull-right">Forgot Password</a>
        </div>
      </div>{' '}
      {/* .small-dialog-content */}
    </div>
  );
}
