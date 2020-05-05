CREATE TABLE IF NOT EXISTS "user" (
  "id" SERIAL NOT NULL,
  "name" VARCHAR(100) NOT NULL unique,
  "email" VARCHAR(100) NOT NULL,
  "password" VARCHAR(100) NOT NULL,
  PRIMARY KEY ("id"));

  CREATE TABLE IF NOT EXISTS "category" (
  "id" SERIAL NOT NULL,
  "user_id" INT NOT NULL,
  "name" VARCHAR(100) NOT NULL,
  "icon" VARCHAR(50) NOT NULL,
  "enable" BOOLEAN NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "fk_user_category"
    FOREIGN KEY ("user_id")
    REFERENCES "user" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS "operation" (
  "id" SERIAL NOT NULL,
  "user_id" INT NOT NULL,
  "category_id" INT NOT NULL,
  "description" VARCHAR(100) NOT NULL,
  "date" DATE NOT NULL,
  "value" DECIMAL(7,2) NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "fk_operation_user"
    FOREIGN KEY ("user_id")
    REFERENCES "user" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_operation_category"
    FOREIGN KEY ("category_id")
    REFERENCES "category" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
