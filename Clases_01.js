class Persona{
    nombre = 'Homero';

    apellido = 'Simpson';
    direccion= 'Ave siempre viva 742';

    telefono=55555555
    email= 'Amantedelosgatos@hotmail.com';

    trabajar(){

        return 'Trabaja en la planta nuclear'
    }
    estudiar(){
        return 'escuela primaria Springfield'
    }



}
const Homero= new Persona();
const Bart= new Persona();
const Lenny= new Persona();

document.write(Homero.nombre +' '+ Homero.apellido);
document.write('<br>');
document.write(Homero.trabajar());
document.write('<br>');
document.write('Bart ' + Bart.apellido);
document.write('<br>');
document.write('Estudia en la '+ Bart.estudiar());
document.write('<br>');
document.write('Lenny '+ Lenny.trabajar());