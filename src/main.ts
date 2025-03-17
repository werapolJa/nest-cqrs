import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ เปิดใช้งาน CORS เพื่อให้ Frontend (localhost:3000) ใช้ API ได้
  app.enableCors({
    origin: '*', // หรือใช้ '*' ถ้าต้องการเปิดให้ทุกโดเมน
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
  });

  const port = process.env.PORT || 3000;
  console.log(`🚀 Server running on port ${port}`);
  await app.listen(port);
}
bootstrap();
