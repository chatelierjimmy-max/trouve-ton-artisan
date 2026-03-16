USE trouve_ton_artisan;

SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE artisans;
TRUNCATE TABLE specialties;
TRUNCATE TABLE categories;
TRUNCATE TABLE artisans_import;
SET FOREIGN_KEY_CHECKS = 1;

LOAD DATA LOCAL INFILE 'C:/temp/artisans.csv'
INTO TABLE artisans_import
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(nom, specialite, note, ville, about, email, website, categorie, isTop);

INSERT INTO categories (name, slug, createdAt, updatedAt)
SELECT DISTINCT
  ai.categorie,
  LOWER(REPLACE(ai.categorie, ' ', '-')),
  NOW(),
  NOW()
FROM artisans_import ai
WHERE ai.categorie IS NOT NULL
  AND ai.categorie <> ''
  AND NOT EXISTS (
    SELECT 1
    FROM categories c
    WHERE c.name = ai.categorie
  );

INSERT INTO specialties (name, slug, categoryId, createdAt, updatedAt)
SELECT DISTINCT
  ai.specialite,
  LOWER(REPLACE(ai.specialite, ' ', '-')),
  c.id,
  NOW(),
  NOW()
FROM artisans_import ai
JOIN categories c ON c.name = ai.categorie
WHERE ai.specialite IS NOT NULL
  AND ai.specialite <> ''
  AND NOT EXISTS (
    SELECT 1
    FROM specialties s
    WHERE s.name = ai.specialite
  );

INSERT INTO artisans (
  name,
  slug,
  about,
  email,
  website,
  city,
  rating,
  isTop,
  specialtyId,
  createdAt,
  updatedAt
)
SELECT
  ai.nom,
  LOWER(REPLACE(ai.nom, ' ', '-')),
  ai.about,
  ai.email,
  ai.website,
  ai.ville,
  ai.note,
  ai.isTop,
  s.id,
  NOW(),
  NOW()
FROM artisans_import ai
JOIN specialties s ON s.name = ai.specialite
WHERE ai.nom IS NOT NULL
  AND ai.nom <> ''
  AND NOT EXISTS (
    SELECT 1
    FROM artisans a
    WHERE a.name = ai.nom
  );