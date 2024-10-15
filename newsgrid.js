const articles = [
  { title: 'Tech News', image: '/tech.jpg', link: '/tech' },
  { title: 'Sports Updates', image: '/sports.jpg', link: '/sports' },
  { title: 'Entertainment Buzz', image: '/entertainment.jpg', link: '/entertainment' },
];

const NewsGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={article.image} alt={article.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <a href={article.link} className="text-blue-600">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsGrid;
