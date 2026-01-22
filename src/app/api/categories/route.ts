import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

// [GET] /api/categories カテゴリ一覧の取得
export const GET = async (req: NextRequest) => {
  try {
    const categories = prisma.category.findMany({
      // ◀ 意図的にawait忘れ
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "カテゴリの取得に失敗しました" },
      { status: 500 },
    );
  }
};
