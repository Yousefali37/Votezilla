import { Link } from "react-router-dom";
import './SignIn.css';

function SignIn() {
    return (
        <div className="SignIn fade-in">
            <div className="container row justify-content-center align-items-center p-0 m-0">
                <form className="signForm">
                    <div className="mb-5">
                        {/* <img src="/public/Flux_Dev_Design_a_sleek_modern_logo_where_the_primary_element__0-removebg-preview.png" width={100} height={100} className="img-fluid" alt="" /> */}
                        <h2 className="mb-2">Board Member Login</h2>
                        <span className="text-muted fw-medium">Please verify your identity to proceed</span>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="ID"
                            placeholder="Enter your member ID"
                            className="auth-input"
                            aria-label="ID"
                            minLength={10}
                            required
                        />
                        <label htmlFor="ID" className="text-muted">Member ID</label>
                    </div>
                    <hr />
                    <Link className="verify-btn mt-3" to={'/verify-fingerprint'}>Verify ID</Link>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
