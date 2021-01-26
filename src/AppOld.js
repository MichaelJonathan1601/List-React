import "./App.css";
import { useState } from "react";

function Header(props) {
  return (
    <header>
      <p>Hello World {props.name} </p>
      <button onClick={props.click}>Trocar usuário</button>
      {props.children}
      <hr />
    </header>
  );
}

function Form() {
  const [nome, setNome] = useState("");

  const handleNome = (e) => {
    setNome(e.target.value);
  };

  return (
    <>
      <p>{nome}</p>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={handleNome}
      />
    </>
  );
}

function App() {
  const [user, setUser] = useState("Fulano");

  const handleClick = () => {
    if (user === "Fulano") setUser("Ciclano");
    else setUser("Fulano");
  };

  return (
    <div>
      <Header name="Fulano de tal" click={handleClick}>
        <p>Eu sou filho de Header</p>
        <p>Eu sou outro filho de Header</p>
        <p>Eu sou o terceiro filho de Header</p>
      </Header>
      <p>My react app </p>
      <p>Nome do usuário: {user}</p>
      <hr />
      <Form />
    </div>
  );
}

export default App;
