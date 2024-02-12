import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from '@nestjs/core'
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Rol } from '../../../common/enums/rol.enum';
import { Observable } from "rxjs";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
       const role = this.reflector.getAllAndOverride<Rol>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
       ]);

       if(!role){
        return true;
       }

       const { user } = context.switchToHttp().getRequest();

       if (user.rol === Rol.Admin) {
        return true;
       }

       return role === user.rol;
        
    }
}