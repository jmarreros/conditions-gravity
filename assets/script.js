const list = ['Abiu', 'Açaí', 'Acerola', 'Akebi', 'Ackee', 'African Cherry Orange', 'American Mayapple', 'Apple', 'Apricot'];

const razonSocial = document.getElementsByClassName('grupo1 razon-social')[0];
const inputRazonSocial = razonSocial.getElementsByTagName('input')[0];
const suggestions = document.createElement('div');

suggestions.setAttribute('id', 'suggestions');
razonSocial.appendChild(suggestions);

inputRazonSocial.setAttribute('autocomplete', 'off');

for (let i = 0; i < list.length; i++) {
    const suggestion = document.createElement('div');
    suggestion.innerHTML = list[i];
    suggestion.dataset.group = 'grupo' + i;

    suggestion.addEventListener('click', function () {
        inputRazonSocial.value = this.textContent;
        suggestions.parentNode.removeChild(suggestions);
        // console.log(this.dataset.group);

        const values = get_values_all_groups();
        console.log(values);
    });
    suggestions.appendChild(suggestion);
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
    const razonSocial = elements[0].getElementsByTagName('input')[0];

    if (razonSocial.value === '') {
        return [];
    }

    const values = [];

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i].getElementsByTagName('input');
        if (element.length > 0) {
            values.push(element[0].value);
        }
    }

    return values;
}


//
// function autocomplete(input, list) {
//     //Add an event listener to compare the input value with all countries
//     input.addEventListener('input', function () {
//         //Close the existing list if it is open
//         closeList();
//
//         //If the input is empty, exit the function
//         if (!this.value)
//             return;
//
//         //Create a suggestions <div> and add it to the element containing the input field
//         suggestions = document.createElement('div');
//         suggestions.setAttribute('id', 'suggestions');
//         this.parentNode.appendChild(suggestions);
//
//         //Iterate through all entries in the list and find matches
//         for (let i=0; i<list.length; i++) {
//             if (list[i].toUpperCase().includes(this.value.toUpperCase())) {
//                 //If a match is found, create a suggestion <div> and add it to the suggestions <div>
//                 suggestion = document.createElement('div');
//                 suggestion.innerHTML = list[i];
//
//                 suggestion.addEventListener('click', function () {
//                     input.value = this.innerHTML;
//                     closeList();
//                 });
//                 suggestion.style.cursor = 'pointer';
//
//                 suggestions.appendChild(suggestion);
//             }
//         }
//
//     });
//
//     function closeList() {
//         let suggestions = document.getElementById('suggestions');
//         if (suggestions)
//             suggestions.parentNode.removeChild(suggestions);
//     }
// }

