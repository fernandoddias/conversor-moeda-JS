class Converter {
    converter() {
        let moedaA = "USD";
        let moedaB = "BRL";
        let moedaAVal = document.getElementById("inputUSDBRL").value;
        let moedaBVal = 0;
        let de_para = moedaA + "_" + moedaB;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=234428564665e4c14ce2`;
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res=>{
                return res.json();
            })
            .then(json=>{
                resolve(
                    (parseFloat(moedaAVal) * json[de_para]).toFixed(2)
                    );
            })
            .catch(err => {
                reject(err);
            })
        })
    }
}
class Controller {
    constructor() {
        this.converter = new Converter();
    }
    async aoClicarConverter() {
        let converter = await this.converter.converter();
        document.getElementById("resultadoUSDBRL").innerHTML = converter;
    }
    domInputDolarEmReais() {
        let moedaA = "USD"
        let moedaB = "BRL"
        let div = document.getElementById("titlleConversorUSDBRL")
        div.innerHTML = moedaA + " Para " + moedaB


    }
}
let controller = new Controller;