/*
Ayuda a manipular entradas y salidas de la consola
*/


//IMPORT

const inquirer = require("inquirer");
const colors =require("colors");
//const Choices = require ("inquirer/lib/objects/choices")   <<< No se de donde salio ni para que es


//CREAMOS Y MOSTRAMOS MENU EN PANTALLA
const inquirerMenu = async()=>{
    console.log("========================".blue);
    console.log("Select an option".white);
    console.log("========================".blue);

    const menu= [
        {
            type:"list",
            name:"option",//lo que devuelve inquire cuando el usuario clickee en un item del menu
            message:"What would you want to do?",
            choices:[
                {
                    value:1, //devuelve un 1
                    name:`${"1-".blue} Create Task`
                },
                {
                    value:2,
                    name:`${"2-".blue} Get Task`
                },
                {
                    value:"x",
                    name:`${"x-".blue} Leave`
                }
            ]
        }
    ];

    const {option} = await inquirer.prompt(menu)
    return option;
};

//CREAMOS INPUT Y MOSTRAMOS INPUT EN PANTALLA
const inquirerInput = async(message)=>{

        const question =[
            {
                type:"input",
                name:"description",
                message: message,


            }
        ];
        const {description} = await inquirer.prompt(question);

        return description;
};



module.exports = {
    inquirerMenu,
    inquirerInput
}