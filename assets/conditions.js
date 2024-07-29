// Mask NIF CIF field

const nif_field_class = 'nif';
const nif_fields = document.getElementsByClassName(nif_field_class);

for (let i = 0; i < nif_fields.length; i++) {
    const nif_field = nif_fields[i].getElementsByTagName('input')[0];

    if (nif_field) {
        nif_field.addEventListener('blur', function (event) {
            const value = event.target.value;
            if (value === '') {
                return;
            }

            const regex = /^([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])$/;

            if (!regex.test(value)) {
                event.target.value = '';
                alert('El NIF/CIF introducido no es válido');
            }
        });
    }
}

// Mask LER field
const ler_field_class = 'codigo-ler';
const ler_field = document.getElementsByClassName(ler_field_class)[0]?.getElementsByTagName('input')[0];

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
    const nima_name = document.getElementsByClassName(nima_class)[0]?.getElementsByTagName('input')[0]?.getAttribute('name');

    if (!nima_name) {
        return;
    }

    const choices = document.getElementsByName(nima_name);
    const nima = document.getElementsByClassName('nima-' + nima_id)[0]?.getElementsByTagName('input')[0];
    const inscripcion = document.getElementsByClassName('inscripcion-' + nima_id)[0]?.getElementsByTagName('input')[0];

    for (let i = 0; i < choices.length; i++) {
        choices[i].addEventListener('change', function (event) {
            if (event.target.value.includes('Productor')) {
                nima.value = '1600000000';
                inscripcion.value = '08P04000000000000';
            } else if (event.target.value.includes('Poseedor')) {
                nima.value = '1600000000';
                inscripcion.value = '08P05000000000000';
            } else {
                nima.value = '';
                inscripcion.value = '';
            }
        });
    }
}

