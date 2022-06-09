import { createResource, createSignal, For } from "solid-js";
import { fetchPopularRepos } from "../services/api";

const Popular = () => {
  const [selectedLanguage, setSelectedLanguage] = createSignal('All');
  const [lang] = createResource(selectedLanguage, fetchPopularRepos)

  const languages = ['All','Javascript','Ruby','Java','CSS','Python','PHP','Shell','Rust','Golang'];

  return (
    <div>
      <ul className="lang_list">
        <For each={languages}>
          {(language) => (
            <li
              className={`lang_list_item ${language === selectedLanguage() ? 'active' : undefined}`}
              onClick={() => setSelectedLanguage(language)}
            >
              {language}
            </li>
          )}
        </For>
      </ul>
      {console.log(lang())}
      <div className="container">
        <For each={lang()} fallback={<div>Loading...</div>}>
          {(l, index) => (
            <div className="repo_container">
              <div>#{index() + 1}</div>
              <div className="repo_img_wrapper">
                <img
                  className="repo_img"
                  src={l.owner.avatar_url}
                  alt={`Avatar for ${l.owner.login}`}
                />
              </div>
              <div>
                <a href={l.html_url}>{l.name}</a>
              </div>
              <div>@{l.owner.login}</div>
              <div>{l.stargazers_count} stars</div>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}

export default Popular;