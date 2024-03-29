import React, { useState } from 'react';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function RetrabForm() {
    const [cod_turno, setCod_turno] = useState('');
    const [cod_turnoErr, setCod_turnoErr] = useState('');

    const [cod_centro, setCod_centro] = useState('');
    const [cod_centroErr, setCod_centroErr] = useState('');

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

    const [quantidade, setQuantidade] = useState('');

    const [observacao, setObservacao] = useState('');

    const validaCentro = (val) => {
        if (val === '212')
            return true
        else
            return false

    }

    async function handleValidaTurno() {
        if (cod_turno === 'turno1' || cod_turno === 'turno2' || cod_turno === 'TURNO1' || cod_turno === 'TURNO2')
            setCod_turnoErr('')
        else
            setCod_turnoErr('Turno inválido')
    }

    async function handleValidaCodCentro() {
        if (cod_centro) {
            const apiValidaCentro = await api.get(`/consulta_centro/${cod_centro}`);
            const centroIsOk = apiValidaCentro.data.map(rest => rest['COD_RED']);
            if (centroIsOk[0] > 0) {
                setCod_centroErr('')
                setCod_barras('')
                setCod_barrasErr('')
                setCod_barrasInfo('')
                if (validaCentro(cod_centro)) {
                    document.getElementById('cod_barras').type = 'number';
                    setQuantidade(1);
                } else {
                    document.getElementById('cod_barras').type = 'text';
                    setQuantidade('');
                }
            } else {
                setCod_centroErr('Centro de custo invalido.')
            }
        }
    }

    async function handleValidaCodBarra() {
        if (validaCentro(cod_centro))
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
                setProcessoErr('Processo informado é invalido.')
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
                setEtapaErr('Etapa informada é invalida.')
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
                setReparoErr('Reparo informado é invalido.')
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
                setCausaErr('Causa informada é invalida.')
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
                setMotivoErr('Motivo informado é invalido.')
            }
        }
    }

    async function handleCreate(e) {
        e.preventDefault();
        if (cod_turnoErr || cod_centroErr || cod_barrasErr || processoErr || etapaErr || reparoErr || causaErr || motivoErr) {
            alert('Oops, verifique os erros apontados na tela!');
        } else {
            const grava = await api.post('/gravar_retrabalho', {
                cod_turno,
                cod_centro,
                cod_barras,
                processo: processoId,
                etapa: etapaId,
                reparo: reparoId,
                causa: causaId,
                motivo,
                quantidade,
                observacao
            });
            console.log(grava)
            //localStorage.setItem('user', _id);
            setCod_barras('');
            setProcesso('');
            setEtapa('');
            setReparo('');
            setCausa('');
            setMotivo('');
            setCod_barrasInfo('');
            if (!validaCentro(cod_centro)) {
                setQuantidade('');
            }
            setObservacao('');
            alert('Sucesso, Retrabalho registrado!');
        }

    }

    return (
        <div id="page-apontretrab-form" className="container">
            <PageHeader title="Apontamento de Retrabalhos" />
            <main>
                <form onSubmit={handleCreate} autocomplete="off"  acceptCharset="UTF-8">
                    <fieldset>
                        <div className="group">
                            <div>
                                <Input
                                    type="text"
                                    required
                                    name="cod_turno"
                                    label="Turno"
                                    value={cod_turno}
                                    onChange={(e) => { setCod_turno(e.target.value) }}
                                    onBlur={handleValidaTurno} />
                                {cod_turnoErr && <spam>{cod_turnoErr}</spam>}
                            </div>
                            <div>
                                <Input
                                    type="number"
                                    required
                                    name="cod_centro"
                                    label="Centro de custo"
                                    value={cod_centro}
                                    onChange={(e) => { setCod_centro(e.target.value) }}
                                    onBlur={handleValidaCodCentro} />
                                {cod_centroErr && <spam>{cod_centroErr}</spam>}
                            </div>
                        </div>
                        <Input
                            id="cod_barras"
                            type="number"
                            required
                            name="cod_barras"
                            label="Código de Barras"
                            value={cod_barras}
                            onChange={(e) => { setCod_barras(e.target.value) }}
                            onBlur={handleValidaCodBarra} />
                        {cod_barrasErr && <spam>{cod_barrasErr}</spam>}
                        {cod_barrasInfo && <spam>{cod_barrasInfo}</spam>}
                        <div className="group">
                            <div>
                                <Input
                                    type="number"
                                    required
                                    name="processo"
                                    label="Processo - Maquina"
                                    value={processo}
                                    onChange={(e) => { setProcesso(e.target.value) }}
                                    onBlur={handleValidaProcesso} />
                                {processoErr && <spam>{processoErr}</spam>}
                            </div>
                            <div>
                                <Input
                                    type="number"
                                    required
                                    name="etapa"
                                    label="Etapa"
                                    value={etapa}
                                    onChange={(e) => { setEtapa(e.target.value) }}
                                    onBlur={handleValidaEtapa} />
                                {etapaErr && <spam>{etapaErr}</spam>}
                            </div>
                            <div>
                                <Input
                                    type="number"
                                    required
                                    name="reparo"
                                    label="Reparo"
                                    value={reparo}
                                    onChange={(e) => { setReparo(e.target.value) }}
                                    onBlur={handleValidaReparo} />
                                {reparoErr && <spam>{reparoErr}</spam>}
                            </div>
                            <div>
                                <Input
                                    type="number"
                                    required
                                    name="causa"
                                    label="Causa"
                                    value={causa}
                                    onChange={(e) => { setCausa(e.target.value) }}
                                    onBlur={handleValidaCausa} />
                                {causaErr && <spam>{causaErr}</spam>}
                            </div>
                            <div>
                                <Input
                                    type="number"
                                    required
                                    name="motivo"
                                    label="Motivo"
                                    value={motivo}
                                    onChange={(e) => { setMotivo(e.target.value) }}
                                    onBlur={handleValidaMotivo} 
                                    onKeyPress={event => { if (event.which === 13 /* Enter */) { event.preventDefault(); } }} />
                                {motivoErr && <spam>{motivoErr}</spam>}
                            </div>
                            <div>
                                <Input
                                    type="number"
                                    required
                                    name="quantidade"
                                    label="Quantidade"
                                    value={quantidade}
                                    onChange={(e) => { setQuantidade(e.target.value) }} 
                                    onKeyPress={event => { if (event.which === 13 /* Enter */) { event.preventDefault(); } }} />
                            </div>
                        </div>
                        <Textarea
                            type="number"
                            name="observacao"
                            label="Observação"
                            value={observacao}
                            onChange={(e) => { setObservacao(e.target.value) }} />

                    </fieldset>
                    <footer>
                        {/*<p>
                            <img src={warningIcon} alt="Aviso importante" />
                            Preencha todos os campos do formulário!
                        </p>*/}
                        <button type="submit">REGISTRAR O RETRABALHO</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default RetrabForm;
