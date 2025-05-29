import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  const likeCount = post.likes ?? 0;
  const commentCount = Array.isArray(post.comments) ? post.comments.length : 0;

  return (
    <article className="bg-white dark:bg-charcoal-800 shadow-sm rounded-lg hover:shadow-lg shadow-md transition-colors duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
          <span>{post.date?.toDate?.().toLocaleDateString?.() || 'Unknown date'}</span>
          <span>{post.author}</span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {post.title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {post.preview || post.content?.slice(0, 100) + '...'}
        </p>

        <div className="flex items-center justify-between mt-4">
          <Link
            to={`/post/${post.id}`}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
          >
            Read more →
          </Link>

          <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>{likeCount} likes</span>
            <span>{commentCount} comments</span>
          </div>
        </div>
      </div>
    </article>
  );
}
