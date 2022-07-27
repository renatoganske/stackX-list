import { Plus } from 'phosphor-react';
import { CardUser } from '../../components/CardUser'
import './style.css';

export function Home() {
    return (
        <div className="container">
            <h1>Lista de alunos do curso</h1>
            <div className="input-container">
                <input type="text" placeholder="Nome do aluno" />
                <button title="Adicionar aluno">
                    <Plus size={26} weight="bold" color='#FFF' />
                </button>
            </div>
            <div className="container-list">
                <CardUser name="Renato Ganske Junior" />
                <CardUser name="Raquel" />
                <CardUser name="Augusto" />
                <CardUser name="Felipe" />
            </div>
        </div>
    );
}