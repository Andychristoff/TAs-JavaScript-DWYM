function getTheTitles(libros){
    let titulos = []
    libros.forEach(element => {
        titulos.push(element.title);
    });
    console.log(titulos);
    return titulos;
}


const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    },
    {
        title: 'Book3',
        author: 'Name3'
    },
    {
        title: 'Book4',
        author: 'Name4'
    },
    {
        title: 'Book5',
        author: 'Name5'
    }
  ];
  
getTheTitles(books);