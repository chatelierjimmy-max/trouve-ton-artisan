/**
 * Création de la base de données
 * si elle n’existe pas
 */
CREATE DATABASE IF NOT EXISTS trouve_ton_artisan

/**
 * Encodage UTF8 complet
 */
CHARACTER SET utf8mb4

/**
 * Collation Unicode
 */
COLLATE utf8mb4_unicode_ci;

/**
 * Sélection de la base
 */
USE trouve_ton_artisan;

/**
 * Suppression des tables existantes
 * dans l’ordre des dépendances
 */
DROP TABLE IF EXISTS contact_messages;

DROP TABLE IF EXISTS artisans;

DROP TABLE IF EXISTS specialties;

DROP TABLE IF EXISTS categories;

/**
 * Table catégories
 */
CREATE TABLE categories (
  /**
   * Identifiant unique catégorie
   */
  id INT AUTO_INCREMENT PRIMARY KEY,

  /**
   * Nom catégorie
   */
  name VARCHAR(100) NOT NULL UNIQUE,

  /**
   * Slug URL catégorie
   */
  slug VARCHAR(100) NOT NULL UNIQUE,

  /**
   * Date création
   */
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  /**
   * Date modification
   */
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  ON UPDATE CURRENT_TIMESTAMP
);

/**
 * Table spécialités
 */
CREATE TABLE specialties (
  /**
   * Identifiant spécialité
   */
  id INT AUTO_INCREMENT PRIMARY KEY,

  /**
   * Nom spécialité
   */
  name VARCHAR(100) NOT NULL,

  /**
   * Slug spécialité
   */
  slug VARCHAR(100) NOT NULL UNIQUE,

  /**
   * Référence catégorie
   */
  category_id INT NOT NULL,

  /**
   * Date création
   */
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  /**
   * Date modification
   */
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  ON UPDATE CURRENT_TIMESTAMP,

  /**
   * Clé étrangère catégorie
   */
  CONSTRAINT fk_specialties_category
    FOREIGN KEY (category_id)
    REFERENCES categories(id)

    ON DELETE RESTRICT

    ON UPDATE CASCADE
);

/**
 * Table artisans
 */
CREATE TABLE artisans (
  /**
   * Identifiant artisan
   */
  id INT AUTO_INCREMENT PRIMARY KEY,

  /**
   * Nom artisan
   */
  name VARCHAR(150) NOT NULL,

  /**
   * Slug URL artisan
   */
  slug VARCHAR(150) NOT NULL UNIQUE,

  /**
   * Note artisan
   */
  note DECIMAL(2,1) NOT NULL DEFAULT 0.0,

  /**
   * Ville artisan
   */
  location VARCHAR(150) NOT NULL,

  /**
   * Description artisan
   */
  about TEXT,

  /**
   * Email artisan
   */
  email VARCHAR(255) NOT NULL,

  /**
   * Site web artisan
   */
  website VARCHAR(255),

  /**
   * Image artisan
   */
  image VARCHAR(255),

  /**
   * Artisan du mois
   */
  is_top BOOLEAN DEFAULT FALSE,

  /**
   * Référence spécialité
   */
  specialty_id INT NOT NULL,

  /**
   * Date création
   */
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  /**
   * Date modification
   */
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  ON UPDATE CURRENT_TIMESTAMP,

  /**
   * Clé étrangère spécialité
   */
  CONSTRAINT fk_artisans_specialty
    FOREIGN KEY (specialty_id)
    REFERENCES specialties(id)

    ON DELETE RESTRICT

    ON UPDATE CASCADE,

  /**
   * Vérification note artisan
   */
  CONSTRAINT chk_artisan_note
    CHECK (note >= 0 AND note <= 5)
);

/**
 * Table messages contact
 */
CREATE TABLE contact_messages (
  /**
   * Identifiant message
   */
  id INT AUTO_INCREMENT PRIMARY KEY,

  /**
   * Nom expéditeur
   */
  name VARCHAR(150) NOT NULL,

  /**
   * Email expéditeur
   */
  email VARCHAR(255) NOT NULL,

  /**
   * Sujet message
   */
  subject VARCHAR(255) NOT NULL,

  /**
   * Contenu message
   */
  message TEXT NOT NULL,

  /**
   * Référence artisan
   */
  artisan_id INT NOT NULL,

  /**
   * Date création message
   */
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  /**
   * Clé étrangère artisan
   */
  CONSTRAINT fk_contact_artisan
    FOREIGN KEY (artisan_id)
    REFERENCES artisans(id)

    ON DELETE CASCADE

    ON UPDATE CASCADE
);

/**
 * Index optimisation recherche artisans
 */
CREATE INDEX idx_artisans_name
ON artisans(name);

/**
 * Index optimisation localisation
 */
CREATE INDEX idx_artisans_location
ON artisans(location);

/**
 * Index optimisation catégories
 */
CREATE INDEX idx_specialties_category
ON specialties(category_id);