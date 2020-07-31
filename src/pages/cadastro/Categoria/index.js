import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

import Button from '../../../components/Button';

export default function CadastroCategoria() {
  const valoresIniciais = {
    name: '',
    description: '',  
    color: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://karoakeflix.herokuapp.com/categorias';

    fetch(URL_TOP)
      .then(async(respostaDoServidor)=> {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       "id": 1,
    //       "name": "Internacional",
    //       "description": "Músicas Intercionais!",
    //       "cor": "#c81912"
    //     },
    //     {
    //       "id": 2,
    //       "name": "Sertanejo Universitário",
    //       "description": "Músicas de Sertanejo Universitário!",
    //       "cor": "#cbd1ff"
    //     },
    //     {
    //       "id": 3,
    //       "name": "Sertanejo Raiz",
    //       "description": "Músicas de Sertanejo Raiz!",
    //       "cor": "#ffa41b"
    //     },
    //     {
    //       "id": 4,
    //       "name": "Pagode e Samba",
    //       "description": "Músicas de Pagode e Samba!",
    //       "cor": "#00a8cc"
    //     },
    //     {
    //       "id": 5,
    //       "name": "Pop",
    //       "description": "Músicas Pop!",
    //       "cor": "#000839"
    //     },
    //     {
    //       "id": 6,
    //       "name": "Religiosa",
    //       "description": "Músicas Religiosas!",
    //       "cor": "#004445"
    //     }
    //   ]);
    // }, 4 * 1000);

  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria:"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor:"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria.name}${indice}`}>
            {categoria.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}
