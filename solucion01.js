

// 1 Crea una función para que calcule el promedio de al menos 3 notas y que 
// retorne el valor de la letra asociada:

// Calificación	Equivalente en letras
// Entre 4.8 <= 5.0	E = Excelente
// Entre 4.5 < 4.8	MB = Muy bueno
// Entre 4.0 < 4.4	B = Bueno
// Entre 3.5 < 4.0	A = Aprobado
// Entre 0 < 3.5	R = Reprobado

function calcularCalificacionEstudiante(notasDelEstudiante) {


    if (notasDelEstudiante.length < 3) {
      return "se necesitan 3 notas para promediar.";
    }
  
    let sumaDeNotas = 0;
    for (let indice = 0; indice < notasDelEstudiante.length; indice++) {
      sumaDeNotas += notasDelEstudiante[indice];
    }
    const promedioDeNotas = sumaDeNotas / notasDelEstudiante.length;
  
    if (promedioDeNotas >= 4.8 && promedioDeNotas <= 5.0) {
      return "E = Excelente";
    } else if (promedioDeNotas > 4.5 && promedioDeNotas < 4.7) {
      return "MB = Muy bueno";
    } else if (promedioDeNotas >= 4.0 && promedioDeNotas < 4.4) {
      return "B = Bueno";
    } else if (promedioDeNotas >= 3.5 && promedioDeNotas < 3.9) {
      return "A = Aprobado";
    } else if (promedioDeNotas >= 0 && promedioDeNotas < 3.4) {
      return "R = Reprobado";
    } else {
      return " rango de notas (0-5).";
    }
  }
  
  // Coloca aquí las notas para realizar el ejercicio:
  const notasDelAlumno = [4.2, 4.5, 4.8];
  console.log(calcularCalificacionEstudiante(notasDelAlumno));