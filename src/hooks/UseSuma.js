import { useState } from "react";
import Swal from "sweetalert2";

const UseSuma = () => {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [resultado, setResultado] = useState('');

    /**
     * Suma dos numeros
     */
    const Suma = () => {
        if (numero1 === '') {
            Alerta('Ingrese primer número');
        } else if (numero2 === '') {
            Alerta('Ingrese segundo número');
        } else {
            let suma = Number(numero1) + Number(numero2);
            setResultado(suma);
        }
    };

    /**
     * Limpia todos los campos del formulario
     */
    const Limpiar = () => {
        setNumero1('');
        setNumero2('');
        setResultado('');
    };

    /**
     * Muestra una alerta de advertencia
     * @param {string} mensaje 
     */
    const Alerta = (mensaje) => {
        Swal.fire({
            title: 'Advertencia',
            text: mensaje,
            icon: 'warning'
        });
    }

    return {
        numero1,
        setNumero1,
        numero2,
        setNumero2,
        resultado,
        Suma,
        Limpiar,
    }
}

export default UseSuma;