<div class="wrap">
    <h2>Condiciones varias para el Formulario de Gravity</h2>

    <h3>Autocompletado</h3>
    <small>Archivo: /assets/suggestions.js</small>
    <p>
        Permite copiar los datos de un campo a otro.
        Se basa en las Classes CSS de los campos de Gravity Forms.
        <br>

        Ejm.

        Razón Social (input) -> Clase CSS: .grupo1 .razon-social
    </p>

    <ul>
        <li>grupo1 razon-social</li>
        <li>grupo1 nif</li>
        <li>grupo1 direccion</li>
        <li>grupo1 cp</li>
        <li>grupo1 ciudad</li>
        <li>grupo1 municipio</li>
        <li>grupo1 provincia</li>
        <li>grupo1 comunidad</li>
    </ul>

    <h3>Condicion CNAE</h3>
    <small>Archivo: /includes/process.php</small>
    <p>Se requiere el campo de CNAE si se selecciona el tipo como Empresa, en caso particular es opcional</p>

    <h3>Validación NIF</h3>
    <small>Archivo: /assets/conditions.js</small>
    <p>Valida el número de NIF del campo con la clase CSS .nif</p>

    <h3>Validación LER</h3>
    <small>Archivo: /assets/conditions.js</small>
    <p>Valida el número de LER del campo con la clase CSS .codigo-ler, para que acepte números, - y *</p>

    <h3>Autocompletado NIMA</h3>
    <small>Archivo: /assets/conditions.js</small>
    <p>Autocompleta el campo de NIMA e Inscripción de acuerdo a si es productor o poseedor</p>

</div>