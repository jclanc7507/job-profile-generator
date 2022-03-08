const Manager = require('../lib/Manager.js')

test("generates manager object", () => {
    const manager = new Manager("Nathan Travis", 456789, "n.travis@aol.com", "3B")
    expect(manager.name).toBe("Nathan Travis")
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.email).toMatch("@")
    expect(manager.officeNumber).toMatch("3B")

    console.log(manager)
})

test("fetches Manager office number", () => {
    const manager = new Manager("Nathan Travis", 456789, "n.travis@aol.com", "3B")
    expect(manager.getOfficeNumber()).toBe("3B")
})

test("fetches Manager role", () => {
    const manager = new Manager("Nathan Travis", 456789, "n.travis@aol.com", "3B")
    expect(manager.getRole()).toBe("Manager")
})