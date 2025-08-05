import React from 'react';
import { motion } from 'framer-motion';

const ReadingClubSection = () => {
  // 精选书籍数据
  const featuredBooks = [
    {
      title: '思考，快与慢',
      author: '丹尼尔·卡尼曼',
      coverUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=book%20cover%20thinking%20fast%20and%20slow%20minimalist%20design&sign=aeea8a41d74992114fc75ab290689e73'
    },
    {
      title: '人类简史',
      author: '尤瓦尔·赫拉利',
      coverUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=book%20cover%20sapiens%20a%20brief%20history%20of%20humankind%20minimalist%20design&sign=cf1e4074da2bffca7a4a1ec8c314acca'
    },
    {
      title: '原子习惯',
      author: '詹姆斯·克利尔',
      coverUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=book%20cover%20atomic%20habits%20minimalist%20design&sign=9704c7e0d7d47e8692ff4ade72702c4a'
    }
  ];

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-6 text-white">
        <h2 className="text-2xl font-bold flex items-center">
          <i className="fa-solid fa-book-open mr-2"></i>小桐读书会
        </h2>
        <p className="mt-1 opacity-90">与书为友，与智同行</p>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          加入小桐读书会，与志同道合的朋友一起探索书籍世界，分享阅读心得，共同成长。
        </p>
        
        <h3 className="font-bold text-lg mb-4 text-gray-700 dark:text-gray-200">精选书籍</h3>
        
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {featuredBooks.map((book, index) => (
            <div 
              key={book.title}
              className="min-w-[120px] group"
            >
              <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-md mb-2 border border-gray-200 dark:border-gray-600 group-hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={book.coverUrl} 
                   alt={`${book.title} 书籍封面 - ${book.author} 著`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-medium text-center text-sm line-clamp-1">{book.title}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">{book.author}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="font-bold text-gray-700 dark:text-gray-200">
                最新活动 <span className="text-xs text-gray-500 dark:text-gray-500 ml-2"><i className="fa-solid fa-calendar mr-1"></i>8月15日 19:30-21:00</span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">《思考，快与慢》专题讨论</p>
            </div>
            <button className="w-full sm:w-auto py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white rounded-xl transition-colors duration-300 font-medium text-sm">
              立即报名
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReadingClubSection;