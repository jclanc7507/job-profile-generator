const Intern = require('../lib/Intern.js')

test("creates Intern object", () => {
    const intern = new Intern("Joshua Daniels", 345678, "joshjoshD@yahoo.com", "Hagerstown Community College")
    expect(intern.name).toBe("Joshua Daniels")
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toMatch("@")
    expect(intern.school).toMatch("Hagerstown Community College")

    console.log(Intern)
})

test ("fetches Intern's school name", () => {
    const intern = new Intern("Joshua Daniels", 345678, "joshjoshD@yahoo.com", "Hagerstown Community College")
    expect(intern.school).toMatch("Hagerstown Community College")
})

test("fetches Intern's role", () => {
    const intern = new Intern("Joshua Daniels", 345678, "joshjoshD@yahoo.com", "Hagerstown Community College")
    expect(intern.getRole()).toBe("Intern")
})