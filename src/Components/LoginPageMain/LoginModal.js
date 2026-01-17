import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./LoginModal.css"

const LoginModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    if (!isOpen) return null

    const handleSignIn = (e) => {
        e.preventDefault()
        // Handle sign in logic here
        console.log("Sign in with:", { email, password })
    }

    const handleGoogleSignIn = () => {
        console.log("Sign in with Google")
    }

    const handleAppleSignIn = () => {
        console.log("Sign in with Apple")
    }

    const handleFacebookSignIn = () => {
        console.log("Sign in with Facebook")
    }

    return (
        <div className="login-modal-overlay" onClick={onClose}>
            <div className="login-modal" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className="modal-close-btn" onClick={onClose}>
                    <i className="fa fa-times"></i>
                </button>

                {/* Modal Title */}
                <h1 className="modal-title">Member Sign In</h1>

                {/* Social Login Options */}
                <div className="social-login-section">
                    <button className="social-btn google-btn" onClick={handleGoogleSignIn}>
                        <svg className="social-logo" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g transform="matrix(1, 0, 0, 1, 27.009766, -39.238281)">
                                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                                <path fill="#EA4335" d="M -14.754 43.989 C -13.004 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                            </g>
                        </svg>
                        <span>Sign in with Google</span>
                    </button>
                    <button className="social-btn apple-btn" onClick={handleAppleSignIn}>
                        <svg className="social-logo" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#000000" d="M17.05 20.28c-.98.95-2.05.8-3.08.38-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.38C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.905-.04 1.77-.78 3.1-.67 1.6.12 2.78.72 3.51 1.82-3.42 2.17-2.86 6.73.5 7.98-.52 1.45-1.29 2.74-2.19 3.04zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                        </svg>
                        <span>Sign in with Apple</span>
                    </button>
                    <button className="social-btn facebook-btn" onClick={handleFacebookSignIn}>
                        <svg className="social-logo" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <span>Sign in with Facebook</span>
                    </button>
                </div>

                {/* Email and Password Form */}
                <form onSubmit={handleSignIn} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-input"
                            placeholder=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="password-input-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="form-input"
                                placeholder=""
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password-btn"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <i className={`fa fa-eye${showPassword ? "" : "-slash"}`}></i>
                            </button>
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <button type="submit" className="signin-button">Sign in</button>
                </form>

                {/* Create Account Link */}
                <div className="create-account-section">
                    <span>Don't have an account? </span>
                    <Link to="/FinanceSearch/register" className="create-account-link">
                        Create free account
                    </Link>
                </div>

                {/* Footer Links */}
                <div className="modal-footer">
                    <p className="footer-text">
                        By signing in using any of the options above, you agree to the{" "}
                        <a href="#" className="footer-link">Terms of Use & Privacy Policy</a>
                    </p>
                    <p className="footer-text">
                        Forgot password? <a href="#" className="footer-link">Reset it</a> or{" "}
                        <a href="mailto:contact@example.com" className="footer-link">Email me a sign in link</a>.
                        Other issues? <a href="mailto:contact@example.com" className="footer-link">contactus@seekingalpha.com</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginModal
