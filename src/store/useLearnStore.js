import toast from "react-hot-toast";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useLearnStore = create((set) => ({
  selectedCourse: {},
  selectedVideo: {},

  setSelectedCourse: (course) => {
    set({ selectedCourse: course });
  },
  setSelectedVideo: (video) => {
    set({ selectedVideo: video });
  },

  getSelectedCourse: async (courseId) => {
    try {
      const res = await axiosInstance.get(
        `/user/specificEnrollment/${courseId}`
      );
      return res?.data?.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  },
}));
