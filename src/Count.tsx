import React from 'react';

interface Props {
  number: number;
}

const Count: React.FC<Props>  = ({number}) => {
  return (
    <div>
      Count: {number}
    </div>
  );
};

export default Count;