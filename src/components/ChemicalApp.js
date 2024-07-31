// src/components/ChemicalApp.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ChemicalApp.css';
function ChemicalApp() {
  const chemicals = useSelector((state) => state.chemical.chemicals);
  const dispatch = useDispatch();

  const [newChemical, setNewChemical] = useState({ id: '', name: '', formula: '' });

  const addChemical = () => {
    dispatch({ type: 'ADD_CHEMICAL', payload: newChemical });
    setNewChemical({ id: '', name: '', formula: '' });
  };

  return (
    <div className="ChemicalApp">
      <h2>Danh sách hợp chất</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Công thức</th>
          </tr>
        </thead>
        <tbody>
          {chemicals.map((chemical) => (
            <tr key={chemical.id}>
              <td>{chemical.id}</td>
              <td>{chemical.name}</td>
              <td>{chemical.formula}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          placeholder="ID"
          value={newChemical.id}
          onChange={(e) => setNewChemical({ ...newChemical, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tên"
          value={newChemical.name}
          onChange={(e) => setNewChemical({ ...newChemical, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Công thức"
          value={newChemical.formula}
          onChange={(e) => setNewChemical({ ...newChemical, formula: e.target.value })}
        />
        <button onClick={addChemical}>Thêm hợp chất mới</button>
      </div>
    </div>
  );
}

export default ChemicalApp;