import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { likeVideos, playSingleVideo } from "../store/videoStore";
import { ThumbsUp } from "lucide-react";

function VideoPlayer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, singleVideo } = useSelector((state) => state.video);
  const { user } = useSelector((state) => state.auth);

  const hasUserLiked = singleVideo?.likedVideo?.includes(user._id) || null;

  useEffect(() => {
    if (id) {
      dispatch(playSingleVideo(id));
    }
  }, [id, dispatch]);

  if (loading || !singleVideo) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white text-black">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white text-black">
      {/* Main Video Section */}
      <div className="flex-1 flex flex-col items-center lg:items-start px-4 lg:px-8 py-6">
        {/* Video with 16:9 ratio */}
        <div className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
          <video
            src={singleVideo.videoFile}
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h2 className="mt-4 text-xl lg:text-2xl font-bold w-full max-w-5xl">
          {singleVideo.title}
        </h2>

        {/* Views + Date */}
        <div className="w-full max-w-5xl mt-2 flex flex-col lg:flex-row lg:items-center justify-between text-gray-600 text-sm">
          <span>{singleVideo.views} views</span>
          <span>{new Date(singleVideo?.createdAt || "").toLocaleDateString()}</span>
        </div>

        {/* Owner Info + Buttons */}
        <div className="w-full max-w-5xl flex flex-col lg:flex-row lg:items-center mt-6 border-t border-gray-200 pt-4 justify-between">
          {/* Owner Info */}
          <div className="flex items-center">
            <img
              src={singleVideo.owner?.avatar || "/default-avatar.png"}
              alt="owner avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">{singleVideo.owner?.fullName}</p>
              <p className="text-gray-500 text-sm">Channel info here...</p>
            </div>
          </div>

          {/* Buttons Row */}
          <div className="flex items-center gap-4 mt-4 lg:mt-0">
            {/* ✅ Subscribe Button */}
            <button
              className={`px-5 py-2 rounded-full font-semibold shadow transition 
                bg-red-600 text-white hover:bg-red-700`}
            >
              Subscribe
            </button>

            {/* ✅ Like Button */}
            <button
              className={`flex items-center gap-2 px-5 py-2 rounded-full shadow border transition ${
                hasUserLiked
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-300"
              }`}
            >
              <ThumbsUp className="w-5 h-5" />
              {hasUserLiked ? "Liked" : "Like"} {singleVideo?.likedVideo?.length ?? 0}
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="w-full max-w-5xl mt-6 bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-700">{singleVideo.description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
