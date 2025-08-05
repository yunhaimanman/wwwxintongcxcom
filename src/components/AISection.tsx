import React from 'react';
import { motion } from 'framer-motion';

const AISection = () => {
  // AI功能数据
  const aiFeatures = [
    {
      title: '智能问答',
      description: '即时解答各类问题，提供准确信息',
      icon: 'fa-robot'
    },
    {
      title: '内容创作',
      description: '辅助生成文章、故事和创意内容',
      icon: 'fa-pen-to-square'
    },
    {
      title: '学习助手',
      description: '个性化学习路径和知识讲解',
      icon: 'fa-graduation-cap'
    },
    {
      title: '数据分析',
      description: '处理和解读复杂数据，提供洞察',
      icon: 'fa-chart-line'
    }
  ];

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">
        <h2 className="text-2xl font-bold flex items-center">
          <i className="fa-solid fa-brain mr-2"></i>小桐AI
        </h2>
        <p className="mt-1 opacity-90">智能助手，赋能生活</p>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          小桐AI提供多种智能服务，助您高效处理日常任务，拓展知识边界，激发创意灵感。
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aiFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-emerald-500 dark:text-emerald-400 text-2xl mb-3">
                <i className={`fa-solid ${feature.icon}`}></i>
              </div>
              <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <button className="mt-6 w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-colors duration-300 font-medium flex items-center justify-center">
          <i className="fa-solid fa-rocket mr-2"></i>开始使用小桐AI
        </button>
      </div>
    </motion.div>
  );
};

export default AISection;