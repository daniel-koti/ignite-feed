import { usePersistedState } from './hooks/usePersistedState';
import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { GlobalStyle } from './styles/global';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/57706806?v=4",
      name: "Carlos Miguel",
      role: "CTO at @Nubank", 
    },
    content: [
      { type: 'paragraph', content: 'Saudações a todos!' },
      { type: 'paragraph', content: 'Estão disponíveis as inscrições para a viagem ao Silicon Valey. Boa Sorte!! 😁😁' },
      { type: 'link', content: '#viagem#siliconvaley' },
    ],
    publishedAt: new Date('2022-06-02 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat", 
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Temos vagas para desenvolvedores React e React Native, quem quiser se inscrever é só me chamar no privado! 😎 🚀' },
      { type: 'link', content: '#vagas#recrutamento#rocketseat#react#reactnative#programacao' },
    ],
    publishedAt: new Date('2022-06-01 18:00:00')
  },
];  

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  function toggleTheme() {  
    setTheme(theme.title === 'light' ? dark : light); 
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header handleToggleTheme={toggleTheme}/>  

      <div className='wrapper'>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
