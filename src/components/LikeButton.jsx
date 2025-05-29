import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../data/firebase';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

export default function LikeButton({ initialLikes, postId }) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    const newCount = isLiked ? likes - 1 : likes + 1;
    setIsLiked(!isLiked);
    setLikes(newCount);

    try {
      const postRef = doc(db, 'posts', postId);
      await updateDoc(postRef, { likes: newCount });
    } catch (err) {
      console.error("Failed to update likes:", err);
    }
  };

  return (
    <button
      onClick={handleLike}
      className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-red-600 transition"
    >
      {isLiked ? (
        <HeartSolid className="w-5 h-5 text-red-400" />
      ) : (
        <HeartOutline className="w-5 h-5 text-white" />
      )}
      <span className="text-sm font-medium">{likes}</span>
    </button>
  );
}
