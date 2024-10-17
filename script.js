let myForm = document.forms["my-form"];



        const displayError = (id, error) =>{
            const ele = document.getElementById(id);
            ele.innerText = error;
        }

        const clearError = () =>{
            document.getElementById("f-name-error").innerText = "";
            document.getElementById("f-email-error").innerText = "";
            document.getElementById("f-phone-error").innerText = "";
        }

        const checkphone = (str) =>{
            const Regex = /\D/;
            return Regex.test(str);
        }
        
        const validateForm = () => {
            //code for validation
            clearError();

            let submitForm = true;

            let name = myForm.elements["name"].value;
            let email= myForm.elements["email"].value;
            let phone = myForm.elements["phone"].value;
            let message = myForm.elements["message"].value;

            if (name.length <=5 || name == "") {
                displayError("f-name-error", "* invalid input or too short");
                submitForm = false;
            }

            
            if(checkphone(phone) || phone.length<10 || phone === "") {
                displayError("f-phone-error", "invalid input");
                submitForm = false;
            }
            if(!myForm["email"].checkValidity() || email === "") {
                displayError("f-email-error", "invalid input");
                submitForm = false;
            }
            
            if(message.length <15 || message===""){
                displayError("f-message-error", "message is too short, require atleast 15 letters")
                submitForm = false;
            }
            return submitForm;

        }