// src/features/chemicals/chemicalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chemicals: [
    { id: 1, name: 'Hydrochloric Acid', formula: 'HCL' },
    { id: 2, name: 'Sodium Chloride', formula: 'NaCl' },
    { id: 3, name: 'Sulfuric Acid', formula: 'H2SO4' },
    { id: 4, name: 'Ammonia', formula: 'NH3' },
    { id: 5, name: 'Ethanol', formula: 'C2H5OH' },
  ],
};

const chemicalSlice = createSlice({
  name: 'chemicals',
  initialState,
  reducers: {
    addChemical: (state, action) => {
      state.chemicals.push(action.payload);
    },
    removeChemical: (state, action) => {
      const index = state.chemicals.findIndex(
        (chemical) => chemical.id === action.payload
      );
      if (index !== -1) {
        state.chemicals.splice(index, 1);
      }
    },
    updateChemical: (state, action) => {
      const index = state.chemicals.findIndex(
        (chemical) => chemical.id === action.payload.id
      );
      if (index !== -1) {
        state.chemicals[index] = action.payload;
      }
    },
  },
});

export const { actions } = chemicalSlice;
export default chemicalSlice.reducer;