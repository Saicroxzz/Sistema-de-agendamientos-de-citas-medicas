document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cita agendada con éxito!');
});

const availableTimes = [
    'Lunes - 9:00 AM a 11:00 AM, 2:30 PM a 4:00 PM',
    'Martes - 9:00 AM a 11:00 AM, 2:30 PM a 4:00 PM',
    'Miércoles - 8:00 AM a 12:00 PM',
    'Jueves - 9:00 AM a 11:00 AM, 2:30 PM a 4:00 PM',
    'Viernes - 8:00 AM a 12:00 PM'
];

const timesList = document.getElementById('availableTimes');
const timeSelect = document.getElementById('appointmentTime');

// Mostrar los horarios disponibles
availableTimes.forEach(time => {
    const li = document.createElement('li');
    li.textContent = time;
    timesList.appendChild(li);
});

// Actualizar las horas disponibles en el select
function updateAvailableTimes() {
    const date = new Date(document.getElementById('appointmentDate').value);
    timeSelect.innerHTML = '';
    availableTimes.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        timeSelect.appendChild(option);
    });
}

// Actualizar el select cuando se cambie la fecha
document.getElementById('appointmentDate').addEventListener('change', updateAvailableTimes);
