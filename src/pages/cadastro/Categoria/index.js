import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

import categoriasRepository from '../../../repositories/categorias';
import {TableC} from '../styles';

function CadastroCategoria() {
  const history = useHistory();

  const table = {
    borderCollapse: 'collapse',
    width: '70%',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const tableth = {
    paddingTop: '12px',
    paddingBottom: '12px',
    textAlign: 'center',
    backgroundColor: '#fbd46d',
    color: 'black',

  };

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://karoakeflix.herokuapp.com/categorias';

    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  const listC = (
    <table style={table}>
      <tbody>
        <tr>
          <th style={tableth}>Categorias</th>
        </tr>
      </tbody>
      {categorias.map((categoria) => (
        <tbody key={`${categoria.titulo}`}>
          <TableC fieldColor={categoria.cor}>
            <td style={{ border: `2px solid white`, padding: '8px', textAlign: 'center' }}>
              {categoria.titulo}
            </td>
          </TableC>
        </tbody>
      ))}
    </table>
  );


  
  return (
    
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        categoriasRepository.create({
           titulo: values.titulo,
           descricao: values.descricao,
           cor: values.cor,
         })
           .then(() => {
             console.log('Cadastrou com sucesso!');
             history.push('/');
           });
        
        clearForm();
      }}
      >

        <FormField
          label="Título da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          {/* Cargando... */}
          Loading...
        </div>
      )}

      {listC}

    </PageDefault>
  );
}

export default CadastroCategoria;