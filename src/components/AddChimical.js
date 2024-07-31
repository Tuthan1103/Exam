// src/components/ChemicalApp.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ChemicalApp() {
  const chemicals = useSelector((state) => state.chemical.chemicals);
  const dispatch = useDispatch();

  const addChemical = (chemical) => {
    dispatch({ type: 'ADD_CHEMICAL', payload: chemical });
  };

  return (
    <div>
      <h2>Danh sách hợp chất</h2>
      <button onClick={() => addChemical({ id: 1, name: 'New Chemical', formula: 'C2H6' })}>
        Thêm hợp chất mới
      </button>
      <table>
        {/* ... (rest of the table) */}
      </table>
    </div>
  );
}

export default ChemicalApp;