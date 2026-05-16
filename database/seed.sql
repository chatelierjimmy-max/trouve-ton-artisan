USE trouve_ton_artisan;

-- =========================
-- CATEGORIES
-- =========================

INSERT INTO categories (name, slug) VALUES
('Bâtiment', 'batiment'),
('Services', 'services'),
('Fabrication', 'fabrication'),
('Alimentation', 'alimentation');

-- =========================
-- SPECIALTIES
-- =========================

INSERT INTO specialties (name, slug, category_id) VALUES
('Boucher', 'boucher', 4),
('Boulanger', 'boulanger', 4),
('Chocolatier', 'chocolatier', 4),
('Traiteur', 'traiteur', 4),

('Chauffagiste', 'chauffagiste', 1),
('Electricien', 'electricien', 1),
('Menuisier', 'menuisier', 1),
('Plombier', 'plombier', 1),

('Bijoutier', 'bijoutier', 3),
('Couturier', 'couturier', 3),
('Ferronier', 'ferronier', 3),

('Coiffeur', 'coiffeur', 2),
('Fleuriste', 'fleuriste', 2),
('Toiletteur', 'toiletteur', 2),
('Webdesign', 'webdesign', 2);

-- =========================
-- ARTISANS
-- =========================

INSERT INTO artisans
(name, slug, note, location, about, email, website, image, is_top, specialty_id)
VALUES

(
'Boucherie Dumont',
'boucherie-dumont',
4.5,
'Lyon',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'boucherie.dumond@gmail.com',
NULL,
'/images/artisans/boucherie-dumont.jpg',
FALSE,
1
),

(
'Au pain chaud',
'au-pain-chaud',
4.8,
'Montélimar',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'aupainchaud@hotmail.com',
NULL,
'/images/artisans/au-pain-chaud.jpg',
TRUE,
2
),

(
'Chocolaterie Labbé',
'chocolaterie-labbe',
4.9,
'Lyon',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'chocolaterie-labbe@gmail.com',
'https://chocolaterie-labbe.fr',
'/images/artisans/chocolaterie-labbe.jpg',
TRUE,
3
),

(
'Traiteur Truchon',
'traiteur-truchon',
4.1,
'Lyon',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'contact@truchon-traiteur.fr',
'https://truchon-traiteur.fr',
'/images/artisans/traiteur-truchon.jpg',
FALSE,
4
),

(
'Orville Salmons',
'orville-salmons',
5.0,
'Evian',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'o-salmons@live.com',
NULL,
'/images/artisans/orville-salmons.jpg',
TRUE,
5
),

(
'Mont Blanc Eléctricité',
'mont-blanc-electricite',
4.5,
'Chamonix',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'contact@mont-blanc-electricite.com',
'https://mont-blanc-electricite.com',
'/images/artisans/mont-blanc-electricite.jpg',
FALSE,
6
),

(
'Boutot & fils',
'boutot-et-fils',
4.7,
'Bourg-en-Bresse',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'boutot-menuiserie@gmail.com',
'https://boutot-menuiserie.com',
'/images/artisans/boutot-fils.jpg',
FALSE,
7
),

(
'Vallis Bellemare',
'vallis-bellemare',
4.0,
'Vienne',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'v.bellemare@gmail.com',
'https://plomberie-bellemare.com',
'/images/artisans/vallis-bellemare.jpg',
FALSE,
8
),

(
'Claude Quinn',
'claude-quinn',
4.2,
'Aix-les-Bains',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'claude.quinn@gmail.com',
NULL,
'/images/artisans/claude-quinn.jpg',
FALSE,
9
),

(
'Amitee Lécuyer',
'amitee-lecuyer',
4.5,
'Annecy',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'a.amitee@hotmail.com',
'https://lecuyer-couture.com',
'/images/artisans/amitee-lecuyer.jpg',
FALSE,
10
),

(
'Ernest Carignan',
'ernest-carignan',
5.0,
'Le Puy-en-Velay',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'e-carigan@hotmail.com',
NULL,
'/images/artisans/ernest-carignan.jpg',
FALSE,
11
),

(
'Royden Charbonneau',
'royden-charbonneau',
3.8,
'Saint-Priest',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'r.charbonneau@gmail.com',
NULL,
'/images/artisans/royden-charbonneau.jpg',
FALSE,
12
),

(
'Leala Dennis',
'leala-dennis',
3.8,
'Chambéry',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'l.dennos@hotmail.fr',
'https://coiffure-leala-chambery.fr',
'/images/artisans/leala-dennis.jpg',
FALSE,
12
),

(
'C''est sup''hair',
'cest-suphair',
4.1,
'Romans-sur-Isère',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'sup-hair@gmail.com',
'https://sup-hair.fr',
'/images/artisans/cest-suphair.jpg',
FALSE,
12
),

(
'Le monde des fleurs',
'le-monde-des-fleurs',
4.6,
'Annonay',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'contact@le-monde-des-fleurs-annonay.fr',
'https://le-monde-des-fleurs-annonay.fr',
'/images/artisans/le-monde-des-fleurs.jpg',
FALSE,
13
),

(
'Valérie Laderoute',
'valerie-laderoute',
4.5,
'Valence',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'v-laredoute@gmail.com',
NULL,
'/images/artisans/valerie-laderoute.jpg',
FALSE,
14
),

(
'CM Graphisme',
'cm-graphisme',
4.4,
'Valence',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'contact@cm-graphisme.com',
'https://cm-graphisme.com',
'/images/artisans/cm-graphisme.jpg',
FALSE,
15
);