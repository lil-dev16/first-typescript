const printVal = (name, val) => {
    for(let i=0; i<=val; i++) {
        console.log(`${name} is ${i} years old.`);
    }
}

printVal('Segun', 8);

//ARGUMENTS MAY NOT NEED TO BE USED WHEN CALLING THEM SO WE USE THE '?'
function testr(status?: string) {
    console.log(`I am ${status || 'not-ready'}`)
}

testr();
testr('ready')

//default parameters
const greetMaster = (status = 'Segun') =>{
    console.log(`Good afternoon ${status}`);
    
}

greetMaster('ayo');
greetMaster()