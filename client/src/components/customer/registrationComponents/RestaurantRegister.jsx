import { useState } from 'react';
import { Link } from 'react-router-dom';

const RestaurantRegister = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone_number, setPhoneno] = useState("");
    const [email, setEmail] = useState("");
    const [license_number, setLicenseno] = useState("");
    const [license_number_img, setLicensenimg] = useState(null);
    const [opening, setOpening] = useState("");
    const [closing, setClosing] = useState("");

    async function HandleRegistration() {
        try {
            const url = "http://localhost:3000/restaurant-registration";
            const formData = new FormData();
            formData.append("name", name);
            formData.append("address", address);
            formData.append("phone_number", phone_number);
            formData.append("email", email);
            formData.append("restaurant_license_number", license_number);
            formData.append("restaurant_license_img", license_number_img);
            formData.append("opens_at", opening);
            formData.append("closes_at", closing);

            const response = await fetch(url, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Form submitted successfully");
            } else {
                alert("Form submission failed");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
<Link 
  to="/join-us"
  className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-200 mb-6"
>
  ← Back
</Link>


            <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg space-y-5 mt-10 mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">Restaurant Registration</h2>

                {/* Form Inputs */}
                <div>
                    <label className="block text-gray-700 mb-1">Restaurant Name</label>
                    <input 
                        type="text" 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Enter Restaurant Name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">Address</label>
                    <input 
                        type="text" 
                        onChange={(e) => setAddress(e.target.value)} 
                        placeholder="Enter Restaurant Address"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">Phone Number</label>
                    <input 
                        type="number" 
                        onChange={(e) => setPhoneno(e.target.value)} 
                        placeholder="Enter Restaurant Phone Number"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Enter Restaurant Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">License Number</label>
                    <input 
                        type="text" 
                        onChange={(e) => setLicenseno(e.target.value)} 
                        placeholder="Enter Restaurant License Number"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">Upload License Image</label>
                    <div className="flex items-center space-x-3">
                        <label 
                            htmlFor="licenseUpload"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition duration-200"
                        >
                            Choose File
                        </label>
                        <span className="text-gray-600 text-sm truncate max-w-[180px]">
                            {license_number_img ? license_number_img.name : "No file selected"}
                        </span>
                    </div>
                    <input 
                        id="licenseUpload" 
                        type="file" 
                        onChange={(e) => setLicensenimg(e.target.files[0])} 
                        className="hidden"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">Opening Time</label>
                    <input 
                        type="time" 
                        onChange={(e) => setOpening(e.target.value)} 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">Closing Time</label>
                    <input 
                        type="time" 
                        onChange={(e) => setClosing(e.target.value)} 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <button 
                    onClick={HandleRegistration}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    Submit
                </button>
            </div>
        </>
    );
};

export default RestaurantRegister;
