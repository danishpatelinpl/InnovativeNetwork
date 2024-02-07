import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { GET } from '../utilities/ApiProvider'
import Cookies from 'js-cookie'

// Basic Global State
const initialState = {
    service: 'Cyber Security',
    mileStone: 'Banquet Management System',
    bannerAnimationStatus: false,
    team: 'Frontend'
};

// Function For Request Handling For State Update
export const fetchUserName = createAsyncThunk(
    'fetchuser',
    async () => {
        const response = await GET(`https://jsonplaceholder.typicode.com/users`)
        return { name: response[Math.floor(Math.random() * 10)].name };
    }
)

// State Updating Functions
const userReducer = createSlice({
    name: 'person',
    initialState,
    reducers: {
        updateName: (state, action) => {
            state.value = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload))
            Cookies.set('user', JSON.stringify(action.payload))
        },
        loadUser: (state, action) => {
            state.value = action.payload;
        },
        // loadLocalStorage: (state, action) => {
        //     state.value = action.payload;
        //     localStorage.setItem('user', JSON.stringify(action.payload))
        // },
        // loadCookies: (state, action) => {
        //     state.value = action.payload;
        //     Cookies.set('user', JSON.stringify(action.payload))
        // },
        updateService: (state, action) => {
            state.service = action.payload;
        },
        updateMileStone: (state, action) => {
            state.mileStone = action.payload;
        },
        updateBannerAnimationStatus: (state, action) => {
            state.bannerAnimationStatus = action.payload
        },
        updateTeam: (state, action) => {
            state.team = action.payload
        },
        logout: (state, action) => {
            localStorage.clear();
            Cookies.remove('user');
            state.value = {};
        }
    },
    extraReducers: {
        [fetchUserName.fulfilled]: (state, action) => {
            state.value = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))
            Cookies.set('user', JSON.stringify(action.payload))
        },
        [fetchUserName.pending]: state => {
            state.value = { name: 'Loading...' }
        },
        [fetchUserName.rejected]: state => {
            state.value = { name: 'Try Again!' }
        },
    }
})

// Exporting All the State Updating Functions
export const { updateName, loadUser, loadLocalStorage, loadCookies, logout, updateService, updateMileStone, updateBannerAnimationStatus, updateTeam } = userReducer.actions
export default userReducer.reducer
