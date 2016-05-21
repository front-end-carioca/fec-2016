import React, { Component } from 'react';
import Table from 'react-bootstrap/lib/Table';

const GuiaDeSobrevivencia = ({name, guia}) => {
  return (
    <section className="section guia-de-sobrevivencia" id={name}>
      <h2 className="section-title">Guia de Sobrevivência</h2>

      {guia.map((g, gi)=>
        <div key={gi}>
          <h3 className="section-subtitle">{g.type}</h3>
          <Table >
            <tbody>
              {g.instrucoes.map((inst, i) =>
                <tr key={i}>
                  <th width={'90px'}>{inst.title}</th>
                  <td>
                    <h4>{inst.infos.label}</h4>
                    {inst.infos.distancia &&
                      <span>{inst.infos.distancia}</span>}
                    {inst.infos.opcoes.length > 0 &&
                      <ul>
                        {inst.infos.opcoes.map((o, oi) =>
                          <li key={oi}>{o}</li>
                        )}
                      </ul>}
                    {inst.infos.cupom &&
                      <span>Cupom: {inst.infos.cupom}</span>
                    }
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      )}
    </section>
  );
};

export default GuiaDeSobrevivencia;
