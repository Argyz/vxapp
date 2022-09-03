
const pagination = (results, page, limit) => {


    const resultadosJson = {};
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const resultsFormated = results.map(element => JSON.parse(JSON.stringify(element)));

    const resultado = resultsFormated.slice(startIndex, endIndex);

    resultadosJson.next = {
        page: (parseInt(page) + 1),
        limit: limit
    }

    resultadosJson.previous = {
        page: (parseInt(page - 1)),
        limit: limit
    }

    return [resultado, resultadosJson];
}

module.exports = pagination;
