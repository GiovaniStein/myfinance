require('dotenv').config();


const { PORT, HOST,
    DB_START_NAME,
    DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT,
    JWT_EXPIRATION_TIME, JWT_SECRET } = process.env;

    const Config = {
        'PORT': PORT || 3333,
        'HOST': HOST || 'localhost',
        'DB_START_NAME': DB_START_NAME || 'postgres',
        'DB_USER': DB_USER || 'postgres',
        'DB_HOST': DB_HOST || 'localhost',
        'DB_NAME': DB_NAME || 'myfinance',
        'DB_PASSWORD': DB_PASSWORD || 'postgres',
        'DB_PORT': DB_PORT || 5432,
        'JWT_EXPIRATION_TIME': JWT_EXPIRATION_TIME || 900000, //milliseconds (15 min)
        'JWT_SECRET': JWT_SECRET || 'Ae2J6ocabNrR9KXVIkh',
      };
      
      module.exports = Config;