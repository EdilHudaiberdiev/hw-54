import { useState } from 'react'
import './App.css'

interface Cell{
  id: number;
  hasItem: boolean;
  clicked: string;
}

const App = () => {
  const [field, setField] = useState<Cell[]>([]);
  const [count, setCount] = useState<number>(0);
  const [win, setWin] = useState(false);

  const getFields = () => {
    const cells = [];
    for (let i = 0; i < 36; i++) {
      cells.push({id: i, hasItem: false, clicked: "hidden"});
    }

    const randonIndex = Math.floor(Math.random() * cells.length);
    cells[randonIndex].hasItem = true;

    setField(cells);
  };

  const changeCount = (cell: Cell) => {
    if (cell.clicked === 'hidden' && !win) {
      setCount(prevState => prevState + 1);
    }

    if (win) {
      alert('Reset game');
    }
  };

  const checkCell = (id: number) => {

    setField(field.map(cell => {
      if (id === cell.id) {
        if (!win) {
          if (cell.clicked === 'hidden') {
            if (cell.hasItem) {
              setWin(true);
              return {
                ...cell,
                clicked: 'win-cell'
              }
            } else {
              return {
                ...cell,
                clicked: 'show'
              }
            }
          }

        }
      }

      return cell;
    }));
  };

  const resetGame = () => {
    setField([]);
    setCount(0);
    setWin(false);
  }

  if (field.length === 0) {
    getFields();
  }

  return (
    <>
      Count: {count}

      <div className="field">
        {field.map(cell =>(
          <div
            onClick={() => {
              checkCell(cell.id)
              changeCount(cell)
            }}
            key={cell.id}
            className={`cell ${cell.clicked}`}/>
        )) }
      </div>

      <button onClick={resetGame}>Reset</button>
    </>
  );

};

export default App
