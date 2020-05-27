import React from 'react';
import { Container } from './styles';

interface TooltipPropos {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipPropos> = ({
  title,
  className = '',
  children,
}) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
