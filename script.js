import deleteIcon from "./componentes/deletecom.js";
import checkcomplete from "./componentes/checkcom.js";
(()=>{
    const btn = document.querySelector('[data-form-btn]')
    const createTask=(evento)=>{
        evento.preventDefault();//componentes controlados
        const input = document.querySelector('[data-form-input]');
        //console.log(input.value);
        const value = input.value;
        const list = document.querySelector('[data-list]');
        const task = document.createElement('li');//almacenamos en una variable
        task.classList.add('card');//asignar los estilos css a la variable
        input.value = '';
        const taskcontent = document.createElement('div')//crear el elemento div
        const titletask = document.createElement('span')
        titletask.classList.add('task')
        titletask.innerText = value;//asignamos el valor
        taskcontent.appendChild(checkcomplete())//lamado de funcino con parentesis
        taskcontent.appendChild(titletask);//agregar un hijo al padre, colocar el span dentro del div
            //const content = `
            //<i class="far fa-check-square icon"></i>`;
            //task.innerHTML = content;
            task.appendChild(taskcontent);//introduzco el div dentro del li
            task.appendChild(deleteIcon());
            list.appendChild(task);//introduzco el li dentro del ul
    };
    btn.addEventListener('click',createTask);
    /*btn.addEventListener('click',createTask);//tienen dos parametros de entrada, nombre y a la funcion que estamos usando
    //console.log(btn);
    const checkcomplete =()=>{
        const i = document.createElement('i');
        i.classList.add('far','fa-check-square',' icon');
        i.addEventListener('click',completetask);
        return i;
    }
    const completetask = (evento2)=>{
        const element = evento2.target;
        element.classList.toggle('fas');
        element.classList.toggle('completeIcon');
        element.classList.toggle('far');
    };*/
})();

