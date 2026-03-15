USE trouve_ton_artisan;

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL,
  createdAt DATETIME,
  updatedAt DATETIME
);

INSERT INTO Categories (name, slug, createdAt, updatedAt) VALUES
('Bâtiment', 'batiment', NOW(), NOW()),
('Services', 'services', NOW(), NOW()),
('Fabrication', 'fabrication', NOW(), NOW()),
('Alimentation', 'alimentation', NOW(), NOW());