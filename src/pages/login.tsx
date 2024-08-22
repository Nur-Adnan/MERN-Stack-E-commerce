import { useState } from "react";

const Login = () => {
    const [gender, setGender] = useState("");
    const [date, setDate] = useState("");
  return (
    <div className="login">
        <main>
            <h1 className="heading">Login</h1>
            <div>
                <label>Gender</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
        </main>
    </div>
  )
}

export default Login;
