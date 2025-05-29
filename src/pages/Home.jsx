import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../data/firebase';

import PostCard from '../components/PostCard';
import FeaturedPost from '../components/FeaturedPost';
import { featuredPost } from '../data/featuredPost';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'posts'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPosts(data);
        console.log("Fetched posts from Firebase:", data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    // <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-900 dark:text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-900 dark:bg-charcoal-900 dark:text-gray-100">

      <FeaturedPost post={featuredPost} />

      <h1 className="text-4xl font-bold mb-8">Latest Posts</h1>

      {loading ? (
        <p className="text-gray-500 dark:text-gray-400">Loading posts...</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
