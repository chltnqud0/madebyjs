import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authcredentialdto: AuthCredentialsDto
  ): Promise<void> {
    return this.authService.signUp(authcredentialdto);
  }

  @Post('/signin')
  singIn(@Body(ValidationPipe) authcredentialdto: AuthCredentialsDto) {
    return this.authService.signIn(authcredentialdto);
  }
}
