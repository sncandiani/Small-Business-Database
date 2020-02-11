const htmlFactory = (employees) => {
    return `
    <article class="employee">
    <header class="employeen_name">
        <h1>${employees["name"]}</h1>
    </header>
    <section class="employee__department">
        Works in the ${employees.department.name} department
    </section>
    <section class="employee__computer">
        Currently using a ${employees.computer.name}
    </section>
</article>      `
}
const employeeContainer = document.getElementById("container")

const renderEmployees = (employees) => {
    employees.forEach(employee => {
        employeeInfo = htmlFactory(employee)
        console.log(employee)
        employeeContainer.innerHTML += employeeInfo
    })
}
//http://localhost:8088/employees?_expand=department
//http://localhost:8088/employees
const api = {
    getEmployee() {
        return fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
        .then(resp => resp.json())
    }
}

api.getEmployee().then(renderEmployees)
