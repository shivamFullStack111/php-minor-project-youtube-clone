import React, { useState } from 'react';

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Dummy video data
  const videos = [
    {
      id: 1,
      title: "How to Build a React App in 10 Minutes - Beginner Tutorial",
      channel: "WebDev Simplified",
      views: "1.2M views",
      time: "2 days ago",
      thumbnail: "https://picsum.photos/320/180?random=1",
      channelImg: "https://picsum.photos/36/36?random=10"
    },
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
      title: "Cooking Amazing Pasta in 20 Minutes | Quick Recipes",
      channel: "Chef's Kitchen",
      views: "3.1M views",
      time: "1 month ago",
      thumbnail: "https://picsum.photos/320/180?random=5",
      channelImg: "https://picsum.photos/36/36?random=14"
    },
    {
      id: 6,
      title: "Gaming Highlights - Epic Moments from Top Streamers",
      channel: "Pro Gamer",
      views: "4.7M views",
      time: "2 months ago",
      thumbnail: "https://picsum.photos/320/180?random=6",
      channelImg: "https://picsum.photos/36/36?random=15"
    },
    {
      id: 7,
      title: "Travel Vlog: Japan Adventure - Tokyo, Kyoto, Osaka",
      channel: "World Explorer",
      views: "1.8M views",
      time: "3 months ago",
      thumbnail: "https://picsum.photos/320/180?random=7",
      channelImg: "https://picsum.photos/36/36?random=16"
    },
    {
      id: 8,
      title: "Fitness Routine for Beginners - 30 Day Challenge",
      channel: "FitLife",
      views: "892K views",
      time: "2 weeks ago",
      thumbnail: "https://picsum.photos/320/180?random=8",
      channelImg: "https://picsum.photos/36/36?random=17"
    },
    {
      id: 9,
      title: "Music Production Masterclass - Make Beats Like a Pro",
      channel: "Beat Maker",
      views: "1.5M views",
      time: "3 days ago",
      thumbnail: "https://picsum.photos/320/180?random=9",
      channelImg: "https://picsum.photos/36/36?random=18"
    },
    {
      id: 10,
      title: "iPhone 15 Review - Everything You Need to Know",
      channel: "Tech Insider",
      views: "5.2M views",
      time: "1 week ago",
      thumbnail: "https://picsum.photos/320/180?random=10",
      channelImg: "https://picsum.photos/36/36?random=19"
    },
    {
      id: 11,
      title: "Learn Python in 2023 - Roadmap for Beginners",
      channel: "Coding Master",
      views: "2.1M views",
      time: "2 months ago",
      thumbnail: "https://picsum.photos/320/180?random=11",
      channelImg: "https://picsum.photos/36/36?random=20"
    },
    {
      id: 12,
      title: "Budget Travel Tips - How to Travel the World with $1000",
      channel: "Travel Guide",
      views: "3.3M views",
      time: "4 months ago",
      thumbnail: "https://picsum.photos/320/180?random=12",
      channelImg: "https://picsum.photos/36/36?random=21"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white px-4 py-2 flex items-center justify-between border-b border-gray-200">
        {/* Left side: Hamburger and Logo */}
        <div className="flex items-center">
          <button 
            className="p-2 rounded-full hover:bg-gray-100 mr-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </button>
          <div className="flex items-center">
            <svg viewBox="0 0 90 20" className="w-20 h-6 text-red-600">
              <path fill="currentColor" d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" />
              <path fill="white" d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" />
            </svg>
            <span className="text-xl font-bold ml-1 hidden md:block">PlayZone</span>
          </div>
        </div>

        {/* Center: Search bar */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
            />
            <button className="bg-gray-100 px-6 py-2 border border-gray-300 border-l-0 rounded-r-full hover:bg-gray-200">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-500">
                <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Right side: Icons */}
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
        {/* Sidebar */}
        <aside className={`fixed md:sticky top-14 left-0 bottom-0 w-64 bg-white p-3 transform transition-transform duration-300 z-40 md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          <div className="space-y-6 pb-6 border-b border-gray-200">
            <SidebarItem icon="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" text="Home" active />
            <SidebarItem icon="M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.75-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8.14-1.46.5-2.1.2-.34.6-.6.95-.76.82-.43 1.93-.3 2.34.2.41.55.17 1.6-.3 2.23-.58.84-1.63 1.66-2.73 1.7z" text="Trending" />
            <SidebarItem icon="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7v5.4l5-2.7z" text="Subscriptions" />
            <SidebarItem icon="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" text="Library" />
            <SidebarItem icon="M14.97 16.95L10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" text="History" />
          </div>
          
          <div className="py-6 border-b border-gray-200">
            <h3 className="px-4 text-sm font-medium text-gray-500 mb-4">SUBSCRIPTIONS</h3>
            <SidebarItem icon="https://picsum.photos/36/36?random=22" text="WebDev Simplified" />
            <SidebarItem icon="https://picsum.photos/36/36?random=23" text="Tailwind Masters" />
            <SidebarItem icon="https://picsum.photos/36/36?random=24" text="JS Ninja" />
            <SidebarItem icon="https://picsum.photos/36/36?random=25" text="React Pro" />
          </div>
          
          <div className="py-6 border-b border-gray-200">
            <h3 className="px-4 text-sm font-medium text-gray-500 mb-4">EXPLORE</h3>
            <SidebarItem icon="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" text="Liked videos" />
            <SidebarItem icon="M10 16.5l6-4.5-6-4.5v9zM17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" text="Playlist" />
            <SidebarItem icon="M14 6l-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h18L14 6z" text="Your videos" />
            <SidebarItem icon="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z" text="Watch later" />
          </div>
        </aside>

        {/* Video grid */}
        <main className="flex-1 p-4 md:ml-0">
          {/* Categories */}
          <div className="flex overflow-x-auto space-x-3 pb-4 mb-4 hide-scrollbar">
            {['All', 'Music', 'Gaming', 'Live', 'Coding', 'React', 'JavaScript', 'Cooking', 'Travel', 'Fitness'].map((category, index) => (
              <div key={index} className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap ${index === 0 ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
                {category}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

// Sidebar item component
const SidebarItem = ({ icon, text, active = false }) => {
  return (
    <div className={`flex items-center space-x-5 p-2 rounded-lg cursor-pointer ${active ? 'bg-gray-100' : 'hover:bg-gray-100'}`}>
      {icon.startsWith('http') ? (
        <img src={icon} alt={text} className="w-6 h-6 rounded-full" />
      ) : (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="currentColor" d={icon}></path>
        </svg>
      )}
      <span className="text-sm">{text}</span>
    </div>
  );
};

// Video card component
const VideoCard = ({ video }) => {
  return (
    <div className="rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]">
      <div className="relative pb-[56.25%] bg-gray-200"> {/* 16:9 aspect ratio */}
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
          10:25
        </div>
      </div>
      <div className="flex mt-2">
        <img 
          src={video.channelImg} 
          alt={video.channel}
          className="w-9 h-9 rounded-full mr-3"
        />
        <div className="flex-1">
          <h3 className="font-medium text-sm line-clamp-2 mb-1">{video.title}</h3>
          <p className="text-xs text-gray-600">{video.channel}</p>
          <p className="text-xs text-gray-500">{video.views} • {video.time}</p>
        </div>
        <button className="self-start mt-1">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-500">
            <path fill="currentColor" d="M12 16c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm3 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomePage;


