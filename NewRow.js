export default class NewRow {

    constructor(options){
        this.table = options.table
        this.columns = options.columns
        this.tr = this.createTR()
        this.countTDs = 0
        this.init()
    }

    init(){
        // Cria as TD conforme a quantidade no option inputs
        Object.entries(this.columns).forEach(([key, value]) => {
            this.createTD()
        })
        console.log('Row adicionada!')
    }

    createTR(){
        let newTR = document.createElement('tr')
        this.table.querySelector('tbody').appendChild(newTR);
        console.log('TR adicionada')
        return newTR;
    }

    createTD(){
        let newTD = document.createElement('td')
        let column = this.columns['td-' + this.countTDs]
        if (column.inputType === 'delete') {
            // TODO: ADICIONAR CRIAÇÃO DO BOTÃO DELETE!!!!
        }else{
            newTD.appendChild(this.createInput(column))
        }
        this.tr.appendChild(newTD)
        this.countTDs++
        console.log('TD adicionada')
    }

    createInput(column){
        let {inputType = 'text', classes, action = '', event} = column
        let newInput = document.createElement(inputType)
        
        newInput.classList.add(classes)

        if(event){
            newInput.addEventListener(event.typeEvent, eval(event.actionEvent))
        }

        if(inputType === 'select'){
            this.insertOptions(newInput, action)
        }
        return newInput
    }

    insertOptions(element, action){
        element.appendChild(this.createOption('', 'Selecione uma opcão'))
        let data = action //TODO: Ver uma forma melhor de pegar o conteudo
        data.forEach((info) => {
            element.appendChild(this.createOption(info.id, info.name))
        })
    }

    createOption(value, name){
        let newOption = document.createElement('option')
        newOption.value = value
        newOption.textContent = name
        return newOption
    }



}