import { useState } from 'react'
import './App.css'

interface Cell{
  id: number;
  hasItem: boolean;
  clicked: string;
}


const App = () => {

  const [field, setField] = useState<Cell[]>([]);

  const getFields = () => {
    const cells = [];
    for (let i = 0; i < 36; i++) {
      cells.push({id: i, hasItem: false, clicked: "hidden"});
    }

    const randonIndex = Math.floor(Math.random() * cells.length);
    cells[randonIndex].hasItem = true;

    setField(cells);

    console.log(cells);
  };

  const checkCell = (id: number) => {
    setField(prevState => prevState.map(cell => {
      if (id === cell.id) {
        if (cell.hasItem) {
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
      return cell;
    }));
  };

  if (field.length === 0) {
    getFields();
  }

  return (
    <>
      <div className="field">
        {field.map(cell =>(
          <div onClick={() => checkCell(cell.id)} key={cell.id} className={`cell ${cell.clicked}`}></div>
        )) }
      </div>
    </>
  );

};

export default App
