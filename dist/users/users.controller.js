"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const base_controller_1 = require("../comon/base.controller");
const http_error_class_1 = require("../errors/http-error-class");
class UserController extends base_controller_1.BaseController {
    constructor(logger) {
        super(logger);
        this.bindRoutes([
            { path: '/register', method: 'post', func: this.regiter },
            { path: '/login', method: 'post', func: this.login }
        ]);
    }
    login(req, res, next) {
        next(new http_error_class_1.HTTPError(401, 'Ошибка авторизации'));
    }
    regiter(req, res, next) {
        this.ok(res, 'register');
    }
}
exports.UserController = UserController;
