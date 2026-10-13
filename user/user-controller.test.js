const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('usuario que no esta en la lisa de suarios', () => {    
    const userinexistente = {id:567 , name:"Saniago" , email:"santigo@generation.org"};
    const users = userController.getUsers();
    expect(users).not.toContainEqual(userinexistente);

  });

  test('usuario que no esta en la lisa de suarios remove', () => {    
    let user = (1234,"Santiago", "santiago@generation.org");
    
    expect(userController.users).not.toContain(user);
  });

  test('buscar correo', () => {
    let emailb = 'carlos@gmail.com';
    let user = new User ( '8954', 'Carlos', 'carlos@gmail.com');
    userController.add(user);
    let busqueda = userController.findByEmail(emailb);
    expect(busqueda).toEqual(user);
  });

  test('buscar correo que no existe', () => {
    let emailb = 'joel@gmail.com';
    let busqueda = userController.findByEmail(emailb);
    expect(busqueda).not.toEqual(emailb);
  });

  test('buscar id', () => {
    let idb = '6524';
    let user = new User ( '6524', 'Diana', 'Diana@gmail.com');
    userController.add(user);
    let busqueda = userController.findById(idb);
    expect(busqueda).toEqual(user);
  });

  test('buscar id que no existe', () => {
    let idb = '9658';
    let busqueda = userController.findById(idb);
    expect(busqueda).not.toEqual(idb);
    
  });



