import React, { useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';

import api from '../../services/api';
import apiGenerica from '../../services/api_generica';

import './CreatePoint.css';

import logo from '../../assets/logo.svg';

interface Item {
    id: number;
    name: string;
    image_url: string;
}

interface Estados {
    id: number;
    sigla: string;
    nome: string;
}

interface Cidades {
    id: number;
    nome: string;

}

const CreatePoint = () => {

    const [itens, setItens] = useState<Item[]>([]);
    const [estados, setEstados] = useState<Estados[]>([]);
    const [cidades, setCidades] = useState<Cidades[]>([]);

    const [selectedUF, setSelectedUF] = useState('0');

    useEffect(() => {
        api.get('itens').then(response => {

            console.log(response.data);
            setItens(response.data);
        });
    }, []);

    useEffect(() => {
        apiGenerica.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {

            console.log(response.data);
            setEstados(response.data);
        });
    }, []);

    function handleSelectedUF(event: ChangeEvent<HTMLSelectElement>){
        const uf = event.target.value;
        selectedUF(uf);
    }

    useEffect(() => {
        apiGenerica.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/SC/municipios').then(response => {

            console.log(response.data);
            setCidades(response.data);
        });
    }, []);

    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta"></img>
                <Link to="/">
                    <FiArrowLeft />
                    Voltar 
                </Link>
            </header>

            <form>
                <h1>Cadastro do <br/> ponto de coleta</h1>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome da Entidade</label>
                        <input type="text" name="name" id="name" />
                    </div>

                    <div className="field-group">

                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>

                        <div className="field">
                            <label htmlFor="whatsapp">WhatsApp</label>
                            <input type="text" name="whatsapp" id="whatsapp" />
                        </div>
                        
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço  no mapa</span>
                    </legend>
           
                    <Map center={[ -27.589415,-48.613146 ]} zoom={17}>
                        <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker position={[ -27.589415,-48.613146 ]} zoom={15} />
                    </Map>
                     
                    <div className="field-group">

                        <div className="field">
                            <label htmlFor="uf">Estado</label>
                            <select  name="uf" id="uf" value={selectedUF} onChange={handleSelectedUF}>
                                <option value="0">Selecione uma UF</option>
                                {estados.map(item => (
                                    <option value={item.id} key={item.id}>{item.nome}</option>
                                ))}
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="uf">Cidade</label>
                            <select  name="city" id="city">
                                <option value="0">Selecione uma Cidade</option>
                                {cidades.map(item=> (
                                    <option value={item.id} key={item.id}>{item.nome}</option>
                                ))

                                }
                            </select>
                        </div>

                    </div>   

                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Itens de Coleta</h2>
                        <span>Selecione um ou mais itens abaixo</span>
                    </legend>
                    <ul className="items-grid">
                        {itens.map(item => (
                            <li key={item.id}>
                                <img src={item.image_url} alt={item.name} />
                                <span>{item.name}</span>
                            </li>
                        ))}
                        
                        
                        
                      
                    </ul>
                </fieldset>

                <button type="submit">
                    Cadastrar ponto de coleta
                </button>
            </form>

        </div>
    )
}

export default CreatePoint;