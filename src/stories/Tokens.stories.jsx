import React from 'react';
import tokens from '../tokens/figmaTokens';

export default {
  title: 'DESIGN/Tokens',
};

export const Debug = () => {
  return (
    <pre>{JSON.stringify(tokens, null, 2)}</pre>
  );
};