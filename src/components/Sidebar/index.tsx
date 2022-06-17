import { PencilSimpleLine } from 'phosphor-react';
import { Avatar } from '../Avatar';
import { Container } from './styles';

export function Sidebar() {
  return (
    <Container>
     <img 
        src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      />

      <div className='profile'>
        <Avatar hasBorder src="http://github.com/daniel-koti.png"/>

        <strong>Daniel Koti</strong>
        <span>Software Developer</span>
      </div>  

      <footer>
        <a href="#">
          <PencilSimpleLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
  </Container>
  )
}