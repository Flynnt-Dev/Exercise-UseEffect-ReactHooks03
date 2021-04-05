import React from "react";
import PostList from "./PostList";

/*
function BlogSection(){
  const [posts, setPosts]=React.setState();
  const [loading, setloading]=React.setState(true);

  React.useEffect(()=>{
      const fetchData= async()=>{
        const response=fetch("https://jsonplaceholder.typicode.com/posts/")
        const data= await response.json()
        setPosts(data)
        console.log("data fetch! Posts are ready!")
      };

      posts? setLoading(!loading):fetchData();

      return()=>{
        console.log("Bye!");
      };
    },
    []
  );

  return(
    <div className="App">
        <h1>Welcome, {user}</h1>
        <h2>Here are you favorite articles</h2>
        {loading ? (
          <h1>loading posts</h1>
        ) : (
          <PostList posts={posts} />
        )}

        <button onClick={onLogout}>Logout</button>
    </div>
  )
}


*/
class BlogSection extends React.Component {
  state = {
    posts: [],
    loading: true
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((posts) => this.setState({ posts: posts, loading: false }));
  }

  componentWillUnmount() {
    console.log("Bye!");
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome, {this.props.user}</h1>
        <h2>Here are you favorite articles</h2>
        {this.state.loading ? (
          <h1>loading posts</h1>
        ) : (
          <PostList posts={this.state.posts} />
        )}

        <button onClick={this.props.onLogout}>Logout</button>
      </div>
    );
  }
}

export default BlogSection;
