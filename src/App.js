import { useEffect, useState } from "react";
// import writers from "./writers";
import ProfileCard from "./components/ProfileCard";
import profileForm from "../src/components/ProfileForm";

function App() {
  const [allProfile, setAllprofile] = useState([
    {
      firstName: "Hannah",
      lastName: "Montana",
      email: "hannahmontana@email.com",
      phone: "+233024455000",
    },
  ]);

  const submit = (profile) => {
    const arr = allProfile;
    arr.push(profile);
    setAllprofile(arr);
  };
  return (
    <div>
      <h1> Writer Profiles </h1>
      <div className="container">
        <profileForm submit={submit} />
        {allProfile.map((writer) => (
          <ProfileCard key={writer.id} writer={writer} />
        ))}
      </div>
    </div>
  );
}

export default App;
