import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

export default function CadastroCategoria(){
    return(
        <PageDefault>
            <h1>Cadastro de categoria</h1>

            <form>
                <label>
                    Nome da categoria:
                    <input
                        type="text"
                    />

                    <button>
                        Cadastrar
                    </button>
                </label>
            </form>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    );
}