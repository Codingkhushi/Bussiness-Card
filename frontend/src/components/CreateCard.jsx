import { useState } from "react";


export function CreateCard(){
    const [Name,setName] = useState("");
    const [Description,setDescription] = useState("");
    const [SocialMediaLinks,setSocialMediaLinks] = useState("");
    const [Interest,setInterest] = useState("");


    return <div>

        <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} /> <br /> <br />
        <input type="text" placeholder="Description"  onChange={e => setDescription(e.target.value)} /><br /> <br />
        <input type="url" placeholder="SocialMediaLinks" onChange={e => setSocialMediaLinks(e.target.value)} /><br /> <br />
        <input type="text" placeholder="Interest" onChange={e => setInterest(e.target.value)} /><br /> <br />

        <button onClick={() => {
            fetch("http://localhost:3000/cards",{
                method:"POST",
                body:JSON.stringify({
                    Name : Name,
                    Description : Description,
                    SocialMediaLinks : SocialMediaLinks,
                    Interest : Interest
                }),
                    headers : {
                        "Content-Type" : "application/json",
                    }
            })
                .then(async function(res){
                    const json = await res.json();
                    alert("Card Added");
                })

        }}>Add card</button>
        
    </div>
}