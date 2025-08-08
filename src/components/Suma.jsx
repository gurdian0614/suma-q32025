import UseSuma from "../hooks/UseSuma";

const Suma = () => {
    const {
        numero1,
        setNumero1,
        numero2,
        setNumero2,
        resultado,
        Suma,
        Limpiar,
    } = UseSuma();

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="form-label">Ingrese primer número:</label>
                    <input type="number" className="form-control" onChange={(e) => setNumero1(e.target.value)} />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="form-label">Ingrese segundo número:</label>
                    <input type="number" className="form-control" onChange={(e) => setNumero2(e.target.value)} />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="form-label">Resultado:</label>
                    <input className="form-control" value={resultado} readOnly />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <button className="btn btn-success" onClick={Suma}>Sumar</button>
                    
                    <button className="btn btn-danger" onClick={Limpiar}>Limpiar</button>
                </div>
            </div>
        </div>
    )
};

export default Suma;
