import { MainGrid } from '../src/components/MainGrid/index';
import { Box } from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraKutcommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSiderbar({ githubUser }) {
  return (
    <Box>
      <img src={`https://github.com/${githubUser}.png`} alt="" style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'pequenojoohn';
  const pessoasFavoritas = ['fdaciuk', 'marcobrunodev', 'Ruan1007', 'rorsgo', 'theleoad', 'Tokinh0', ' Lukyhenson', 'peas', 'rafaballerini'];
  return (
    <>
      <AlurakutMenu />
      <MainGrid>

        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSiderbar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map(pessoa => (
                <li key={pessoa}>
                  <a href={`/users/${pessoa}`} >
                    <img src={`https://github.com/${pessoa}.png`} alt="" style={{ borderRadius: '8px' }} />
                    <span>{pessoa}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
