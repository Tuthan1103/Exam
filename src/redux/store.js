import { configureStore } from '@reduxjs/toolkit';
import chemicalReducer from '../reducers/ChemicalSlice.js';

const store = configureStore({
    reducer: {
        chemical: chemicalReducer,
        // Add other slices here if needed
    }

})
export default store;