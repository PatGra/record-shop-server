import db from '../database.js';
import Users from '../model/users.model.js'
import bcrypt from 'bcrypt'

export const getUsers = async (req, res) => {
    const users = await Users.find();
    res.json(users);
};

export const getUserById = async (req, res) => {
    const { id } = req.params;

    const user = await Users.findById(id);
    if (!user) {
        return res.status(400).send('Nicht gefunden');
    }
    
    res.json(user);
};

export const addUser = async (req, res) => {
    const data = req.body;
    // Testen ob data alle infos enthält: title, artist, year, cover, price
    if (!data.firstName || !data.lastName || !data.email || !data.password) {
        return res.status(400).send('Falsche Daten');
    }
    
    const user = new Users({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
    });

    await user.save();

    res.send(user);
}

export const signUpUser = async (req, res) => {
    let { firstName, lastName, email, password } = req.body;
    if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]).{8,}$/.test(
        password
      )
    ) {
      res
        .status(400)
        .send(
          'Password should contain number, uppercase, lowercase, special character.'
        );
      return;
    }
    const checkUser = await Users.findOne({ email: email });
    if (checkUser) {
      res.status(400).send('User already exists');
      return;
    }
    password = await bcrypt.hash(password, 10);
    try {
      await Users.create({ firstName, lastName, email, password });
  
      res.status(201).send('created');
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }

  export const logInUser = async(req, res) =>{
    const { email, password } = req.body;
    const user = await Users.findOne({ email: email }).select('+password');
    try {
      if (!user) {
        res.status(404).send('User not found');
      }
      const newPassword = await bcrypt.compare(password, user.password);
      if (newPassword === true) {
        res.status(200).send('Login successful');
      } else {
        res.status(404).send('Wrong password');
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Users.deleteOne({ _id: id });
        res.json(result);
    } catch (err) {
        return res.status(400).send('Nicht gefunden mit id: '+id+' - '+err);
    }
}