import db from '../database.js';
import Users from '../model/users.model.js'

export const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

export const getUserById = async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id);
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
    
    const user = new User({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
    });

    await user.save();

    res.send(user);
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await User.deleteOne({ _id: id });
        res.json(result);
    } catch (err) {
        return res.status(400).send('Nicht gefunden mit id: '+id+' - '+err);
    }
}