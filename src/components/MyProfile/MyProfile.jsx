import { useState, useContext } from "react";
import { InputField } from "../InputField/InputField.jsx";
import { UserContext } from "../../context/userContext.jsx";
import { GridContainer } from "../GridContainer/GridContainer.jsx";

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

  function submitData() {
    const body = new URLSearchParams();
    body.append("firstname", firstname);
    body.append("lastname", lastname);
    body.append("email", email);
    body.append("address", address);
    body.append("city", city);
    body.append("zipcode", zipcode);
    body.append("hasNewsletter", hasNewsletter);
    body.append("hasNotification", hasNotification);

    // Opret et options objekt med HTTP request metode 'POST' og vores body
    const options = {
      method: "PATCH",
      body: body,
      headers: { Authorization: `Bearer ${userData?.data.access_token}` },
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


      function deleteUser() {
        const options = {
          method: "DELETE",
          headers: { Authorization: `Bearer ${userData?.data.access_token}` },
        };
      
        fetch("http://localhost:4242/users", options)
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              setUserData(null); // Clears user data
              alert("Din profil er blevet slettet");
            } else {
              alert("Fejl ved sletning af profil");
            }
          })
          .catch((err) => setError(err));
      }

  }

  return (
    <>
        <form onSubmit={submitData}>
      <GridContainer column={2} gap={2}>
        <div>
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
          </div>

          <div>
          <GridContainer row={2} gap={2}>
            <label htmlFor="hasNotification">
              Jeg ønsker at modtage nyheder om klima-indsatsen, gode tilbud,
              ekslusive deals og lignende promoverings-mails fra den grønne avis
              og samarbejds-parnere?
              <input type="checkbox" name="hasNewsletter" />
            </label>

            <label htmlFor="hasNotification">
              Jeg ønsker at modtage notifikationer i form af emails når der sker
              en opdatering på en af mine annoncer eller jeg modtager en ny
              henvendelse?
              <input type="checkbox" name="hasNotification" />
            </label>
            </GridContainer>


            <div>
            <GridContainer row={2} gap={2}>
              <button onClick={() => submitData()}>Slet profil</button>

              <button onClick={() => submitData()}>Gem ændringer</button>

            
            {loginMessage}
              </GridContainer>
            </div>
          </div>

      </GridContainer>
        </form>
    </>
  );
};
