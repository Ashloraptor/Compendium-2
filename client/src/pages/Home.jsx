import { SEARCH_PLANTS } from '../utils/queries';

const HomePage = () => {
  // Fetch plant data
  const { loading, data } = useQuery(SEARCH_PLANTS);

  // Extract plants from data (assuming 'searchPlants' is the field name)
  const plants = data?.searchPlants || [];

  return (
    <div className="home-page">
      <header>
        {/* Header content */}
      </header>
      <main>
        <section className="search-section">
          <div className="container">
            <PlantSearchForm />
          </div>
        </section>
        <section className="plant-list-section">
          <div className="container">
            <h2>Popular Plants</h2>
            {loading ? (
              <p>Loading plants...</p>
            ) : (
              <PlantList plants={plants} />
            )}
          </div>
        </section>
      </main>
      <footer>
        {/* {add footer} */}
      </footer>
    </div>
  );
};

export default HomePage;