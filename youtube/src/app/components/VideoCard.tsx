const VideoCard = () => {
    return (
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg cursor-pointer rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-white">
            <div className="relative w-full">
                <img src="/thumbnail.png" alt="Thumbnail Image" className="w-full h-48 sm:h-56 rounded-lg object-cover" />
            </div>

            <div className="flex mt-3 gap-3">
                <div className="w-10 h-10">
                    <img src="/logo.png" alt="channel-logo" className="w-10 h-10 rounded-full" />
                </div>

                <div className="flex flex-col">
                    <span className="text-white font-semibold line-clamp-2">S8UL Reaction On Team SOUL Qualified❤️🚀</span>
                    <span className="text-gray-400 text-sm">S8UL</span>
                    <span className="text-gray-400 text-sm">10M views • 2 days ago</span>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
