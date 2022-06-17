import { ImgHTMLAttributes } from 'react';
import { Image } from './styles';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder: boolean;
}

export function Avatar({ hasBorder = true, ...props}: AvatarProps) {
  return (
    <Image {...props}/>
  )
}