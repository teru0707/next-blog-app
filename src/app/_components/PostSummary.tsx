/* src/app/_components/PostSummary.tsx */
"use client";
import type { Post } from "@/app/_types/Post";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import { BlogUtils } from "@/lib/BlogUtils"; // 追加

type Props = {
  post: Post;
};

const PostSummary: React.FC<Props> = (props) => {
  const { post } = props;
  const dtFmt = "YYYY年MM月DD日";
  const readingTime = BlogUtils.calculateReadingTime(post.content);

  const safeHTML = DOMPurify.sanitize(post.content, {
    ALLOWED_TAGS: ["b", "strong", "i", "em", "u", "br"],
  });

  return (
    <div className="glass-card group mb-4 p-5">
      <Link href={`/posts/${post.id}`}>
        <div className="mb-3 flex items-center justify-between text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span>{dayjs(post.createdAt).format(dtFmt)}</span>
            <span className="rounded-full bg-indigo-100 px-2 py-0.5 font-medium text-indigo-600">
              ⏱ {readingTime} 分で読めます
            </span>
          </div>
          <div className="flex space-x-1.5">
            {post.categories.map((category) => (
              <span
                key={category.id}
                className="rounded border border-indigo-200 px-2 py-0.5 text-xs text-indigo-500"
              >
                #{category.name}
              </span>
            ))}
          </div>
        </div>
        <h2 className="mb-2 text-xl font-bold transition-colors group-hover:text-indigo-600">
          {post.title}
        </h2>
        <div
          className="line-clamp-2 text-sm leading-relaxed text-slate-600"
          dangerouslySetInnerHTML={{ __html: safeHTML }}
        />
        <div className="mt-4 inline-flex items-center text-sm font-bold text-indigo-500">
          記事を読む{" "}
          <span className="ml-1 transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </Link>
    </div>
  );
};

export default PostSummary;
