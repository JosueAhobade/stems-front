import { useState } from "react"

function header(){
  return (
  <div class="h-screen w-screen p-6">
    <div class="h-1/7 w-full space-y-4 ">
      <img  src="asset/LogoBlabber.png" />
      <div class="border-t-2 border-gray-300 "></div>
    </div>
    <div class="flex w-full space-x-1 h-full ">
      <div class="w-1/4 border-r border-gray-300 space-y-4 ">
         <img  src="/asset/FAB.png" class="ml-auto rounded-lg shadow-sm h-[50px] w-[50px]"/>
         <div class=" flex-col space-y-10 pr-4 ">
            <div class="flex">
              <img src="/asset/Icon@2x.png" class="place-self-center" style={{width: 25 , height: 25}}/>
              <p class="place-self-center pl-2 text-sm">Discussions</p>
              <p class=" place-self-center ml-auto text-sm">100+</p>
            </div>
            <div class="flex">
              <p class="place-self-center text-sm mx-6">Discussions Archivées</p>
            </div>
            <div class="flex">
              <img src="/asset/Icon.png" class="place-self-center" style={{width: 25 , height: 25}}/>
              <p class="place-self-center pl-2 text-sm">Contacts</p>
            </div>
            <div class="flex">
              <p class="place-self-center text-sm mx-6">Contacts Bloqués</p>
            </div>
            <div class="flex">
              <img src="/asset/Icon1.png" class="place-self-center" style={{width: 25 , height: 25}}/>
              <p class="place-self-center pl-2 text-sm">Mes Demandes</p>
              <p class=" place-self-center ml-auto">100+</p>
            </div>
            <div class="flex">
              <img src="/asset/Icon2.png" class="place-self-center" style={{width: 25 , height: 25}}/>
              <p class="place-self-center pl-2">Découvrir du monde</p>
            </div>
            <div class="border-t-2 border-gray-300 "></div>
         </div>
         <div class="flex-col space-y-10 pr-4">
          <div class="flex">
                <img src="/asset/Icon3.png" class="place-self-center" style={{width: 25 , height: 25}}/>
                <p class="place-self-center pl-2 text-sm">Profil</p>
          </div>
          <div class="flex">
                <p class="place-self-center pl-2 text-sm mx-6">Mot de passe</p>
          </div>
          <div class="flex">
                <img src="/asset/Icon4.png" class="place-self-center" style={{width: 25 , height: 25}}/>
                <p class="place-self-center pl-2 text-sm text-red-600">Déconnexion</p>
          </div>
         </div>
      </div>
      <div class="w-2/4 space-y-6 border-r border-gray-300  ">
        <div class="flex ">
          <div class="w-1/5 place-self-center ml-auto">
            <img src="/asset/retour.png" style={{width: 35, height: 35}}/>
          </div>
          <div class="w-3/5 space-x-4 flex">
            <img src="/asset/3d_avatar_16.png" style={{width: 60, height: 60}}/>
            <p class="place-self-center text-3xl"><strong>Asha Hayes</strong></p>
          </div>
          <div class="place-self-center">
            <img src="/asset/container.png"/>
          </div>
        </div>
        <div class="border-t-2 border-gray-300 "></div>
      </div>
      <div class="w-1/4">
        <div class="flex-col">
         <img src="/asset/3d_avatar_16.png" style={{width: 200, height: 200}} class="mt-16 ml-16"/>
         <div className="">
         <p className="mt-4 ml-24 text-3xl">Asha Hayes</p>
         <p className="ml-28 text-sm">asha.hayes@ash.eu</p>
         <p className="ml-24 ">@ashayes</p>
         </div>
        </div>
      </div>
    </div>
  </div>
     
    )
}

function App(){
  //state (état , donnée)
 const [fruit , setFruit] = useState([
    {id: 1, nom: "Mangue"},
    {id: 2, nom: "Orange"},
    {id: 3, nom: "Citron"},
    {id: 4, nom: "Goyave"}
    ]);
  
  //comportement
  const handleDelete = (id) => {
    console.log(id)

    //copie du state
    const fruitCopy = [...fruit];

    //manipulation du state
    const fruitCopyUpdated = fruitCopy.filter(fr =>fr.id !== id);

    //modifier le state avec le setter
    setFruit(fruitCopyUpdated)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("handleSubmit");

  };
  

  //affichage(render)
  return (
    <div>
      <h1>Listes de fruits</h1>
        <ul>
          {fruit.map((fr) =>
          <li key={fr.id}>{fr.nom} <button onClick={() => handleDelete(fr.id)}>X</button></li> 
          )}
        </ul>
        <form action="submit" onSubmit={handleSubmit}>
        <input type="text" placeholder="Ajoutez des fruits"/>
        <button>Ajoutez +</button>
        </form>
    </div>
    ) ;
  
}
export  default header;

//Gestion du formulaire 
//1. Creation du formulaire
//2. Soumission du formulaire
//3. Collecte des données du formulaire
