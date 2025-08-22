import { useState } from "react";
import { auth, googleProvider } from "../utils/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
                <h2 className="text-2xl font-bold text-center mb-6">AI Study Buddy Login</h2>
                {error && <p className="text-red-500 mb-2">{error}</p>}
                <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="border p-2 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border p-2 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <button
                        onClick={handleGoogleLogin}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
}
