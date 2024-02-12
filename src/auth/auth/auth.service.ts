import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async singIn(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneByName(username);
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const payload = { username: user.username, pass: user.password };
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
}
