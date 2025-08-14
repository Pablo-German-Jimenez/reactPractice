
const TeoriaComponentes = (props) => {
    return (
        <section className="text-primary">
            Componentes de React! 

            <div className="alert alert-primary" role="alert">
                Comisión: {props.comision}
            </div>

        </section>
    );
};

export default TeoriaComponentes;