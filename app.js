// import functions
const adj1Input = document.getElementById('adj-1-input');
const noun1Input = document.getElementById('noun-1-input');
const verb1Input = document.getElementById('verb-1-input');
const noun2Input = document.getElementById('noun-2-input');
const verb2Input = document.getElementById('verb-2-input');
const adj2Input = document.getElementById('adj-2-input');
const adj3Input = document.getElementById('adj-3-input');
const noun3Input = document.getElementById('noun-3-input');
const noun4Input = document.getElementById('noun-4-input');
const submitButton = document.getElementById('button');

// reference needed DOM elements
const adj1Output = document.getElementById('adj-1');
const noun1Output = document.getElementById('noun-1');
const verb1Output = document.getElementById('verb-1');
const noun2Output = document.getElementById('noun-2');
const verb2Output = document.getElementById('verb-2'); 
const adj2Output = document.getElementById('adj-2'); 
const adj3Output = document.getElementById('adj-3'); 
const noun3Output = document.getElementById('noun-3'); 
const noun4Output = document.getElementById('noun-4');     

const hidden = document.getElementById('hidden');
const inputPage = document.getElementById('input-page');

const theme = document.getElementById('theme');

    // set event listeners
submitButton.addEventListener('click', () => {
    // get user input(s)
    
    const adj1Out = adj1Input.value;
    adj1Output.textContent = adj1Out;
    
    const noun1Out = noun1Input.value;
    noun1Output.textContent = noun1Out;
   
    const verb1Out = verb1Input.value;
    verb1Output.textContent = verb1Out;
    
    const noun2Out = noun2Input.value;
    noun2Output.textContent = noun2Out;
    
    const verb2Out = verb2Input.value;
    verb2Output.textContent = verb2Out;
    
    const adj2Out = adj2Input.value;
    adj2Output.textContent = adj2Out;
    
    const adj3Out = adj3Input.value;
    adj3Output.textContent = adj3Out;
    
    const noun3Out = noun3Input.value;
    noun3Output.textContent = noun3Out;
    
    const noun4Out = noun4Input.value;
    noun4Output.textContent = noun4Out;

    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
}); 

// set event listeners
submitButton.addEventListener('click', () => {
    
    hidden.style.display = 'block'; 
    inputPage.style.display = 'none';
    theme.play();
});
