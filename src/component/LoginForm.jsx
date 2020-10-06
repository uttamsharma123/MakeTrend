import React from "react";

function LoginForm()
{
    return <div>
        <form action="/action_page.php">
           <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id="email" />
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" />
            </div>

            <button type="submit" class="btn btn-default">Login</button>
        </form>
    </div>
}
export default LoginForm;
