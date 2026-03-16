USE trouve_ton_artisan;

DROP TABLE IF EXISTS artisans_import;

CREATE TABLE artisans_import (
  nom VARCHAR(255),
  specialite VARCHAR(255),
  note FLOAT,
  ville VARCHAR(255),
  about TEXT,
  email VARCHAR(255),
  website VARCHAR(255),
  categorie VARCHAR(255),
  isTop BOOLEAN
);