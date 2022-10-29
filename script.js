import NewRow from "./NewRow.js";

window.onload = () => {
    let buttonAddRow = document.querySelector('#add-row');
    let table = document.querySelector('table');

    const getLivros = () => {
        return [
            {
                'id': 1,
                'name': 'Livro 1'
            },
            {
                'id': 2,
                'name': 'Livro 2'
            },
            {
                'id': 3,
                'name': 'Livro 3'
            },
            {
                'id': 4,
                'name': 'Livro 4'
            },
            {
                'id': 5,
                'name': 'Livro 5'
            },
        ]
    }

    const Teste = () => {
        console.log('teste')
    }

    let options = {
        'table': table,
        'columns': {
            'td-0': {
                'inputType': 'select', //Definir o tipo de input
                'classes': 'form-control', //Definir as classes que o input receberá
                'action': getLivros(), //Colocar o evento de que irá puxar o conteudo, caso seja um select (estudar melhor oq fazer com isso)
                'event': {
                    'typeEvent': 'change', //Definir o tipo de evento, change, click, etc
                    'actionEvent': Teste //Definir a função q será executada no evento
                }
            },
            'td-1': {
                'inputType': 'select',
                'classes': 'form-control',
                'action': getLivros(), //Colocar o evento de que irá puxar o conteudo, caso seja um select
                // 'event': {
                //     'typeEvent': 'change', //Colocar a opção do evento, onChange, onClick, etc
                //     'actionEvent': '' //Colocar a função q será executada no evento
                // }
            },
            'td-2': {
                'inputType': 'delete',
                'classes': 'form-control',
                'action': getLivros(), //Colocar o evento de que irá puxar o conteudo, caso seja um select
                'event': {
                    'typeEvent': 'click', //Colocar a opção do evento, onChange, onClick, etc
                    'actionEvent': '' //Colocar a função q será executada no evento
                }
            }
        }
    }

    buttonAddRow.addEventListener('click', () => {
        new NewRow(options)
    })


}