document.addEventListener("DOMContentLoaded", () => {
  // Definir todos los ramos por semestre, con sus requisitos y desbloqueos
  const malla = {
    "I semestre": [
      { nombre: "Introducción a la profesión", desbloquea: [] },
      { nombre: "Química general y orgánica", desbloquea: ["Bioquímica clínica"] },
      { nombre: "Biología molecular de la célula", desbloquea: ["Bioquímica clínica", "Desarrollo embrio-fetal"] },
      { nombre: "Anatomía general", desbloquea: ["Morfología reproductiva", "Fisiología"] },
      { nombre: "Taller de desarrollo personal", desbloquea: [] }
    ],
    "II semestre": [
      { nombre: "Salud pública", desbloquea: ["Salud familiar y comunitaria", "Promoción y educación para la salud II", "Epidemiología clínica y social"] },
      { nombre: "Promoción y educación para la salud I", desbloquea: ["Promoción y educación para la salud II"] },
      { nombre: "Bioética y aspectos legales", desbloquea: [] },
      { nombre: "Morfología reproductiva", requisitos: ["Anatomía general"], desbloquea: ["Desarrollo embrio-fetal"] },
      { nombre: "Bioquímica clínica", requisitos: ["Química general y orgánica", "Biología molecular de la célula"], desbloquea: ["Fisiología", "Microbiología y parasitología clínica", "Farmacología general y gineco-obstétrica"] },
      { nombre: "Psicología del desarrollo", desbloquea: ["Psicología de la mujer"] },
      { nombre: "Inglés I", desbloquea: ["Inglés II"] }
    ],
    "III semestre": [
      { nombre: "Salud familiar y comunitaria", requisitos: ["Salud pública"], desbloquea: ["Obstetricia I", "Ginecología I", "Neonatología I"] },
      { nombre: "Promoción y educación para la salud II", requisitos: ["Promoción y educación para la salud I", "Salud pública"], desbloquea: ["Clínica proceso de enfermería", "Atención primaria obstétrica"] },
      { nombre: "Epidemiología clínica y social", requisitos: ["Salud pública"], desbloquea: [] },
      { nombre: "Desarrollo embrio-fetal", requisitos: ["Biología molecular de la célula", "Morfología reproductiva"], desbloquea: ["Obstetricia I", "Ginecología I", "Neonatología I"] },
      { nombre: "Fisiología", requisitos: ["Anatomía general", "Bioquímica clínica"], desbloquea: ["Proceso de atención de enfermería", "Fisiopatología"] },
      { nombre: "Microbiología y parasitología clínica", requisitos: ["Bioquímica clínica"], desbloquea: ["Proceso de atención de enfermería"] },
      { nombre: "Bioestadística", desbloquea: ["Investigación en salud I"] }
    ],
    "IV semestre": [
      { nombre: "Obstetricia I", requisitos: ["Salud familiar y comunitaria", "Desarrollo embrio-fetal"], desbloquea: ["Obstetricia II", "Atención primaria obstétrica"] },
      { nombre: "Ginecología I", requisitos: ["Salud familiar y comunitaria", "Desarrollo embrio-fetal"], desbloquea: ["Ginecología II"] },
      { nombre: "Neonatología I", requisitos: ["Salud familiar y comunitaria", "Desarrollo embrio-fetal"], desbloquea: ["Neonatología II"] },
      { nombre: "Proceso de atención de enfermería", requisitos: ["Fisiología", "Microbiología y parasitología clínica"], desbloquea: ["Clínica proceso de enfermería"] },
      { nombre: "Farmacología general y gineco-obstétrica", requisitos: ["Bioquímica clínica"], desbloquea: [] },
      { nombre: "Fisiopatología", requisitos: ["Fisiología"], desbloquea: ["Obstetricia II", "Ginecología II", "Neonatología II"] },
      { nombre: "Inglés II", requisitos: ["Inglés I"], desbloquea: ["Inglés III"] }
    ],
    "V semestre": [
      { nombre: "Obstetricia II", requisitos: ["Obstetricia I", "Fisiopatología"], desbloquea: ["Integración profesional"] },
      { nombre: "Ginecología II", requisitos: ["Ginecología I", "Fisiopatología"], desbloquea: ["Sexualidad y sexología", "Integración profesional", "Atención primaria ginecológica"] },
      { nombre: "Neonatología II", requisitos: ["Neonatología I", "Fisiopatología"], desbloquea: ["Integración profesional", "Clínica en Neonatología I"] },
      { nombre: "Investigación en salud I", requisitos: ["Bioestadística"], desbloquea: ["Investigación en salud II"] },
      { nombre: "Clínica proceso de enfermería", requisitos: ["Proceso de atención de enfermería", "Promoción y educación para la salud II"], desbloquea: ["Enfermería médico-quirúrgica"] },
      { nombre: "Atención primaria obstétrica", requisitos: ["Promoción y educación para la salud II", "Obstetricia I"], desbloquea: ["Atención primaria ginecológica"] }
    ],
    "VI semestre": [
      { nombre: "Investigación en salud II", requisitos: ["Investigación en salud I"], desbloquea: ["Proyecto de licenciatura I"] },
      { nombre: "Sexualidad y sexología", requisitos: ["Ginecología II"], desbloquea: [] },
      { nombre: "Integración profesional", requisitos: ["Obstetricia II", "Ginecología II", "Neonatología II"], desbloquea: ["Clínica de servicios gineco-obstétricos I", "Clínica en Neonatología I", "Proceso de intervención comunitaria"] },
      { nombre: "Psicología de la mujer", requisitos: ["Psicología del desarrollo"], desbloquea: [] },
      { nombre: "Enfermería médico-quirúrgica", requisitos: ["Clínica proceso de enfermería"], desbloquea: [] },
      { nombre: "Atención primaria ginecológica", requisitos: ["Atención primaria obstétrica", "Ginecología II"], desbloquea: ["Gestión en salud I", "Clínica de servicios gineco-obstétricos I"] },
      { nombre: "Inglés III", requisitos: ["Inglés II"], desbloquea: [] }
    ],
    "VII semestre": [
      { nombre: "Proyecto de licenciatura I", requisitos: ["Investigación en salud II"], desbloquea: ["Proyecto de licenciatura II"] },
      { nombre: "Gestión en salud I", requisitos: ["Atención primaria ginecológica"], desbloquea: ["Gestión en salud II"] },
      { nombre: "Clínica de servicios gineco-obstétricos I", requisitos: ["Integración profesional", "Atención primaria ginecológica"], desbloquea: ["Clínica de servicios gineco-obstétricos II"] },
      { nombre: "Clínica en Neonatología I", requisitos: ["Neonatología II", "Integración profesional"], desbloquea: ["Clínica en Neonatología II"] },
      { nombre: "Proceso de intervención comunitaria", requisitos: ["Integración profesional"], desbloquea: ["Internado de atención primaria y comunitaria"] },
      { nombre: "Optativo de formación general", desbloquea: ["Internado integral"] }
    ],
    "VIII semestre": [
      { nombre: "Proyecto de licenciatura II", requisitos: ["Proyecto de licenciatura I"] },
      { nombre: "Gestión en salud II", requisitos: ["Gestión en salud I"], desbloquea: ["Gestión en salud III"] },
      { nombre: "Clínica de servicios gineco-obstétricos II", requisitos: ["Clínica de servicios gineco-obstétricos I"], desbloquea: ["Internado intrahospitalario"] },
      { nombre: "Clínica en Neonatología II", requisitos: ["Clínica en Neonatología I"], desbloquea: ["Internado intrahospitalario"] },
      { nombre: "Electivo de formación I", desbloquea: ["Internado integral"] }
    ],
    "IX semestre": [
      { nombre: "Gestión en salud III", requisitos: ["Gestión en salud II"], desbloquea: ["Internado integral"] },
      { nombre: "Internado intrahospitalario", requisitos: ["Clínica de servicios gineco-obstétricos II", "Clínica en Neonatología II"], desbloquea: ["Internado integral"] },
      { nombre: "Internado de atención primaria y comunitaria", requisitos: ["Proceso de intervención comunitaria"], desbloquea: ["Internado integral"] },
      { nombre: "Electivo de formación II", desbloquea: ["Internado integral"] }
    ],
    "X semestre": [
      { nombre: "Internado integral", requisitos: ["Gestión en salud III", "Internado intrahospitalario", "Internado de atención primaria y comunitaria", "Electivo de formación I", "Electivo de formación II"] },
      { nombre: "Trabajo de titulación" },
      { nombre: "Examen de titulación" }
    ]
  };

  // Estado de ramos: si están aprobados o bloqueados
  const estadoRamos = {};

  // Construir la malla en el DOM
  const mallaDiv = document.getElementById("malla");

  // Crear cada semestre como columna
  for (const [semestre, ramos] of Object.entries(malla)) {
    const col = document.createElement("div");
    col.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    col.appendChild(titulo);

    // Crear cada ramo
    ramos.forEach((ramo) => {
      const ramoDiv = document.createElement("div");
      ramoDiv.classList.add("ramo");
      ramoDiv.textContent = ramo.nombre;
      ramoDiv.dataset.nombre = ramo.nombre;
      ramoDiv.dataset.semestre = semestre;

      // Inicialmente bloqueado si tiene requisitos
      if (ramo.requisitos && ramo.requisitos.length > 0) {
        ramoDiv.classList.add("bloqueado");
        estadoRamos[ramo.nombre] = false;
      } else {
        estadoRamos[ramo.nombre] = false; // no aprobado aún
      }

      col.appendChild(ramoDiv);
    });

    mallaDiv.appendChild(col);
  }

  // Función para comprobar si los requisitos de un ramo están aprobados
  function requisitosAprobados(ramo) {
    if (!ramo.requisitos || ramo.requisitos.length === 0) return true;
    return ramo.requisitos.every(r => estadoRamos[r] === true);
  }

  // Actualizar el estado de los ramos desbloqueados
  function actualizarDesbloqueos() {
    // Recorrer todos los ramos en DOM para actualizar clases
    document.querySelectorAll(".ramo").forEach(ramoDiv => {
      const nombre = ramoDiv.dataset.nombre;
      const ramoObj = Object.values(malla).flat().find(r => r.nombre === nombre);
      if (!ramoObj) return;

      // Si no está aprobado, y requisitos OK, desbloquear
      if (!estadoRamos[nombre] && requisitosAprobados(ramoObj)) {
        ramoDiv.classList.remove("bloqueado");
      } else if (!estadoRamos[nombre]) {
        ramoDiv.classList.add("bloqueado");
      }
    });
  }

  // Manejar clic para aprobar/desaprobar
  mallaDiv.addEventListener("click", (e) => {
    if (!e.target.classList.contains("ramo")) return;

    const ramoDiv = e.target;
    const nombre = ramoDiv.dataset.nombre;

    // Si está bloqueado no hacer nada
    if (ramoDiv.classList.contains("bloqueado")) return;

    // Cambiar estado de aprobado
    estadoRamos[nombre] = !estadoRamos[nombre];

    // Reflejar estilo aprobado/no aprobado
    if (estadoRamos[nombre]) {
      ramoDiv.classList.add("aprobado");
    } else {
      ramoDiv.classList.remove("aprobado");
    }

    // Actualizar desbloqueos tras cambio
    actualizarDesbloqueos();
  });

  // Inicializar desbloqueos para el primer render
  actualizarDesbloqueos();
});

