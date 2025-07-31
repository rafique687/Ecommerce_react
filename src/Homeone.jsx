import { useEffect, useState } from "react";

function Homeone() {
  const [firstname, setname] = useState("");
  const [last, setlast] = useState("");
  const [Gender, setgender] = useState("");
  const [photo, setphoto] = useState("");
  //when we want excute code on mounting,we use useeffect
  useEffect(()=>{
    handelimage();

  },[]);

  async function handelimage() {
   // let result = await fetch("https://fakestoreapi.in/api/products");
    let result = await fetch("https://randomuser.me/api");
    let res = await result.json();
    console.log(res);
    let temp = res.results[0];
    setphoto(temp.picture.large);
    console.log(temp);
    setname(temp.name.first);
    setlast(temp.name.last);
    setgender(temp.gender);
    console.log(firstname);
  }
  return (
    <>
      <div>
        {/* <button onClick={handelimage}>Fetch record</button> */}
        {photo.length > 0 ? (
          <div>
            <h2>
              {firstname} {last}
            </h2>
            <h3>Gender : {Gender}</h3>
            <img src={photo} alt="" />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default Homeone;
