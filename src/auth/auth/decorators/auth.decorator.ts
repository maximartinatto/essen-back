import { UseGuards, applyDecorators } from "@nestjs/common";
import { Rol } from "../../../common/enums/rol.enum";
import { Roles } from "./roles.decorator";
import { AuthGuard } from "../../auth/guard/auth.guard";
import { RolesGuard } from "../../auth/guard/roles.guard";

export function Auth(rol: Rol){
    return applyDecorators(
        Roles(rol),
        UseGuards(AuthGuard, RolesGuard)
    );
}
