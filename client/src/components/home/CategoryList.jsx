import { Link } from 'react-router-dom'
import { categories } from '../../data/artisans'

function CategoryList() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Catégories d’artisans</h2>

        <div className="row g-3">
          {categories.map((category) => (
            <div className="col-12 col-md-6 col-lg-3" key={category.id}>
              <Link
                to={`/artisans?category=${category.slug}`}
                className="btn btn-outline-primary w-100 py-3"
              >
                {category.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryList
