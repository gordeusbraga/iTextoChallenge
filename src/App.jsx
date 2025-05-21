import React from "react";
import Header from "./components/Header.jsx";
import SearchComponents from "./components/Search.jsx";
import Posts from "./components/Posts.jsx";
import "./styles/App.css";
export default function App() {

  const [posts, setPosts] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [query, setQuery] = React.useState("");

  async function fetchPosts(page) {
    const response = await fetch("https://api.devall.com.br/api/v2/post?page=" + page, {
      method: "GET",
    }
    );
    const data = await response.json();
    return data;
  }

  React.useEffect(() => {
    fetchPosts(1).then(data => {
      setPosts(posts => [...posts, ...data]);
    });
  }, []);
  async function morePosts() {
    const nextPage = page + 1;
    let newPosts = [];

    if (query) {
      const response = await fetch(`https://api.devall.com.br/api/v2/post?content=${query}&page=${nextPage}`);
      newPosts = await response.json();
    } else {
      newPosts = await fetchPosts(nextPage);
    }
    if (!newPosts || newPosts.length === 0) {

      setPosts([]);
      return;
    }

    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setPage(nextPage);
    console.log(posts);
  }

  //Usar search no lugar de content nao funcionou como diz no yml
  async function searchPosts(query, page) {
    const response = await fetch(`https://api.devall.com.br/api/v2/post?content=${query}&page=${page}`);
    const data = await response.json();

    if (!data || data.length === 0) {

      setPosts([]);
      return;
    }
    setPosts(data);
  }

  function handleSearch(query) {
    setQuery(query);
    setPage(1);
    setPosts([]);
    searchPosts(query, 1);

  }



  return (
    <section className="w-screen min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-start pt-7">
      <Header></Header>
      <SearchComponents onSearch={handleSearch}></SearchComponents>
      <section className="w-[100%] h-[80%] flex align-center justify-center flex-wrap max-w-[1040px] ">
        <Posts posts={posts} />
      </section>

      <footer className="w-[100%] h-[10%] flex align-center justify-center flex-wrap max-w-[1040px] mt-5 mb-5">
        <button className="p-6 bg-[#111827] font-body text-[#14B605] rounded-[10px]" onClick={() => {
          morePosts();
        }}>Ler Mais</button>
      </footer>



    </section >
  );
}
