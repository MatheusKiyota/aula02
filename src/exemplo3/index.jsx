import { useEffect, useState } from "react";

export default function App() {
  const [usuario, setUsuario] = useState(null);

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
      {usuario && (
        <ul>
          <li>Email: {usuario.email}</li>
          <li>Primeiro Nome: {usuario.name.first}</li>
          <li>Sobrenome: {usuario.name.last}</li>
        </ul>
      )}
    </>
  );
}
