const urls = [
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=af6c3f629f7ee51321b55a48d7bbed3d',
  'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=af6c3f629f7ee51321b55a48d7bbed3d',
  'https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014&api_key=af6c3f629f7ee51321b55a48d7bbed3d'
];
window.addEventListener('DOMContentLoaded',()=>{
  const req = urls.map(res=>fetch(res));
  Promise.all(req).then(values=>{
      return Promise.all(values.map(r=>r.json()))
  }).then(catologues=>{
      const [catalogueOne,catalogueTwo,catalogueThree] = catologues;
      // Catalogue One
      const populars = document.getElementById('populars');
      catalogueOne.results.forEach(movie => {
          const article = document.createElement('article');
          article.classList.add('movie');
          const img = document.createElement('img');
          img.src = 'https://image.tmdb.org/t/p/original/'+movie.poster_path;
          article.append(img);
          populars.append(article);
      });
      // Catalogue Two
      const premiers = document.getElementById('premiere');
      catalogueTwo.results.forEach(movie => {
          const article = document.createElement('article');
          article.classList.add('movie');
          const img = document.createElement('img');
          img.src = 'https://image.tmdb.org/t/p/original/'+movie.poster_path;
          article.append(img);
          premiers.append(article);
      });
      // Catalogue three
      const viewed = document.getElementById('viewed');
      catalogueThree.results.forEach(movie => {
          const article = document.createElement('article');
          article.classList.add('movie');
          const img = document.createElement('img');
          img.src = 'https://image.tmdb.org/t/p/original/'+movie.poster_path;
          article.append(img);
          viewed.append(article);
      });
  })
  .catch(error => {
    console.error("Error fetching data:", error); 
  });
});
