import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { InputField } from "../components/InputField/InputField";
import { useGet } from "../hooks/useGet";

export const NewListingPage = () => {
  const [postError, setPostError] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();



 /*  const [enteredValues, setEnteredValues] = useState({
    title: '',
    description: '',
    price: ''
  }); */

  const { userData } = useContext(UserContext);

    const { data, isLoading, error } = useGet(
      "http://localhost:4242/categories");
    console.log("dropdown categories", data);

  /* const options = {
    method: "POST",
    body: body,
  }; */

  return (
    <form>
      <InputField 
      type='text'
      labelText='Titel'
      placeholder='Titel på produkt...'
      action={setTitle}
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
        {data?.data.map((item) => {
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
      labelText='Pris'
      placeholder='Pris...'
      action={setPrice}
      id='price'
      name='price' />

<InputField 
      type='text'
      labelText='Pris'
      placeholder='Pris...'
      action={setPrice}
      id='price'
      name='price' />
    </form>
  );
};
