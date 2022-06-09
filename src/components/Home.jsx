import { Link } from "solid-app-router";

const Home = () => {
  return (
    <div>
      <h1>Solidjs Github Battle!</h1>
      <Link href="/battle">
        Battle
      </Link>
    </div>
  )
}

export default Home;