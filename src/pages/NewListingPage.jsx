import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { InputField } from "../components/InputField/InputField";
import { useGet } from "../hooks/useGet";
import { Button } from "../components/Button/Button";

export const NewListingPage = () => {
  const [postError, setPostError] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [url, setUrl] = useState();
  const [error, setError] = useState();


 /*  const [enteredValues, setEnteredValues] = useState({
    name: '',
    description: '',
    price: '',
    category:'',
    url:'';,
    
  }); */

  const { userData } = useContext(UserContext);

    const { data: categoryData, isLoading, error: categoryError } = useGet(
      "http://localhost:4242/categories");
    console.log("categories", categoryData);

 

  function submitData() {
    const body = new URLSearchParams();
    body.append("name", name);
    body.append("image", url);
    body.append("description", description);
    body.append("price", price);
    body.append("category_id", category);

    // Opret et options objekt med HTTP request metode 'POST' og vores body
    const options = {
      method: "POST",
      body: body,
      headers: { Authorization: `Bearer ${userData?.data.access_token}` },
    };

    fetch("http://localhost:4242/products", options)
      .then((res) => res.json())
      .then((data) => {
        console.log("data response", data);
        if (data.data.access_token) {
          setUpdateMessage("Din annonce er oprettet");
        } else {
          setUpdateMessage("Der skete en fejl");
        }
      })
      .catch((err) => setError(err));
  }


  return (
    <form>
      <InputField 
      type='text'
      labelText='Titel'
      placeholder='Titel på produkt...'
      action={setName}
      id='title'
      name='title'
       />

<select
        onChange={(event) => {setCategory(event.target.value)
          }}        
      >
        <option value="" disabled>
        Hvilken kategori tilhører dit produkt........
        </option>
        {categoryData?.data.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>


<InputField 
      type='text'
      labelText='Annonce tekst'
      placeholder='Skriv en annonce tekst her der beskriver produktet'
      action={setDescription} 
      id='listing'
      name='listing'/>

<InputField 
      type='text'
      labelText='URL til billede'
      placeholder='Har du et billede som ligger på nettet kan du indsætte en URL her....'
      action={setUrl}
      id='url'
      name='url' />

<InputField 
      type='text'
      labelText='Pris'
      placeholder='Pris...'
      action={setPrice}
      id='price'
      name='price' />

<Button action={() => submitData()}
          color="blue"
          size="medium"
          title="Opret"
        />
    </form>
  );
};
 