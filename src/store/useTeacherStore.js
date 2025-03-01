import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useTeacherStore = create((set) => ({
  creatingCourse: false,
  addingVideo: false,
  uploadingVideo: false,

  uploadVideo: async (data) => {
    set({ uploadVideo: true });
    try {
      const formData = new FormData();
      formData.append("file", data.file);
      formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);

      const videoRes = await fetch(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUD_NAME
        }/video/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const videoData = await videoRes.json();
      const fileURL = videoData.secure_url;
      const duration = videoData.duration;
      const result = { fileURL, duration };
      return result;
    } catch (error) {
      console.log(error);
    } finally {
      set({ uploadVideo: false });
    }
  },

  createCourse: async (data) => {
    set({ creatingCourse: true });
    try {
      const res = await axiosInstance.post("/teacher/createCourse", data);
      console.log(res?.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      set({ creatingCourse: false });
    }
  },

  addVideo: async (data) => {
    set({ addingVideo: true });

    try {

      const res = await axiosInstance.post("/teacher/uploadVideo", data);

      console.log(res?.data?.data);
      toast.success("Video uploaded successfully");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    } finally {
      set({ addingVideo: false });
    }
  },
}));
