// Suggestions dropdown for razon social fields

// disable default keypress enter form
const form = document.getElementsByClassName('gform_wrapper')[0].getElementsByTagName('form')[0];
form.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});


if ( document.getElementsByClassName('razon-social') ) {
    for (let i = 1; i <= 4; i++) {
        const group = 'grupo' + i;
        const input = document.getElementsByClassName(group + ' razon-social')[0].getElementsByTagName('input')[0];

        input.addEventListener('focus', function () {
            const suggestions = document.getElementById('suggestions');
            if (this.value === '' && !suggestions) {
                const listValues = get_values_first_input(i);
                create_suggestions(i, listValues);
            }
        });

        input.addEventListener('blur', function () {
            setTimeout(() => {
                remove_suggestions();
            }, 200);
        });

        input.addEventListener("keyup", function (event) {
            const suggestions = document.getElementById('suggestions');
            if (event.target.value === '' && !suggestions) {
                const listValues = get_values_first_input(i);
                create_suggestions(i, listValues);
            } else if (event.target.value !== '') {
                remove_suggestions();
            }
        });
    }
}

document.addEventListener("keydown", function (event) {
    const suggestions = document.getElementById('suggestions');

    if (!suggestions) {
        return;
    }

    const activeSuggestion = suggestions.getElementsByClassName('active')[0];
    if (event.key === 'ArrowDown') {
        if (!activeSuggestion) {
            const firstSuggestion = suggestions.getElementsByTagName('div')[0];
            firstSuggestion.classList.add('active');
        } else {
            const nextSuggestion = activeSuggestion.nextElementSibling;
            if (nextSuggestion) {
                activeSuggestion.classList.remove('active');
                nextSuggestion.classList.add('active');
            }
        }
    } else if (event.key === 'ArrowUp') {
        if (activeSuggestion) {
            const previousSuggestion = activeSuggestion.previousElementSibling;
            if (previousSuggestion) {
                activeSuggestion.classList.remove('active');
                previousSuggestion.classList.add('active');
            }
        }
    }
});

// Enter key to select active suggestion
document.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        const suggestions = document.getElementById('suggestions');
        if (suggestions) {
            const activeSuggestion = suggestions.getElementsByClassName('active')[0];
            if (activeSuggestion) {
                activeSuggestion.click();
            }
        }
    }
});


function get_values_first_input(excludeGroupNumber) {
    const values = get_values_all_groups();
    const firstValues = [];

    for (let i = 1; i <= 4; i++) {
        if (i !== excludeGroupNumber) {
            if (values['grupo' + i][0] !== undefined && values['grupo' + i][0] !== '') {
                firstValues['grupo' + i] = values['grupo' + i][0];
            }
        }
    }
    return firstValues;
}

function create_suggestions(groupNumber, listSuggestions) {
    const mainGroup = 'grupo' + groupNumber;
    const inputContainer = document.getElementsByClassName(mainGroup + ' razon-social')[0];
    const input = inputContainer.getElementsByTagName('input')[0];
    const suggestions = document.createElement('div');

    suggestions.setAttribute('id', 'suggestions');
    inputContainer.appendChild(suggestions);

    input.setAttribute('autocomplete', 'off');

    for (const [key, value] of Object.entries(listSuggestions)) {
        const suggestion = document.createElement('div');
        suggestion.innerHTML = value;
        suggestion.dataset.group = key;

        suggestion.addEventListener('click', function () {
            // input.value = this.textContent;
            const group = this.dataset.group;

            const values = get_values_group(this.dataset.group);

            for (let i = 0; i < values.length; i++) {
                const elementDestination = document.getElementsByClassName(mainGroup)[i].getElementsByTagName('input');

                if (elementDestination.length > 0) { // Exclude select html field form (ciudades)
                    elementDestination[0].value = values[i];
                }
            }

            remove_suggestions();
        });
        suggestions.appendChild(suggestion);
    }
}

function remove_suggestions() {
    const suggestions = document.getElementById('suggestions');
    if (suggestions) {
        suggestions.parentNode.removeChild(suggestions);
    }
}

// Get all input values from all groups
function get_values_all_groups() {
    const groups = ['grupo1', 'grupo2', 'grupo3', 'grupo4']
    const values = [];

    for (let i = 0; i < groups.length; i++) {
        values[groups[i]] = get_values_group(groups[i]);
    }

    return values;
}

// Get all input values from a group
function get_values_group(group) {
    const elements = document.getElementsByClassName(group);
    const mainInput = elements[0].getElementsByTagName('input')[0];

    if (mainInput.value === '') {
        return [];
    }

    const values = [];

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i].getElementsByTagName('input');
        if (element.length > 0) {
            values.push(element[0].value);
        } else {
            values.push(''); // select html field (ciudades)
        }
    }

    return values;
}
