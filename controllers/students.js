const Student = require('../models/Student');

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createStudent = async (req, res) => {
    const { name, email, resume } = req.body;
    const newStudent = new Student({ name, email, resume });
    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
