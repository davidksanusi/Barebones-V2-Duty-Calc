// src/store/store.js
import create from 'zustand';

const useStore = create((set) => ({
  selectedCountry: { code: '', name: 'Loading...' },
  setSelectedCountry: (country) => set({ selectedCountry: country }),
  selectedHS: { code: '', name: 'Loading...' },
  setSelectedHS: (hs) => set({ selectedHS: hs }),
  countryDetails: {},
  setCountryDetails: (details) => set({ countryDetails: details }),
  contentDetails: {},
  setContentDetails: (details) => set({ contentDetails: details }),
}));

export default useStore;
