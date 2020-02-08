CREATE TABLE IF NOT EXISTS adm_user (
  user_id SERIAL NOT NULL,
  user_name VARCHAR(100) NOT NULL unique,
  user_email VARCHAR(100) NOT NULL,
  user_password VARCHAR(100) NOT NULL,
  PRIMARY KEY (user_id));

  CREATE TABLE IF NOT EXISTS adm_category (
  id_category SERIAL NOT NULL,
  user_id INT NOT NULL,
  category_name VARCHAR(100) NOT NULL,
  icon_name VARCHAR(50) NOT NULL,
  category_enable BOOLEAN NOT NULL,
  PRIMARY KEY (id_category),
  CONSTRAINT fk_user_category
    FOREIGN KEY (user_id)
    REFERENCES adm_user (user_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);