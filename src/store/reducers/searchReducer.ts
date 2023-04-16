import { createSlice } from '@reduxjs/toolkit';
interface BlockType {
  lastName: string;
  birthday: string;
  file: File;
  country: string;
  city: string;
  address: string;
  emailNotification: boolean;
  phoneNotification: boolean;
  coolWebsite: boolean;
  coolFroms: boolean;
  whoAreYou: string;
}
interface formState {
  formBlocks: BlockType[];
}
const initialState: formState = {
  formBlocks: [],
};
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addBlock(state, action) {
      state.formBlocks.push(action.payload);
    },
  },
});
export const formBlockActions = formSlice.actions;
export default formSlice;
