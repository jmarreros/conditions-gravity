// Mask LER field
const ler_field_id = 'input_4_47';
const ler_field = document.getElementById(ler_field_id);

// Validate field id to accept only numbers, -, and *
if (ler_field) {
    ler_field.addEventListener('input', function (event) {
        const value = event.target.value;
        const regex = /^[0-9*-]*$/;

        if (!regex.test(value)) {
            event.target.value = value.slice(0, -1);
        }
    });
}


// Condition for NIMA
condition_nima(1);
condition_nima(2);

function condition_nima(nima_id) {
    const nima_class = 'condicion-nima-' + nima_id;

    // checkbox selector
    const nima_field = document.getElementsByClassName(nima_class)[0]?.getElementsByTagName('input')[0];

    if (nima_field) {
        nima_field.addEventListener('change', function (event) {
            const nima = document.getElementsByClassName('nima-' + nima_id)[0]?.getElementsByTagName('input')[0];
            const inscripcion = document.getElementsByClassName('inscripcion-' + nima_id)[0]?.getElementsByTagName('input')[0];

            // Si es pequeño productor se asigna el valor de nima e inscripcion
            if (event.target.checked) {
                nima.value = '1600000000';
                inscripcion.value = '08P04000000000000';
            } else {
                nima.value = '';
                inscripcion.value = '';
            }
        });
    }
}

