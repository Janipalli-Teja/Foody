import { useState, useEffect } from "react";

const UserAccount = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone_number, setPhoneno] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const res = await fetch("http://localhost:3000/", {
                    credentials: "include",
                });

                const res2 = await fetch("http://localhost:3000/customer/my-account",{
                    credentials: "include",
                });


                if (res.ok) {
                    const user = await res.json();
                    setName(user.name);
                    setPhoneno(user.phone_number);
                }

                if (res2.ok) {
                    const user = await res2.json();
                    setAddress(user.address);
                }
            } catch (err) {
                console.error("User check failed:", err);
            }
        };

        checkUser();
    }, []);

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:3000/customer/update-account", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ name, address, phone_number }),
            });

            if (res.ok) {
                alert("Details updated successfully!");
                setIsEditing(false);
            } else {
                alert("Failed to update details.");
            }
        } catch (err) {
            console.error("Update failed:", err);
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">My Account</h2>
            <form onSubmit={handleSave} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        readOnly={!isEditing}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${isEditing ? 'focus:ring-red-500' : 'bg-gray-100 cursor-not-allowed'}`}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                    </label>
                    <input
                        type="text"
                        value={address}
                        readOnly={!isEditing}
                        onChange={(e) => setAddress(e.target.value)}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${isEditing ? 'focus:ring-red-500' : 'bg-gray-100 cursor-not-allowed'}`}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        value={phone_number}
                        readOnly={!isEditing}
                        onChange={(e) => setPhoneno(e.target.value)}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${isEditing ? 'focus:ring-red-500' : 'bg-gray-100 cursor-not-allowed'}`}
                    />
                </div>

                <div className="flex justify-end pt-4">
                    {!isEditing ? (
                        <button
                            type="button"
                            onClick={(e) => {setIsEditing(true);e.preventDefault();}}

                            className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition"
                        >
                            Edit
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 transition"
                        >
                            Save
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default UserAccount;
