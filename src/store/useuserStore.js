import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useUserStore = create((set) => ({
  userCourses: [],
  myCoursesLoading: false,
  allCourses: [],
  allCoursesLoading: false,

  getMyCourses: async () => {
    set({ myCoursesLoading: true });
    try {
      const res = await axiosInstance.get("/user/myCourses");
      console.log(res?.data?.data);
      set({ userCourses: res.data.data });
    } catch (error) {
      set({ userCourses: [] });
    } finally {
      set({ myCoursesLoading: false });
    }
  },

  getAllCourses: async () => {
    set({ allCoursesLoading: true });
    try {
      const res = await axiosInstance.get("/user/allCourses");
      console.log(res?.data?.data);
      set({ allCourses: res.data.data });
    } catch (error) {
      set({ allCourses: [] });
    } finally {
      set({ allCoursesLoading: false });
    }
  },
}));
