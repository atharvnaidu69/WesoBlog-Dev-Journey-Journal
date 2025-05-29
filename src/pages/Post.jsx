import { useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc, arrayUnion, Timestamp } from 'firebase/firestore';
import { db } from '../data/firebase';
import { useEffect, useState } from 'react';

import LikeButton from '../components/LikeButton';
import CommentBox from '../components/CommentBox';
import CommentList from '../components/CommentList';

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the post from Firestore
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, 'posts', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() });
        } else {
          setPost(null);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  // Handle new comment submission
  const handleComment = async (content) => {
    const newComment = {
      id: Date.now(),
      author: "Anonymous",
      content,
      date: Timestamp.now(),
    };

    try {
      const postRef = doc(db, 'posts', id);
      await updateDoc(postRef, {
        comments: arrayUnion(newComment),
      });

      setPost(prev => ({
        ...prev,
        comments: [...(prev.comments || []), newComment],
      }));
    } catch (err) {
      console.error("Failed to add comment:", err);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500 dark:text-gray-400">Loading post...</div>
    );
  }

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Post not found</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Check the URL or go back to the homepage.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-charcoal-900 shadow-sm text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold leading-tight mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
            <span>{post.date?.toDate?.().toLocaleDateString?.() || 'Unknown date'}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>
        </header>

        {/* Post Body */}
        <div className="relative mb-10">
  {/* Glowing animated border layer */}
  <div className="absolute inset-0 rounded-xl z-0 animate-spinBorder bg-gradient-to-r from-pink-500 via-blue-500 to-green-400 blur-[50px] opacity-40" />

  {/* Content box with z-index above the glow */}
  <article className="relative z-10 bg-white dark:bg-charcoal-800 rounded-xl shadow-md p-6 sm:p-8 leading-relaxed text-gray-800 dark:text-gray-100">
    <p>{post.content}</p>
  </article>
</div>

        {/* Like Button */}
        <div className="mb-6 mt-8">
          <LikeButton initialLikes={post.likes ?? 0} postId={post.id} />
        </div>

        {/* Comments */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          <CommentBox onSubmit={handleComment} />
          <div className="mt-8">
            <CommentList comments={post.comments ?? []} />
          </div>
        </section>
      </div>
    </div>
  );
}
