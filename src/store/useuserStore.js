import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useUserStore = create((set) => ({
  userCourses: [],
  myCoursesLoading: false,
  allCourses: [],
  allCoursesLoading: false,
  creatingCourse:false,
  addingVideo:false,

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

  createCourse:async(data)=>{
    set({creatingCourse:true})
    try {
      const res = await axiosInstance.post("/teacher/createCourse",data);
      console.log(res?.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      set({creatingCourse:false})
    }
  },

  addVideo: async (data) => {
    set({ addingVideo: true });
    console.log(data);
  
    try {
      const res = await axiosInstance.post("/teacher/uploadVideo", data);
  
      console.log(res?.data?.data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    } finally {
      set({ addingVideo: false });
    }
  }
  
  
}));
