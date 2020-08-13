import React, { useState } from 'react';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function RetrabForm() {
    const [cod_barras, setCod_barras] = useState('');
    const [cod_barrasErr, setCod_barrasErr] = useState('');

    const [processo, setProcesso] = useState('');
    const [processoId, setProcessoId] = useState('');
    const [processoErr, setProcessoErr] = useState('');

    const [etapa, setEtapa] = useState('');
    const [etapaId, setEtapaId] = useState('');
    const [etapaErr, setEtapaErr] = useState('');

    const [reparo, setReparo] = useState('');
    const [reparoId, setReparoId] = useState('');
    const [reparoErr, setReparoErr] = useState('');

    const [causa, setCausa] = useState('');
    const [causaId, setCausaId] = useState('');
    const [causaErr, setCausaErr] = useState('');

    const [motivo, setMotivo] = useState('');
    const [motivoErr, setMotivoErr] = useState('');

    async function handleValidaCodBarra() {
        const apiValidaCodBarras = await api.get(`/consulta_codbarras/${cod_barras}`);
        const codbarrasIsOk = apiValidaCodBarras.data.map(rest => rest['ID']);
        
        if (codbarrasIsOk[0] > 0) {
            setCod_barrasErr('')
        } else {
            setCod_barrasErr('Código de barras não encontrado.')
        }
    }

    async function handleValidaProcesso() {
        const apiValidaProcesso = await api.get(`/consulta_processo/${processo}`);
        const processoIsOk = apiValidaProcesso.data.map(rest => rest['ID']);
        if (processoIsOk[0] > 0) {
            setProcessoId(processoIsOk[0])
            setProcessoErr('')
        } else {
            setProcessoErr('Processo não encontrado.')
        }
    }

    async function handleValidaEtapa() {
        const apiValidaEtapa = await api.get(`/consulta_etapa/${etapa}`);
        const etapaIsOk = apiValidaEtapa.data.map(rest => rest['ID']);
        if (etapaIsOk[0] > 0) {
            setEtapaId(etapaIsOk[0])
            setEtapaErr('')
        } else {
            setEtapaErr('Etapa não encontrada.')
        }
    }

    async function handleValidaReparo() {
        const apiValidaReparo = await api.get(`/consulta_reparo/${reparo}`);
        const reparoIsOk = apiValidaReparo.data.map(rest => rest['ID']);
        if (reparoIsOk[0] > 0) {
            setReparoId(reparoIsOk[0])
            setReparoErr('')
        } else {
            setReparoErr('Reparo não encontrado.')
        }
    }

    async function handleValidaCausa() {
        const apiValidaCausa = await api.get(`/consulta_causa/${causa}`);
        const causaIsOk = apiValidaCausa.data.map(rest => rest['ID']);
        if (causaIsOk[0] > 0) {
            setCausaId(causaIsOk[0])
            setCausaErr('')
        } else {
            setCausaErr('Causa não encontrada.')
        }
    }

    async function handleValidaMotivo() {
        const apiValidaMotivo = await api.get(`/consulta_motivo/${motivo}`);
        const motivoIsOk = apiValidaMotivo.data.map(rest => rest['ID']);
        if (motivoIsOk[0] > 0) {
            setMotivoErr('')
        } else {
            setMotivoErr('Motivo não encontrado.')
        }
    }

    async function handleCreate(e) {
        e.preventDefault();
        if (cod_barrasErr || processoErr || etapaErr || reparoErr || causaErr || motivoErr) {
            alert('Oops, verifique os erros apontados na tela!');
        } else {
            await api.post('/gravar_retrabalho', {
                cod_barras,
                processo: processoId,
                etapa: etapaId,
                reparo: reparoId,
                causa: causaId,
                motivo
            });

            //localStorage.setItem('user', _id);
            setCod_barras('');
            setProcesso('');
            setEtapa('');
            setReparo('');
            setCausa('');
            setMotivo('');
            alert('Sucesso, Retrabalho registrado!');
        }

    }

    return (
        <div id="page-apontretrab-form" className="container">
            <PageHeader title="Apontamento de Retrabalhos" />
            <main>

                <form onSubmit={handleCreate} autocomplete="off">
                    <fieldset>
                        <Input
                            type="number"
                            required
                            name="cod_barras"
                            label="Código de Barras"
                            value={cod_barras}
                            onChange={(e) => { setCod_barras(e.target.value) }}
                            onBlur={handleValidaCodBarra} />
                        {cod_barrasErr && <p>{cod_barrasErr}</p>}
                        <Input
                            type="number"
                            required
                            name="processo"
                            label="Processo"
                            value={processo}
                            onChange={(e) => { setProcesso(e.target.value) }}
                            onBlur={handleValidaProcesso} />
                        {processoErr && <p>{processoErr}</p>}
                        <Input
                            type="number"
                            required
                            name="etapa"
                            label="Etapa"
                            value={etapa}
                            onChange={(e) => { setEtapa(e.target.value) }}
                            onBlur={handleValidaEtapa} />
                        {etapaErr && <p>{etapaErr}</p>}
                        <Input
                            type="number"
                            required
                            name="reparo"
                            label="Reparo"
                            value={reparo}
                            onChange={(e) => { setReparo(e.target.value) }}
                            onBlur={handleValidaReparo} />
                        {reparoErr && <p>{reparoErr}</p>}
                        <Input
                            type="number"
                            required
                            name="causa"
                            label="Causa"
                            value={causa}
                            onChange={(e) => { setCausa(e.target.value) }}
                            onBlur={handleValidaCausa} />
                        {causaErr && <p>{causaErr}</p>}
                        <Input
                            type="number"
                            required
                            name="motivo"
                            label="Motivo"
                            value={motivo}
                            onChange={(e) => { setMotivo(e.target.value) }}
                            onBlur={handleValidaMotivo} />
                        {motivoErr && <p>{motivoErr}</p>}

                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                            Preencha todos os campos do formulário!
                    </p>
                        <button type="submit">Registrar o retrabalho agora</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default RetrabForm;
