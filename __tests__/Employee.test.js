const Employee = require('../lib/Employee.js')

test("creates Employee object", () => {
    const employee = new Employee("Jeremiah Clancy", 123456, "jclanc7507@gmail.com")
    expect(employee.name).toBe("Jeremiah Clancy")
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toMatch("@")
    console.log(employee)
})

test ("fetches employee name", () => {
    const employee = new Employee("Jeremiah Clancy", 123456, "jclanc7507@gmail.com")
    expect(employee.getName()).toBe("Jeremiah Clancy")
})

test("fetches employee role", () => {
    const employee = new Employee("Jeremiah Clancy", 123456, "jclanc7507@gmail.com")
    expect(employee.getRole()).toEqual("Employee")
})

test("fetches employee id number", () => {
    const employee = new Employee("Jeremiah Clancy", 123456, "jclanc7507@gmail.com")
    expect(employee.getId()).toEqual(expect.any(Number))
})

test("fetches employee email", () => {
    const employee = new Employee("Jeremiah Clancy", 123456, "jclanc7507@gmail.com")
    expect(employee.getEmail()).toMatch("@")
})