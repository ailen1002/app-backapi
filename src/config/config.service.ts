import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class ConfigService {
    private readonly envConfig: Record<string, string>;
}
