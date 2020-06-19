import { checkForUrl } from "./urlChecker";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    if(!formText) return;
    console.log(formText)
    if(checkForUrl(formText)){
            console.log("::: Form Submitted :::")
            fetch(' http://localhost:8081/article', {
                method: 'POST',
                credentials: 'same-origin',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({url: formText})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                
                document.getElementById('polarity').innerHTML = data.polarity;
                document.getElementById('subjective').innerHTML = data.subjectivity;
                document.getElementById('polarity_confidence').innerHTML = data.polarity_confidence;
                document.getElementById('subjective_confidence').innerHTML = data.subjectivity_confidence;
                document.getElementById('excerpt').innerHTML = data.text;


            })
            }

   
}

export { handleSubmit }