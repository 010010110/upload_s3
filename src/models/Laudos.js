

class Laudos {
    _makeFilter(param = {}) {
        let filter = {};
        if (param.placa) filter.placa = param.placa;
        if (param.numrecolhimento) filter.numrecolhimento = param.numrecolhimento;
    
        return filter;
      }
    

    async getLaudo(param) {
        const response = await global.db
            .collection('vwLaudos')
            .find(this._makeFilter(param))
            .toArray();

        return response;
    }

}

module.exports = Laudos;