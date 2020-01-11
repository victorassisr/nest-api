import { Module } from '@nestjs/common';
import { AuthModule } from './components/auth/app.auth.module'

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
