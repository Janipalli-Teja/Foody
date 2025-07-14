import { useState, useEffect } from "react";

const SidebarForm = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState("+91");
    const [otp, setOtp] = useState("");
    const [name, setName] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false);

    const handleOverlayClick = () => onClose();
    const handleSidebarClick = (e) => e.stopPropagation();

    useEffect(() => {
        const handleEsc = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const handleSendOtp = async (e) => {
        e.preventDefault();
        if (!phoneNumber) {
            alert("Enter phone number first.");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/user/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ phone_number: phoneNumber }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.msg || "Failed to send OTP");
            }

            setShowOtpInput(true);
            alert("OTP sent!");
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!showOtpInput) {
            alert("Please request OTP first.");
            return;
        }
        if (!otp) {
            alert("Please enter OTP.");
            return;
        }

        try {
            const payload = {
                phone_number: phoneNumber,
                otp,
            };

            if (!isLogin) {
                if (!name) {
                    alert("Name is required for signup.");
                    return;
                }
                payload.name = name;
            }

            const res = await fetch("http://localhost:3000/user/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.msg || "Verification failed");
            }

            alert(data.msg);
            console.log(data.user);
            onClose();
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex justify-end"
            onClick={handleOverlayClick}
        >
            <div
                className="w-100 h-full bg-white shadow-2xl p-5 border-l border-gray-200 transition"
                onClick={handleSidebarClick}
            >
                <button
                    onClick={onClose}
                    className="text-red-500 text-xl font-bold float-right hover:text-red-600"
                >
                    ×
                </button>

                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-red-600 mb-6">
                        {isLogin ? "Login" : "Sign Up"}
                    </h2>

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                        {/* Phone number + Send OTP */}
                            <label>only Indian Number work</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                            />
                            <button
                                onClick={handleSendOtp}
                                type="button"
                                disabled={!phoneNumber}
                                className={`px-3 py-2 font-semibold rounded ${phoneNumber
                                        ? "bg-red-500 text-white hover:bg-red-600"
                                        : "bg-gray-300 text-gray-600 cursor-not-allowed"
                                    }`}
                            >
                                Send OTP
                            </button>
                        </div>

                        {/* Name field for Sign Up */}
                        {!isLogin && (
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                            />
                        )}

                        {/* OTP input — shown only after sending OTP */}
                        {showOtpInput && (
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                            />
                        )}

                        <button
                            type="submit"
                            className={`w-full font-semibold py-2 rounded ${showOtpInput
                                    ? "bg-red-500 text-white hover:bg-red-600"
                                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                                }`}
                            disabled={!showOtpInput}
                        >
                            {isLogin ? "Login" : "Sign Up"}
                        </button>
                    </form>

                    <p className="mt-6 text-sm text-gray-600 text-center">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                        <button
                            onClick={() => {
                                setIsLogin(!isLogin);
                                setShowOtpInput(false);
                                setOtp("");
                                setName("");
                            }}
                            className="text-red-500 font-medium hover:underline"
                        >
                            {isLogin ? "Sign Up" : "Login"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SidebarForm;
