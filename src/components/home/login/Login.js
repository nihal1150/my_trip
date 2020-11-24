import React from 'react'

export default function Login() {
    return (
        <div class="text-center" className="col-md-4 offset-4 mt-2 card">
      <form class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Login</h1>
        <p><b>Enter Your Email</b></p>
        <label for="inputEmail" class="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address....."
          required
          autoFocus
        />
        <p><b>Enter Your Password</b></p>
        <label for="inputPassword" class="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password...."
          pattern=".{5,}"
          required
        />
        <button class="btn btn-primary" type="submit">
          Login
        </button>
        <a className="nav-link" href="/register">
            If you want to Register?
                </a>
      </form>
    </div>
  );
    
}
