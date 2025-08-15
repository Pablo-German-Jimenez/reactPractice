
const TeoriaComponentes = ({comision,modulo}) => {
    return (
        <section className="text-primary">
            Componentes de React! 
            <div className="d-flex justify-content-center">
                <div className="alert alert-primary w-50 " role="alert">
                Comisión: {comision}
                <br />
                Módulo: {modulo}
                </div>
            </div>
           
        </section>
    );
};

export default TeoriaComponentes;