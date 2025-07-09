import { useState } from "react";

const AgentRegistration = () => {
    const [name, setName] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [email, setEmail] = useState("");
    const [vehicleNumber, setVehicleNumber] = useState("");
    const [licenseNo, setLicenseNo] = useState("");
    const [licenseImg, setLicenseImg] = useState(null);


    async function handleRegistration() {
        try {
            const url = "http://localhost:3000/agent-registration";
            const formData = new FormData();
            formData.append("fullname", name);
            formData.append("phone_number", phoneno);
            formData.append("email", email);
            formData.append("vehicle_number", vehicleNumber);
            formData.append("license_number", licenseNo);
            formData.append("img", licenseImg);
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
    }

    return (
        <div>
            <input type="text" onChange={(event) => { setName(event.target.value) }} placeholder="Enter your full name" /> <br />
            <input type="number" onChange={(event) => { setPhoneno(event.target.value) }} placeholder="Enter your phone number" /> <br />
            <input type="email" onChange={(event) => { setEmail(event.target.value) }} placeholder="Enter your email" /> <br />
            <input type="text" onChange={(event) => { setVehicleNumber(event.target.value) }} placeholder="Enter vehicle number(ex: AP 35 GD 2992)" /> <br />
            <input type="text" onChange={(event) => { setLicenseNo(event.target.value) }} placeholder="Enter your driving license number(ex: 99999999" /> <br />
            <input type="file" onChange={(event) => { setLicenseImg(event.target.files[0]) }} /> <br />
            <button onClick={handleRegistration}>Submit</button>
        </div>
    );
};

export default AgentRegistration;