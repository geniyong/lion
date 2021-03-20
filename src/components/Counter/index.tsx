import React, { FC } from 'react';

const Counter: FC<{name: string}> = props => {
  const { name } = props;
  return <p>{name} counter - tsx</p>
}

export default Counter;
