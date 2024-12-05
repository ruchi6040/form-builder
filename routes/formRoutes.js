const express = require('express');
const Form = require('../models/Form');
const router = express.Router();

// Create Form
router.post('/create', async (req, res) => {
    try {
        const form = new Form(req.body);
        await form.save();
        res.status(201).send(form);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Get Form
router.get('/:id', async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        res.send(form);
    } catch (err) {
        res.status(404).send(err);
    }
});

// Submit Response
router.post('/:id/submit', async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        form.responses.push(req.body);
        await form.save();
        res.send(form);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
