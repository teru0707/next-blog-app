/* src/app/_types/Post.ts */
import type { Category } from "./Category";
import type { CoverImage } from "./CoverImage";

export type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  categories: Category[];
  coverImage: CoverImage;
  // 便利機能：読了時間（分）
  readingTime?: number;
};
