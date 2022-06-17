import { useState } from 'react';

import { Avatar } from '../Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';

import { Container } from './styles';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    } );
  }

  return (
    <Container>
      <Avatar hasBorder={false} src="https://github.com/daniel-koti.png" />

      <div className='commentBox'>
        <div className='commentContent'>
          <header>
            <div className='authorAndTime'>
              <strong>Daniel Moniz</strong>

              <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">Agora mesmo</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </Container>
  );
}