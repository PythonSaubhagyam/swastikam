import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../setup/axiosClient";

export const initializeAppData = createAsyncThunk("app/initializeData", async (_, { rejectWithValue }) => {
    try {
        const [
            bannersResponse,
            upperSectionResponse,
            blogsResponse,
            statisticsResponse,
            lowerSectionResponse
        ] = await Promise.all([
            client.get("/ecommerce/banners/?sequence=Upper"),
            client.get("/swastikam-section/?type=upper"),
            client.get("/home/blogs/"),
            client.get("/statistics-section/"),
            client.get("/lower-section/"),
        ]);

        return {
            banners: bannersResponse.data.banner || [],
            upperSection: upperSectionResponse.data.data || [],
            blogs: blogsResponse.data.blogs || [],
            statisticsSection: statisticsResponse.data.data || {},
            lowerSection: lowerSectionResponse.data.data || [],
        };
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


const bannerSlice = createSlice({
    name: "home",
    initialState: {
        banners: [],
        upperSection: {
            aboutSection: [],
            explorSection: [],
            BbestsallerSection: [],
            therapiOliSection: [],
            nonGmoSection: [],
        },
        blogs: [],
        statisticsSection: {},
        lowerSection: {
            awardsSection: [],
            servicesSection: [],
            availableSection: [],
        },
        loading: false,
        error: null,
        hasFetched: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(initializeAppData.pending, (state) => {
                state.loading = true
            })
            .addCase(initializeAppData.fulfilled, (state, action) => {
                state.loading = false;
                const {
                    banners,
                    upperSection,
                    blogs,
                    statisticsSection,
                    lowerSection
                } = action.payload;

                state.hasFetched = true;
                state.banners = banners;
                state.blogs = blogs;
                state.statisticsSection = statisticsSection;

                state.upperSection = {
                    aboutSection: upperSection.filter((section) => section.id === 1),
                    explorSection: upperSection.filter((section) => section.id === 2),
                    bestsallerSection: upperSection.filter((section) => section.id === 3),
                    therapiOliSection: upperSection.filter((section) => section.id === 4),
                    nonGmoSection: upperSection.filter((section) => section.id === 5),
                }
                state.lowerSection = {
                    awardsSection: lowerSection.filter((section) => section.id === 1),
                    servicesSection: lowerSection.filter((section) => section.id === 2),
                    availableSection: lowerSection.filter((section) => section.id === 3)
                }

            })
            .addCase(initializeAppData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    }
})

export default bannerSlice.reducer;