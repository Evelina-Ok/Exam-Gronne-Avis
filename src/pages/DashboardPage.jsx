import { useContext, useState } from "react";
import { ToggleButtons } from "../components/ToggleButtons/ToggleButtons"
import { UserContext } from "../context/userContext";
import { MyProfile } from "../components/MyProfile/MyProfile";
import { MyListings } from "../components/MyListings/MyListings";

export const DashboardPage = () => {

const [showProfile, setShowProfile] = useState(true);

const {userData} = useContext(UserContext)


  return (
    <>
      <ToggleButtons state={showProfile} stateSetter={setShowProfile}/>  
      {showProfile ? <MyProfile /> : <MyListings /> }         
    </>
  )
}
