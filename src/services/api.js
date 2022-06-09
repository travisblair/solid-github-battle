const baseUrl = 'http://api.github.com';
const id = '84578f19a9a926634249';
const sec = '502dc7203598a42426d1e277384404091c24d88c';
const params = `?client_id=${id}&client_secret=${sec}`;
const latest = `${params}&order=asc&sort=updated`;


export const getUserRepos = async (username) => (
  await fetch(`${baseUrl}/users/${username}/repos${latest}`))
  .json();

export const getProfile = async (username) => (
  await fetch(`${baseUrl}/users/${username}${params}`))
  .json();

export const getRepos = async (username, quantity = 100) => (
  await fetch(`${baseUrl}/users/${username}/repos${params}&per_page=${quantity}`))
  .json();

export const getStarCount = async (repos) => (
  repos.reduce((count, repo) => (
    count + repo.stargazers_count
  ), 0)
)

export const calculateScore = (profile, repos) => {
  let followers = profile.followers;
  let totalStars = getStarCount(repos);

  return followers * 3 + totalStars
}


const getUserData = async (player) => {
  const promises = await Promise.all([getProfile(player), getRepos(player)])
  const [ profile, repos ] = promises;

  return {
    profile,
    score: calculateScore(profile, repos)
  }
}

const sortPlayers = (players) => (
  players.sort((a,b) => b.score - a.score)
)

export const battle = async (players) => {
  const promises = await Promise.all(players.map(async (player) => await getUserData(player)))
  return sortPlayers(promises)
}

export const fetchPopularRepos = async (language) => {
  const encodeURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
  const request = await fetch(encodeURI, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
  });
  const resp = await request.json()
  console.log(resp.items)
  return resp.items
}