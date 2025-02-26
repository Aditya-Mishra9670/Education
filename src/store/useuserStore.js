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
  loadingVideo:false,


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
  
    try {
      const formData = new FormData();
      formData.append("file", data.file);
      formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);
  
      const videoRes = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/video/upload`, {
        method: "POST",
        body: formData,
      });
  
      const videoData = await videoRes.json();
      const fileURL = videoData.secure_url;
      const duration = videoData.duration;
  
      const newData = { ...data, file: fileURL, duration };
  
      const res = await axiosInstance.post("/teacher/uploadVideo", newData);
  
      console.log(res?.data?.data);
      toast.success("Video uploaded successfully");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    } finally {
      set({ addingVideo: false });
    }
  },

  getVideo:async(id)=>{
    set({loadingVideo:true})
    try {
      const res = await axiosInstance.get(`/user/video/${id}`);
    } catch (error) {
      
    }
  },

  getSimilarVideos:async(category)=>{

  }
  

  
  
}));
