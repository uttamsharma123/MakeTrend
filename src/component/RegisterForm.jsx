import React from "react";
import { Label } from "reactstrap";
import "./Css/regiserform.css";

function RegisterForm() {
    return <div>
        <form action="/action_page.php">
            <div class="form-group">
                <label for="full-name">Name:</label>
                <input type="text" class="form-control" id="full-name" />
            </div>
            <Label class="gender"><b>Select Gender</b></Label>
            <label class="gender radio-inline"><input type="radio" name="gender" value="male" checked /> Male</label>
            <label class="gender radio-inline"><input type="radio" name="gender" value="female"/> Female</label>
            <label class="gender radio-inline"><input type="radio" name="gender" value="unknown"/> Unknown</label>
            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id="email" />
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" />
            </div>

            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
}
export default RegisterForm;