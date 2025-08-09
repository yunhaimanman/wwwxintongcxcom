import React from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  // 导航板块数据 - 包含工具、博客、资源、创客、留言
   const navSections = [
     {
       title: '工具',
       description: '精选创客实用工具，提高工作效率',
       icon: 'fa-wrench',
       href: 'https://xintongcx.com/tools'
     },
     {
       title: '博客',
       description: '分享创客经验与技术干货',
       icon: 'fa-pen-to-square',
       href: 'https://xintongcx.com/blog'
     },
     {
       title: '资源',
       description: '各类学习资料与项目资源下载',
       icon: 'fa-cubes',
       href: 'https://xintongcx.com/resources'
     },
     {
       title: '创客',
       description: '结识志同道合的创新伙伴',
       icon: 'fa-users',
        href: 'https://xintongcx.com/maker'
     },
      {
        title: '留言',
        description: '交流想法，提出建议与需求',
        icon: 'fa-comment-dots',
        href: 'https://xintongcx.com/message-board'
     }
   ];

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 导航标题栏 - 采用与其他板块一致的渐变风格 */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-6 text-white">
        <h2 className="text-2xl font-bold flex items-center">
          <i className="fa-solid fa-compass mr-2"></i>小桐导航
        </h2>
        <p className="mt-1 opacity-90">创客社区，资源共享，协同创新</p>
      </div>
      
      <div className="p-6">

        {/* 导航板块网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {navSections.map((section, index) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href={section.href} 
                className="flex flex-col items-center p-5 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 h-full"
              >
                <div className="text-emerald-500 dark:text-emerald-400 text-2xl mb-3">
                  <i className={`fa-solid ${section.icon}`}></i>
                </div>
                <h3 className="font-bold text-center mb-1">{section.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 text-center">{section.description}</p>
              </a>
            </motion.div>
          ))}
        </div>
        

      </div>
    </motion.div>
  );
};

export default Navigation;