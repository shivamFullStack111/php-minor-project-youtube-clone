import React, { useState } from 'react';

const VideoPage = () => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  // Current video data (in a real app, this would come from an API)
  const currentVideo = {
    id: 1,
    title: "How to Build a React App in 10 Minutes - Beginner Tutorial",
    channel: "WebDev Simplified",
    subscribers: "1.2M subscribers",
    views: "1.2M views",
    time: "2 days ago",
    description: "In this tutorial, we'll build a complete React application from scratch in just 10 minutes. Learn the fundamentals of React components, state management, and props while building a practical project.",
    likes: "125K",
    dislikes: "2K",
    comments: "3.5K",
    thumbnail: "https://picsum.photos/320/180?random=1",
    channelImg: "https://picsum.photos/36/36?random=10"
  };

  // Suggested videos data
  const suggestedVideos = [
    {
      id: 2,
      title: "Learn Tailwind CSS - Complete Course",
      channel: "Tailwind Masters",
      views: "845K views",
      time: "1 week ago",
      thumbnail: "https://picsum.photos/320/180?random=2",
      channelImg: "https://picsum.photos/36/36?random=11"
    },
    {
      id: 3,
      title: "JavaScript Tips and Tricks 2023 - You Must Know These!",
      channel: "JS Ninja",
      views: "2.4M views",
      time: "3 weeks ago",
      thumbnail: "https://picsum.photos/320/180?random=3",
      channelImg: "https://picsum.photos/36/36?random=12"
    },
    {
      id: 4,
      title: "Building a YouTube Clone with React & Tailwind CSS",
      channel: "React Pro",
      views: "356K views",
      time: "5 days ago",
      thumbnail: "https://picsum.photos/320/180?random=4",
      channelImg: "https://picsum.photos/36/36?random=13"
    },
    {
      id: 5,
      title: "React Hooks Explained - useState, useEffect",
      channel: "React Mastery",
      views: "1.7M views",
      time: "3 months ago",
      thumbnail: "https://picsum.photos/320/180?random=13",
      channelImg: "https://picsum.photos/36/36?random=20"
    },
    {
      id: 6,
      title: "Next.js 13 Crash Course - Learn the Basics",
      channel: "NextJS Academy",
      views: "892K views",
      time: "2 weeks ago",
      thumbnail: "https://picsum.photos/320/180?random=14",
      channelImg: "https://picsum.photos/36/36?random=21"
    }
  ];

  // Comments data
  const comments = [
    {
      id: 1,
      user: "CodingEnthusiast",
      avatar: "https://picsum.photos/36/36?random=30",
      time: "2 days ago",
      text: "This tutorial was exactly what I needed! Clear explanations and practical examples. Thank you!",
      likes: "2.3K",
      liked: false
    },
    {
      id: 2,
      user: "WebDevNewbie",
      avatar: "https://picsum.photos/36/36?random=31",
      time: "1 day ago",
      text: "I've been struggling to understand React for weeks, but this 10-minute tutorial explained it better than any 5-hour course I've taken.",
      likes: "1.5K",
      liked: false
    },
    {
      id: 3,
      user: "TechGuru",
      avatar: "https://picsum.photos/36/36?random=32",
      time: "1 day ago",
      text: "Great video! Would love to see a follow-up on React Router and state management with Context API.",
      likes: "875",
      liked: false
    }
  ];

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false);
  };

  const handleSubscribe = () => {
    setSubscribed(!subscribed);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar (same as homepage) */}
      <nav className="sticky top-0 z-50 bg-white px-4 py-2 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center">
          <a to="/" className="p-2 rounded-full hover:bg-gray-100 mr-2">
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </a>
          <a to="/" className="flex items-center">
            <svg viewBox="0 0 90 20" className="w-20 h-6 text-red-600">
              <path fill="currentColor" d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" />
              <path fill="white" d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" />
            </svg>
            <span className="text-xl font-bold ml-1 hidden md:block">PlayZone</span>
          </a>
        </div>

        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
            />
            <button className="bg-gray-100 px-6 py-2 border border-gray-300 border-l-0 rounded-r-full hover:bg-gray-200">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-500">
                <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 hidden md:block">
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path fill="currentColor" d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path>
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 hidden md:block">
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path fill="currentColor" d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76 1.51.74 2.01 2.26 1.01 3.51-.66.81-1.13 1.76-1.13 2.79v.11c2.44.75 4 3.06 4 5.98v5.15l2 1.87z"></path>
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-medium">
            U
          </button>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex flex-1 pt-2">
        {/* Video player and info */}
        <div className="flex-1 p-4">
          {/* Video player */}
          <div className="w-full aspect-video bg-black rounded-lg mb-4">
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <svg viewBox="0 0 24 24" className="w-20 h-20 mx-auto opacity-70">
                  <path fill="currentColor" d="M8 5v14l11-7z"></path>
                </svg>
                <p className="mt-2">Video Player</p>
              </div>
            </div>
          </div>

          {/* Video title and actions */}
          <div className="mb-4">
            <h1 className="text-xl font-semibold">{currentVideo.title}</h1>
            <div className="flex flex-wrap items-center justify-between mt-2">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>{currentVideo.views} • {currentVideo.time}</span>
              </div>
              <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                <button 
                  className={`flex items-center space-x-1 ${liked ? 'text-blue-600' : 'text-gray-600'}`}
                  onClick={handleLike}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path fill="currentColor" d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"></path>
                  </svg>
                  <span>{currentVideo.likes}</span>
                </button>
                <button 
                  className={`flex items-center space-x-1 ${disliked ? 'text-blue-600' : 'text-gray-600'}`}
                  onClick={handleDislike}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path fill="currentColor" d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path>
                  </svg>
                  <span>Dislike</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600">
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path fill="currentColor" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
                  </svg>
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600">
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path fill="currentColor" d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
                  </svg>
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-gray-200 py-4 mb-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <img 
                  src={currentVideo.channelImg} 
                  alt={currentVideo.channel}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium">{currentVideo.channel}</h3>
                  <p className="text-sm text-gray-600">{currentVideo.subscribers}</p>
                  <p className="text-sm mt-2">{currentVideo.description}</p>
                  <button className="text-sm text-gray-600 mt-2">Show more</button>
                </div>
              </div>
              <button 
                className={`px-4 py-1.5 rounded-full font-medium text-sm ${subscribed ? 'bg-gray-200 text-black' : 'bg-red-600 text-white'}`}
                onClick={handleSubscribe}
              >
                {subscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>
          </div>

          {/* Comments */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">{currentVideo.comments} Comments</h3>
            
            <div className="flex items-start space-x-3 mb-6">
              <img 
                src="https://picsum.photos/36/36?random=40" 
                alt="User"
                className="w-9 h-9 rounded-full"
              />
              <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="Add a comment..." 
                  className="w-full border-b border-gray-300 pb-1 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {comments.map(comment => (
              <div key={comment.id} className="flex items-start space-x-3 mb-6">
                <img 
                  src={comment.avatar} 
                  alt={comment.user}
                  className="w-9 h-9 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-medium">{comment.user}</h4>
                    <span className="text-xs text-gray-500">{comment.time}</span>
                  </div>
                  <p className="text-sm my-1">{comment.text}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <button className="flex items-center space-x-1">
                      <svg viewBox="0 0 24 24" className="w-5 h-5">
                        <path fill="currentColor" d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"></path>
                      </svg>
                      <span>{comment.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1">
                      <svg viewBox="0 0 24 24" className="w-5 h-5">
                        <path fill="currentColor" d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path>
                      </svg>
                      <span>Reply</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested videos sidebar */}
        <div className="w-full md:w-96 p-4 space-y-4">
          {suggestedVideos.map(video => (
            <a 
              key={video.id} 
              to={`/video/${video.id}`}
              className="flex items-start space-x-2 cursor-pointer"
            >
              <div className="w-40 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium line-clamp-2">{video.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{video.channel}</p>
                <p className="text-xs text-gray-500">{video.views} • {video.time}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;