import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const initialState = {
  loading : false,
  products :[],
  error : '',
}

export const fetchProductsData = createAsyncThunk('products/fetchProductsData',() =>
 {
  return axios.get('https://fakestoreapi.com/products')
  .then(response => response.data)
})

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers:{
    toggleSelect : (state,action) => {
      state.products[action.payload].isSelected = !state.products[action.payload].isSelected
    },
    addCount : (state,action) => {
      state.products[action.payload-1].count +=1
    },
    reduceCount : (state,action) => {
      state.products[action.payload-1].count -=1
    },
    resetCount : (state,action) => {
      state.products[action.payload-1].count = 1
    }
  },
  extraReducers : (builder) =>{
    builder.addCase(fetchProductsData.pending,(state) => {
      state.loading = true;
    })
    builder.addCase(fetchProductsData.fulfilled,(state,action) => {
      const newProduct = action.payload.map((product) => {
        return {
          productInfo : product,
          productId : product.id,
          isSelected : false,
          count : 1
        }
      })
      console.log(newProduct)
      state.loading = false;
      state.products = newProduct
      state.error = '';
    })
    builder.addCase(fetchProductsData.rejected,(state,action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    })
  }
})
export const { toggleSelect ,addCount,reduceCount,resetCount} = productSlice.actions;

export default productSlice.reducer
