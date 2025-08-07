import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri:
          configService.get<string>('MONGO_URL') ??
          'mongodb://localhost:27017/todoapp',
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [MongooseModule],
})
export class DbModule {}
