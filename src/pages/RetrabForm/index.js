import React, { useState } from 'react';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function RetrabForm() {
    const [cod_maquina, setCod_maquina] = useState('');
    const [cod_maquinaErr, setCod_maquinaErr] = useState('');

    const [cod_barras, setCod_barras] = useState('');
    const [cod_barrasErr, setCod_barrasErr] = useState('');
    const [cod_barrasInfo, setCod_barrasInfo] = useState('');

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

    const validaMaquina = (val) => {
        if (val === '310' || val === '350' || val === 'INSP1')
            return true
        else
            return false

    }

    async function handleValidaCodMaquina() {
        if (cod_maquina) {
            const apiValidaMaquina = await api.get(`/consulta_maquina/${cod_maquina}`);
            const maquinaIsOk = apiValidaMaquina.data.map(rest => rest['ID']);
            if (maquinaIsOk[0] > 0) {
                setCod_maquinaErr('')
                setCod_barras('')
                setCod_barrasErr('')
                setCod_barrasInfo('')
                if (validaMaquina(cod_maquina))
                    document.getElementById('cod_barras').type = 'text';
                else
                    document.getElementById('cod_barras').type = 'number';

            } else {
                setCod_maquinaErr('Máquina não encontrada.')
            }
        }
    }

    async function handleValidaCodBarra() {
        if (!validaMaquina(cod_maquina))
        if (cod_barras) {
            const apiValidaCodBarras = await api.get(`/consulta_codbarras/${cod_barras}`);
            const codbarrasIsOk = apiValidaCodBarras.data[0].map(rest => rest['ID']);
            const cod_barrasMessage = apiValidaCodBarras.data[1].map(rest => rest['message']);
            //console.log(cod_barrasMessage[0])
            if (codbarrasIsOk[0] > 0) {
                setCod_barrasErr()
            } else {
                setCod_barrasErr('Código de barras não encontrado.')
            }

            if (cod_barrasMessage[0]) {
                setCod_barrasInfo(cod_barrasMessage[0])
            } else {
                setCod_barrasInfo()
            }
        }
    }

    async function handleValidaProcesso() {
        if (processo) {
            const apiValidaProcesso = await api.get(`/consulta_processo/${processo}`);
            const processoIsOk = apiValidaProcesso.data.map(rest => rest['ID']);
            if (processoIsOk[0] > 0) {
                console.log(processoIsOk[0])
                setProcessoId(processoIsOk[0])
                setProcessoErr('')
            } else {
                setProcessoErr('Processo não encontrado.')
            }
        }
    }

    async function handleValidaEtapa() {
        if (etapa) {
            const apiValidaEtapa = await api.get(`/consulta_etapa/${etapa}`);
            const etapaIsOk = apiValidaEtapa.data.map(rest => rest['ID']);
            if (etapaIsOk[0] > 0) {
                console.log(etapaIsOk[0])
                setEtapaId(etapaIsOk[0])
                setEtapaErr('')
            } else {
                setEtapaErr('Etapa não encontrada.')
            }
        }
    }

    async function handleValidaReparo() {
        if (reparo) {
            const apiValidaReparo = await api.get(`/consulta_reparo/${reparo}`);
            const reparoIsOk = apiValidaReparo.data.map(rest => rest['ID']);
            if (reparoIsOk[0] > 0) {
                console.log(reparoIsOk[0])
                setReparoId(reparoIsOk[0])
                setReparoErr('')
            } else {
                setReparoErr('Reparo não encontrado.')
            }
        }
    }

    async function handleValidaCausa() {
        if (causa) {
            const apiValidaCausa = await api.get(`/consulta_causa/${causa}`);
            const causaIsOk = apiValidaCausa.data.map(rest => rest['ID']);
            if (causaIsOk[0] > 0) {
                console.log(causaIsOk[0])
                setCausaId(causaIsOk[0])
                setCausaErr('')
            } else {
                setCausaErr('Causa não encontrada.')
            }
        }
    }

    async function handleValidaMotivo() {
        if (motivo) {
            const apiValidaMotivo = await api.get(`/consulta_motivo/${motivo}`);
            const motivoIsOk = apiValidaMotivo.data.map(rest => rest['ID']);
            if (motivoIsOk[0] > 0) {
                console.log(motivoIsOk[0])
                setMotivoErr('')
            } else {
                setMotivoErr('Motivo não encontrado.')
            }
        }
    }

    async function handleCreate(e) {
        e.preventDefault();
        if (cod_maquinaErr || cod_barrasErr || processoErr || etapaErr || reparoErr || causaErr || motivoErr) {
            alert('Oops, verifique os erros apontados na tela!');
        } else {
            const grava = await api.post('/gravar_retrabalho', {
                cod_maquina,
                cod_barras,
                processo: processoId,
                etapa: etapaId,
                reparo: reparoId,
                causa: causaId,
                motivo
            });
            console.log(grava)
            //localStorage.setItem('user', _id);
            setCod_maquina('');
            setCod_barras('');
            setProcesso('');
            setEtapa('');
            setReparo('');
            setCausa('');
            setMotivo('');
            setCod_barrasInfo('');
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
                            type="text"
                            required
                            name="cod_maquina"
                            label="Máquina"
                            value={cod_maquina}
                            onChange={(e) => { setCod_maquina(e.target.value) }}
                            onBlur={handleValidaCodMaquina} />
                        {cod_maquinaErr && <p>{cod_maquinaErr}</p>}
                        <Input
                            id="cod_barras"
                            type="number"
                            required
                            name="cod_barras"
                            label="Código de Barras"
                            value={cod_barras}
                            onChange={(e) => { setCod_barras(e.target.value) }}
                            onBlur={handleValidaCodBarra} />
                        {cod_barrasErr && <p>{cod_barrasErr}</p>}
                        {cod_barrasInfo && <p>{cod_barrasInfo}</p>}
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
