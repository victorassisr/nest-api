import { Module } from '@nestjs/common';
import { LoginModule } from './components/login/app.login.module'

@Module({
  imports: [LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
