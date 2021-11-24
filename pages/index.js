import { server } from '../config'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }

// import axios from 'axios';

// const Home = ({ restaurants, error }) => {
//   console.log(restaurants);
//   if (error) {
//     return <div>An error occured: {error.message}</div>;
//   }
//   return (
//     <ul>
//       {restaurants.map(restaurant => (
//         <li key={restaurant.id}>{restaurant.name}</li>
//       ))}
//     </ul>
//   );
// };

// Home.getInitialProps = async ctx => {
//   try {
//     const res = await axios.get('http://localhost:1337/categories');
//     const restaurants = res.data;
//     return { restaurants };
//   } catch (error) {
//     return { error };
//   }
// };

// export default Home;
