const Engineer = require('../lib/Engineer.js');

test("creates Engineer object", () => {
    const engineer = new Engineer("Jedidiah Jones", 234567, "jjones34@gmail.com", "jedidiah34");
    expect(engineer.name).toBe("Jedidiah Jones")
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toMatch("@")
    expect(engineer.github).toMatch("jedidiah34")

    console.log(engineer)
})

test("fetches Engineer's github username", () => {
    const engineer = new Engineer("Jedidiah Jones", 234567, "jjones34@gmail.com", "jedidiah34");
    expect(engineer.github).toBe("jedidiah34")
})

test("fetches Engineer's role", () => {
    const engineer = new Engineer("Jedidiah Jones", 234567, "jjones34@gmail.com", "jedidiah34");
    expect(engineer.getRole()).toBe("Engineer")
})