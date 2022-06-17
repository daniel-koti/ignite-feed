import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';

interface HeaderProps {
  handleToggleTheme: () => void;
}

export function Header({ handleToggleTheme }: HeaderProps) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <header>
        <h2>Feeback App</h2>

        <Switch 
          className='react-switch'
          onChange={handleToggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={colors.backgroundSecundary}
          onColor={colors.primary}
        />
      </header>
    </Container>
  ) 
}