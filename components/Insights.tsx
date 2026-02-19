import React, { useState, useMemo } from 'react';
import { Award, BookOpen, Lightbulb, Star, Calendar, Tag, Clock, ExternalLink, Search } from 'lucide-react';
import FadeInSection from './FadeInSection';
import { ContentPost } from '../types';

const Insights: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'achievement' | 'article' | 'insight' | 'milestone'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');

  // Sample content data - Replace with API call or database
  const contentPosts: ContentPost[] = [
    // {
    //   id: '1',
    //   type: 'achievement',
    //   title: 'IBM ACE Certification Achieved',
    //   description: 'Successfully completed IBM App Connect Enterprise certification and mastered production-level integration workflows.',
    //   date: new Date('2024-11-15'),
    //   tags: ['IBM', 'ACE', 'Certification'],
    //   icon: '🏆',
    //   featured: true,
    // },
    // {
    //   id: '2',
    //   type: 'article',
    //   title: 'Building Scalable Integration Solutions with IBM ACE',
    //   description: 'Deep dive into designing robust message flows, error handling patterns, and best practices for healthcare domain integrations.',
    //   content: 'A comprehensive guide on implementing enterprise-grade integrations...',
    //   date: new Date('2024-10-28'),
    //   tags: ['Integration', 'IBM', 'Best Practices'],
    //   readTime: 8,
    //   link: 'https://medium.com',
    //   featured: true,
    // },
    // {
    //   id: '3',
    //   type: 'insight',
    //   title: 'The Future of API-First Healthcare Integrations',
    //   description: 'Exploring how microservices and REST APIs are transforming healthcare data exchange and claims processing.',
    //   date: new Date('2024-10-10'),
    //   tags: ['Healthcare', 'API', 'Future Trends'],
    //   icon: '🔮',
    // },
    {
      id: '1',
      type: 'milestone',
      title: '3+ Years in Software Industry',
      description: 'Celebrating 3 years of experience in designing and maintaining critical integration flows for Fortune 500 healthcare companies.',
      date: new Date('2025-10-03'),
      tags: ['Career', 'Milestone'],
      icon: '⭐',
      featured: true,
    },
    {
      id: '2',
      type: 'insight',
      title: 'Error Handling Strategies in Distributed Systems',
      description: 'Best practices for implementing resilient exception handling in middleware platforms and message-driven architectures.',
      date: new Date('2024-08-30'),
      tags: ['Architecture', 'Reliability'],
      icon: '🛡️',
    },
    // {
    //   id: '6',
    //   type: 'achievement',
    //   title: 'Led Successful Healthcare Claims Processing Migration',
    //   description: 'Architected and executed migration of critical claims processing flows affecting 500K+ transactions monthly.',
    //   date: new Date('2024-07-20'),
    //   tags: ['Project', 'Healthcare', 'Leadership'],
    // },
    {
      id: '3',
      type: 'achievement',
      title: 'Awarded Gold Award for Excellence',
      description: 'Recognized for outstanding performance and contributions in delivering high-quality integration solutions and automation.',
      date: new Date('2025-11-19'),
      tags: ['Project', 'Innovation', 'Leadership', 'Award', 'Gold Star'],
      icon: '🏅',
      featured: true,
      link: 'https://www.linkedin.com/posts/venkata-hemanth-guddanti-249bb812a_cgi-goldaward-achivement-activity-7398621590227283968--TKq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB_bllkBqNsHckR5bymbTkCEPmeUxqE9nzo',
        
    },
    {
      id: '4',
      type: 'insight',
      title: 'Handled Production Incidents with Zero Downtime and no SLA Breaches',
      description: 'Successfully managed and resolved critical production incidents in high-stakes healthcare environments, ensuring zero downtime and no SLA breaches.',
      date: new Date('2025-05-30'),
      tags: ['Production', 'Healthcare', 'Reliability', 'Incident Management'],
      icon: '🛡️',
    },
    {
      id: '5',
      type: 'article',
      title: 'Modernizing Middleware ACE/IIB Development with Cloud-Based Ingrations',
      description: 'Part 1 of 3: Stop Cooking Your Laptop: Moving IBM ACE Development to the Cloud for Free.',
      content: 'Does your work laptop sound like its preparing for takeoff every time you boot up a local IBM App Connect Enterprise (ACE) Integration Server? ✈️We all know the struggle. You need to develop a complex API, but running the full ACE runtime locally vanishes gigabytes of RAM, drains your battery, and slows your entire machine to a crawl.',
      date: new Date('2026-02-19'),
      tags: ['ACE Integration', 'DevOps integration', 'Architecture designing', 'Best Practices'],
      readTime: 8,
      link: 'https://medium.com/@venkatahemanth/stop-cooking-your-laptop-moving-ibm-ace-development-to-the-cloud-for-free-dd730ca8b2ae',
      featured: true,
      icon: '🔮',
    },

  ];

  const getTypeIcon = (type: string) => {
    const icons: Record<string, React.ReactNode> = {
      achievement: <Award className="w-5 h-5" />,
      article: <BookOpen className="w-5 h-5" />,
      insight: <Lightbulb className="w-5 h-5" />,
      milestone: <Star className="w-5 h-5" />,
    };
    return icons[type] || null;
  };

  const getTypeBgColor = (type: string) => {
    const colors: Record<string, string> = {
      achievement: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
      article: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
      insight: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
      milestone: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    };
    return colors[type] || '';
  };

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = contentPosts;

    // Apply type filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(post => post.type === activeFilter);
    }

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        post =>
          post.title.toLowerCase().includes(term) ||
          post.description.toLowerCase().includes(term) ||
          post.tags?.some(tag => tag.toLowerCase().includes(term))
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return filtered;
  }, [activeFilter, searchTerm, sortBy]);

  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'achievement', label: 'Achievements' },
    { value: 'article', label: 'Articles' },
    { value: 'insight', label: 'Insights' },
    { value: 'milestone', label: 'Milestones' },
  ];

  return (
    <section id="insights" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              Insights <span className="text-ibm-blue dark:text-neon-cyan">&amp; Achievements</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Timely thoughts, accomplishments, and professional growth in integration and middleware technologies.
            </p>
          </div>
        </FadeInSection>

        {/* Search Bar */}
        <FadeInSection delay={100}>
          <div className="mb-8 relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search posts, tags, articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ibm-blue dark:focus:ring-neon-cyan transition-all"
            />
          </div>
        </FadeInSection>

        {/* Filter & Sort Controls */}
        <FadeInSection delay={150}>
          <div className="flex flex-col md:flex-row gap-4 mb-12 justify-between items-center">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setActiveFilter(option.value as any)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    activeFilter === option.value
                      ? 'bg-ibm-blue dark:bg-neon-cyan text-white dark:text-black shadow-lg'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest')}
                className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-ibm-blue dark:focus:ring-neon-cyan"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </FadeInSection>

        {/* Posts Feed */}
        <div className="space-y-6 relative">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <FadeInSection key={post.id} delay={200 + index * 50}>
                <div
                  className={`group relative p-6 rounded-xl border transition-all hover:shadow-lg hover:border-ibm-blue dark:hover:border-neon-cyan cursor-pointer ${
                    post.featured
                      ? 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border-ibm-blue/50 dark:border-neon-cyan/50 shadow-md'
                      : 'bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800'
                  } backdrop-blur-sm`}
                >
                  {/* Featured Badge */}
                  {post.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-ibm-blue/20 text-ibm-blue dark:bg-neon-cyan/20 dark:text-neon-cyan text-xs font-bold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}

                  <div className="flex gap-4">
                    {/* Type Icon Circle */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${getTypeBgColor(post.type)}`}
                    >
                      {post.type === 'achievement' || post.type === 'milestone' ? (
                        <span className="text-xl">{post.icon}</span>
                      ) : (
                        getTypeIcon(post.type)
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Type Badge & Date */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${getTypeBgColor(post.type)}`}
                        >
                          {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                        {post.readTime && (
                          <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                            <Clock className="w-3 h-3" />
                            {post.readTime} min read
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-ibm-blue dark:group-hover:text-neon-cyan transition-colors pr-20">
                        {post.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                        {post.description}
                      </p>

                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300"
                            >
                              <Tag className="w-3 h-3" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* External Link */}
                      {post.link && (
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-ibm-blue dark:text-neon-cyan hover:gap-3 font-medium text-sm transition-all group/link"
                        >
                          Read Full Article
                          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))
          ) : (
            <FadeInSection>
              <div className="text-center py-12">
                <Lightbulb className="w-12 h-12 text-slate-400 dark:text-slate-600 mx-auto mb-4 opacity-50" />
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  No posts found. Try adjusting your filters or search terms.
                </p>
              </div>
            </FadeInSection>
          )}
        </div>
      </div>
    </section>
  );
};

export default Insights;
