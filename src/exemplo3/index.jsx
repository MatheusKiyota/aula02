import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario, setUsuario] = useState([]);

  useEffect(() => { 

    const buscarUsuario = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setUsuario(dados.results[0]);
    }
    
        buscarUsuario();

  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
          <p>{usuario?.email}</p>
          <p>{usuario?.name.first}</p>
          <p>{usuario?.name.last}</p>
      </ul>
    </>
  );
}
