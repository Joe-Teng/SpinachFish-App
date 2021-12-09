import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userInfo from "./user.type";

const initialState: userInfo = {
  nickname: "zhouteng",
  userAvatar:
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2F50%2Fv2-c9d7854e66989a8f3407a2f92e431774_r.jpg&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641542790&t=4a8743fe4bb80e29e2f0b0d3d4b5216e",
  userDefaultTheme: null,
};

const userSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
