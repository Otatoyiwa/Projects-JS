
const apiResponse = {
  data: [
    {
      id: 'a1',
      title: 'Learning JavaScript',
      status: 'published',
      author: { name: 'Ava Stone' },
      stats: { views: 1200 },
    },
    {
      id: 'a2',
      title: 'Draft Notes',
      status: 'draft',
      author: { name: 'Noah Kim' },
      stats: { views: 50 },
    },
    {
      id: 'a3',
      title: 'Async Basics',
      status: 'published',
      author: { name: 'Mina Patel' },
      stats: { views: 900 },
    },
  ],
  meta: {
    total: 3,
  },
};



 function getPublishedArticles(response) {
    let clone = [];
    for(let i of Object.values(response.data)){
        if(i.status === 'published'){
            clone.push(i)
        }
    }
    return clone

}//should return only articles where status is "published".

 function toArticleSummary(article) {
    let clone = JSON.parse(JSON.stringify(article));
    return {
        id: clone.id, 
        title: clone.title, 
        authorName: clone.author.name, 
        views: clone.stats.views
    }

}//should return an object with id, title, authorName, and views.

 function normalizeArticles(response) {
    return JSON.stringify(getPublishedArticles(response).map(article => toArticleSummary(article)))
}//should return summaries for published articles only.



console.log(normalizeArticles(apiResponse));
console.log(getPublishedArticles(apiResponse).length);
console.log(toArticleSummary(apiResponse.data[0]));