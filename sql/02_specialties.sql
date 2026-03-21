USE trouve_ton_artisan;

CREATE TABLE specialties (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255) NOT NULL,
 slug VARCHAR(255) NOT NULL,
 categoryId INT,
 createdAt DATETIME,
 updatedAt DATETIME,
 FOREIGN KEY (categoryId) REFERENCES categories(id)
);

INSERT INTO specialties (name, slug, categoryId, createdAt, updatedAt) VALUES
('Plombier', 'plombier', 1, NOW(), NOW()),
('Électricien', 'electricien', 1, NOW(), NOW()),
('Menuisier', 'menuisier', 3, NOW(), NOW()),
('Coiffeur', 'coiffeur', 2, NOW(), NOW()),
('Boulanger', 'boulanger', 4, NOW(), NOW());