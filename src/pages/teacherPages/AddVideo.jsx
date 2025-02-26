import React, { useState } from "react";
import { TextCursor, Image, Book, Plus, Video, Loader } from "lucide-react";
import { useUserStore } from "../../store/useuserStore";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const AddVideo = () => {
  const {courseId} = useParams()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnail: null,
    file: null,
    courseId: courseId,
  });

  const { addVideo, addingVideo } = useUserStore();

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFormData((prev) => ({ ...prev, thumbnail: reader.result }));
    };
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((val) => !val)) {
      toast.error("Please fill all the fields");
      return;
    }
    addVideo(formData);
    setFormData({
      title: "",
      description: "",
      thumbnail: null,
      file: null,
      courseId: formData.courseId,
    });
  };

  return (
    <div className="container mx-auto pt-16 px-4 py-12">
      <h1 className="text-4xl lg:text-5xl font-extrabold text-primary text-center flex items-center justify-center gap-3">
        Upload Video
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-base-200 p-8 rounded-lg shadow-lg space-y-6"
      >
        <label className="block space-y-2">
          <span className="text-lg font-semibold text-secondary flex items-center gap-2">
            <TextCursor className="w-5 h-5" /> Title
          </span>
          <input
            type="text"
            name="title"
            placeholder="Enter video title"
            className="input input-bordered w-full focus:ring-2 focus:ring-primary"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>

        <label className="block space-y-2">
          <span className="text-lg font-semibold text-secondary flex items-center gap-2">
            <Book className="w-5 h-5" /> Description
          </span>
          <textarea
            name="description"
            placeholder="Enter video description"
            className="textarea textarea-bordered w-full focus:ring-2 focus:ring-primary"
            rows={4}
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>

        <label className="block space-y-2">
          <span className="text-lg font-semibold text-secondary flex items-center gap-2">
            <Image className="w-5 h-5" /> Thumbnail
          </span>
          <input
            type="file"
            name="thumbnail"
            accept="image/*"
            className="file-input file-input-bordered w-full focus:ring-2 focus:ring-primary"
            onChange={handleThumbnailChange}
          />
        </label>

        <label className="block space-y-2">
          <span className="text-lg font-semibold text-secondary flex items-center gap-2">
            <Video className="w-5 h-5" /> Video File
          </span>
          <input
            type="file"
            name="file"
            accept="video/*"
            className="file-input file-input-bordered w-full focus:ring-2 focus:ring-primary"
            onChange={handleFileChange}
          />
        </label>

        <button
          type="submit"
          className="btn btn-primary w-full flex items-center justify-center gap-2 text-lg"
        >
          {addingVideo ? (
            <Loader className="text-primary-content loading-spinner" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
          {addingVideo ? "Uploading" : "Upload Video"}
        </button>
      </form>
    </div>
  );
};

export default AddVideo;
