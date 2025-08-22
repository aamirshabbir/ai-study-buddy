import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
    const { user, logout } = useAuth();

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">
                Welcome {user?.displayName || user?.email} 🎓
            </h1>
            <button
                onClick={logout}
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
            >
                Logout
            </button>
        </div>
    );
}
