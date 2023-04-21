"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1.default)();
var port = 3000;
app.use(body_parser_1.default.json());
app.get('/greeting', function (req, res) {
    var now = new Date();
    var message = {
        message: 'Saludos! Mi nombre es Jesus Cervantes',
        info: "El dia de hoy es ".concat(now.toLocaleString('es-MX', {
            timeZone: 'America/Mexico_City'
        }))
    };
    res.json(message);
});
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
exports.default = app;
