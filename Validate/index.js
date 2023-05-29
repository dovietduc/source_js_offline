function Validate(options) {

    const buttonSubmitSelector = document.querySelector('.submit_form'); // object element
    let messages = {};
    const rules = options.rules;
    const messageAll = options.messages;

    const validateRule = {

        required: function(fieldName, elementValidate) {
            
            const messageKey = fieldName + "_" + elementValidate;
            // 1. lay value input
            const inputSelector = document.querySelector('#' + fieldName);
            const valueInput = inputSelector.value;
            let message = '';

            if (messageAll[messageKey]) {
                message = messageAll[messageKey];
            } else {
                message = fieldName + ' is required';
            }
            let obj = {
                message: message,
                is_valid: true
            }
            // 2. check input chua nhap
            if(!valueInput) {
                obj.is_valid = false;
            }
            return obj;
        },
        email: function(fieldName, elementValidate) {
            const inputSelector = document.querySelector('#' + fieldName);
            const valueInput = inputSelector.value;

            let regxEmail = /^\S+@\S+$/;
            if (!regxEmail.test(valueInput))
            {
                return {
                    is_valid: false,
                    message: fieldName + ' not format email'
                }
            }

            return {
                is_valid: true,
                message: ''
            }
            
        },
        min: function(fieldName, elementValidate, minLength) {
            const inputSelector = document.querySelector('#' + fieldName);
            const valueInput = inputSelector.value;
            if(valueInput.length < minLength) {
                return {
                    is_valid: false,
                    message: fieldName + ' it nhat la ' + minLength + ' character'
                }
            }
            return {
                is_valid: true,
                message: ''
            }
        }
    }

    function addMessageToInputElement() {
        // input invalid
        for (const fieldName in messages) {

            const element = document.querySelector('#' + fieldName);
            // console.log(messages[fieldName]);
            const errors = messages[fieldName];
            let message;

            for(let i = 0; i < errors.length; i++) {
                if(!errors[i].is_valid) {
                    message = errors[i].message;
                    break;
                }
            }

            if(!message) {
                element.classList.add('is-valid');
                element.classList.remove('is-invalid');
                element.nextElementSibling.textContent = '';
            } else {
                element.classList.add('is-invalid');
                element.classList.remove('is-valid');
                element.nextElementSibling.classList.add('invalid-feedback');
                element.nextElementSibling.textContent = message;
            }

           
        }

        messages = {};
    }

    function handleSubmitForm() {
        // validate form
        // 1. loop qua cac phan tu validate
        for (const fieldName in rules) {
           const validateHandleArray = rules[fieldName];

           // loop validate array
            validateHandleArray.forEach(

                function(elementValidate) {

                    const handleElementValidate = elementValidate.split(':');
                    elementValidate = handleElementValidate[0];
                    // chạy hàm validate
                    const messageValidate = validateRule[elementValidate](fieldName, elementValidate, handleElementValidate[1]);

                   
                  
                    if(!messages[fieldName]) {
                        messages[fieldName] = [messageValidate];
                    } else {
                        messages[fieldName].push(messageValidate);
                    }

                    if(!messages[fieldName].is_valid) {
                        return;
                    }

                   
                    
                   
                }
            )

        }


        // add message to input element
        addMessageToInputElement();
    }

    function initEvent() {
        // them su kien cho button submit
        buttonSubmitSelector.addEventListener("click", handleSubmitForm);

    }

    // init su kien
    initEvent();

}

// input
let ruleValidateInput = {
    rules: {
        name: [
            'required',
            'min:3',
            // 'max:8'
        ],
        email: [
            'required',
            'email',
            // 'between:5,9'
        ],
        password: [
            'required'
        ]
    },

    messages: {
        name_required: 'Ten khong duoc de trong'
    }
}

const validateInstance = new Validate(ruleValidateInput);