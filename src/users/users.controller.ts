import { BaseController } from "../comon/base.controller";
import { LoggerService } from "../logger/logger.service";
import { Request, Response, NextFunction} from 'express';
import { HTTPError } from "../errors/http-error-class";

 
export class UserController extends BaseController {
    constructor(logger: LoggerService) {
        super(logger);
        this.bindRoutes([
            { path: '/register', method: 'post', func: this.regiter },
            { path: '/login', method: 'post', func: this.login }
        ]);
    }

    login(req: Request, res: Response, next: NextFunction) {
        next(new HTTPError(401, 'Ошибка авторизации'));
    }

    regiter(req: Request, res: Response, next: NextFunction) {

        this.ok( res, 'register');
    }
}