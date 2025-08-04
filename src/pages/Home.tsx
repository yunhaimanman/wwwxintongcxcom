import React from 'react';
import Navigation from '@/components/Navigation';
import AISection from '@/components/AISection';
import ReadingClubSection from '@/components/ReadingClubSection';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 overflow-x-hidden">
      {/* 页面标题 */}
      <header className="py-8 px-4 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
           新桐创想
        </motion.h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">新芽初绽，智慧同行</p>
      </header>

      {/* 主要内容区域 */}
      <main className="container mx-auto px-4 pb-16">
        {/* 小桐导航 */}
        <section className="mb-12">
          <Navigation />
        </section>

        {/* 内容板块容器 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 小桐AI板块 */}
          <AISection />
          
          {/* 小桐读书会板块 */}
          <ReadingClubSection />
        </div>
      </main>

      {/* 页脚 */}
      <footer className="py-6 px-4 text-center text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-700">
         <p>© {new Date().getFullYear()} 新桐创想 - 版权所有</p>
      </footer>
    </div>
  );
}