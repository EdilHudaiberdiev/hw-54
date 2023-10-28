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


  if (field.length === 0) {
    getFields();
  }


};

export default App
