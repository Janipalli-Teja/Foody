import { useState, useEffect } from "react";

const MyAccount = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone_number, setPhoneno] = useState("");
    const [isEditing, setIsEditing] = useState(false); // <-- Edit mode toggle

    useEffect(() => {
        const checkUser = async () => {
            try {
                const res = await fetch("http://localhost:3000/", {
                    credentials: "include",
                });

                const res2 = await fetch("http://localhost:3000/my-account");

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
            const res = await fetch("http://localhost:3000/update-account", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ name, address, phone_number }),
            });

            if (res.ok) {
                alert("Details updated successfully!");
                setIsEditing(false); // Exit edit mode after saving
            } else {
                alert("Failed to update details.");
            }
        } catch (err) {
            console.error("Update failed:", err);
        }
    };

    return (
        <div>
            <form onSubmit={handleSave}>
                <label className="name">Full Name</label>
                <input
                    type="text"
                    value={name}
                    readOnly={!isEditing}
                    onChange={(e) => setName(e.target.value)}
                />

                <label className="address">Address</label>
                <input
                    type="text"
                    value={address}
                    readOnly={!isEditing}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <label className="phone_number">Phone Number</label>
                <input
                    type="text"
                    value={phone_number}
                    readOnly={!isEditing}
                    onChange={(e) => setPhoneno(e.target.value)}
                />

                {!isEditing ? (
                    <button type="button" onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                ) : (
                    <button type="submit">Save</button>
                )}
            </form>
        </div>
    );
};

export default MyAccount;
