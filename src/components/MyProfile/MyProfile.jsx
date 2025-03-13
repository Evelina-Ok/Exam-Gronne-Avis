import { useState, useContext } from "react";
import { InputField } from "../InputField/InputField.jsx";
import { UserContext } from "../../context/userContext.jsx";

export const MyProfile = () => {
  const [firstname, setfFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [zipcode, setZipcode] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginMessage, setLoginMessage] = useState();
  const [error, setError] = useState();

  console.log("input values", email, password);

  const { userData, setUserData } = useContext(UserContext);

  function updateUser() {
    const body = new URLSearchParams();
    body.append("firstname", data.firstname);
    body.append("lastname", data.lastname);
    body.append("email", data.email);
    body.append("address", data.address);
    body.append("city", data.city);
    body.append("zipcode", data.zipcode);
    body.append("hasNewsletter", data.hasNewsletter);
    body.append("hasNotification", data.hasNotification);

    // Opret et options objekt med HTTP request metode 'POST' og vores body
    const options = {
      method: "PATCH",
      body: body,
      headers: { Authorization: `Bearer ${userData?.access_token}` },
    };

    fetch("http://localhost:4242/users", options)
      .then((res) => res.json())
      .then((data) => {
        console.log("data response", data);
        if (data.data.access_token) {
          setUserData(data);
          setUpdateMessage("Din profil blev opdateret");
        } else {
          setUpdateMessage("Der skete en fejl");
        }
      })
      .catch((err) => setError(err));
  }

  return (
    <>
      <form>
        <InputField
          type="text"
          placeholder="Dit navn..."
          id="firstname"
          labelText="firstname"
          name="firstname"
          action={setfFirstname}
        />

        <InputField
          type="text"
          placeholder="Dit efternavn..."
          id="lasttname"
          labelText="lasttname"
          name="lasttname"
          action={setLastname}
        />

        <InputField
          type="text"
          placeholder="Din adresse..."
          id="address"
          labelText="address"
          name="address"
          action={setAddress}
        />

        <InputField
          type="text"
          placeholder="Din by..."
          id="city"
          labelText="city"
          name="city"
          action={setCity}
        />

        <InputField
          type="text"
          placeholder="Dit postnummer..."
          id="zipcode"
          labelText="zipcode"
          name="zipcode"
          action={setZipcode}
        />

        <InputField
          type="email"
          placeholder="Indtast din mail"
          id="emailField"
          labelText="Email"
          name="Email"
          action={setEmail}
        />

        <InputField
          type="password"
          placeholder="Indtast dit password"
          id="passwordField"
          labelText="Password"
          action={setPassword}
        />
      </form>
      <button onClick={() => submitData()}>Slet profil</button>

      <button onClick={() => submitData()}>Gem ændringer</button>
      {loginMessage}
    </>
  );
};
