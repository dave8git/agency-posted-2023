const Add = require('../models/ads.model');

exports.getAll = async (req, res) => {
    try {
        res.json(await Ads.find())
    } catch {

    }
};

exports.getById = async (req, res) => { 
    try {

    } catch {

    }

}

exports.search = async (req, res) => {

}

exports.post = async (req, res) => {

}

exports.delete = async (req, res) => {

}

exports.put = async (req, res) => {

}

