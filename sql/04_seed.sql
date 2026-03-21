USE trouve_ton_artisan;

-- categories

INSERT INTO Categories (name, slug, createdAt, updatedAt) VALUES
('Bâtiment', 'batiment', NOW(), NOW()),
('Services', 'services', NOW(), NOW()),
('Fabrication', 'fabrication', NOW(), NOW()),
('Alimentation', 'alimentation', NOW(), NOW());

-- specialties

INSERT INTO Specialties (name, slug, categoryId, createdAt, updatedAt) VALUES
('Plombier', 'plombier', 1, NOW(), NOW()),
('Électricien', 'electricien', 1, NOW(), NOW()),
('Menuisier', 'menuisier', 3, NOW(), NOW()),
('Coiffeur', 'coiffeur', 2, NOW(), NOW()),
('Boulanger', 'boulanger', 4, NOW(), NOW());

-- artisans

INSERT INTO Artisans (name, slug, about, email, website, city, rating, isTop, specialtyId, createdAt, updatedAt) VALUES
('Plomberie Martin', 'plomberie-martin', 'Interventions rapides en plomberie, dépannage et installation.', 'contact@plomberie-martin.fr', 'https://example.com', 'Annecy', 4.9, true, 1, NOW(), NOW()),
('Électricité Bernard', 'electricite-bernard', 'Installation électrique, mise aux normes et rénovation.', 'contact@electricite-bernard.fr', 'https://example.com', 'Grenoble', 4.7, false, 2, NOW(), NOW()),
('Menuiserie Durand', 'menuiserie-durand', 'Fabrication de meubles sur mesure et rénovation intérieure.', 'contact@menuiserie-durand.fr', 'https://example.com', 'Villeurbanne', 4.6, true, 3, NOW(), NOW()),
('Coiffure Élégance', 'coiffure-elegance', 'Salon de coiffure mixte avec prestations sur rendez-vous.', 'contact@coiffure-elegance.fr', 'https://example.com', 'Clermont-Ferrand', 4.5, false, 4, NOW(), NOW()),
('Boulangerie du Centre', 'boulangerie-du-centre', 'Artisan boulanger proposant pains traditionnels et viennoiseries maison.', 'contact@boulangerie-centre.fr', 'https://example.com', 'Lyon', 4.8, true, 5, NOW(), NOW());