import { useState } from "react";
import {Link} from "react-router-dom"

const AgentRegistration = () => {
    const [name, setName] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [email, setEmail] = useState("");
    const [vehicleNumber, setVehicleNumber] = useState("");
    const [licenseNo, setLicenseNo] = useState("");
    const [licenseImg, setLicenseImg] = useState(null);

    function setEmpty(){
        setName("");
        setPhoneno("");
        setEmail("");
        setVehicleNumber("");
        setLicenseImg(null);
        setLicenseNo("");
    }

    async function handleRegistration() {
        try {
            const url = "http://localhost:3000/agent/registration";
            const formData = new FormData();
            formData.append("fullname", name);
            formData.append("phone_number", phoneno);
            formData.append("email", email);
            formData.append("vehicle_number", vehicleNumber);
            formData.append("license_number", licenseNo);
            formData.append("license_number_img", licenseImg);
            formData.append("approval_status", "pending");

            const response = await fetch(url, {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                alert("Form submitted successfully");
            } else {
                alert("Form submission failed");
            }
        } catch (err) {
            console.error(err);
        }
        setEmpty();
    }

    return (
        <>
            <Link
                to="/join-us"
                className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-200 mb-6"
            >
                ← Back
            </Link>
            <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg space-y-5 mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">Agent Registration</h2>

                <div>
                    <label className="block text-gray-700 mb-1">Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">Phone Number</label>
                    <input
                        type="number"
                        value={phoneno}
                        onChange={(e) => setPhoneno(e.target.value)}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">Vehicle Number</label>
                    <input
                        type="text"
                        value={vehicleNumber}
                        onChange={(e) => setVehicleNumber(e.target.value)}
                        placeholder="Ex: AP 35 GD 2992"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">Driving License Number</label>
                    <input
                        type="text"
                        value={licenseNo}
                        onChange={(e) => setLicenseNo(e.target.value)}
                        placeholder="Ex: 99999999"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">Upload License Image</label>

                    <div className="flex items-center space-x-3">
                        <label
                            htmlFor="licenseImgUpload"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition duration-200"
                        >
                            Choose File
                        </label>
                        <span className="text-gray-600 text-sm truncate max-w-[180px]">
                            {licenseImg ? licenseImg.name : "No file selected"}
                        </span>
                    </div>

                    <input
                        id="licenseImgUpload"
                        type="file"
                        onChange={(e) => setLicenseImg(e.target.files[0])}
                        className="hidden"
                    />
                </div>

                <button
                    onClick={handleRegistration}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    Submit
                </button>
            </div>
        </>
    );
};

export default AgentRegistration;
