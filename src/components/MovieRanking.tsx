import { useState } from "react";

export default function MovieRanking() {
    interface MenuList {
        title: string;
    }

    const menuList: MenuList[] = [
        { title: "NEW" },
        { title: "인기급상승🔥" },
        { title: "일별" },
        { title: "주간" },
        { title: "2026" },
    ];

    const [selectedCategory, setSelectedCategory] = useState<string>("NEW");

    return (
        <section className="mx-auto w-full max-w-screen-xl mt-8 px-4 md:px-6 lg:px-8 border border-red-500">
            <div className="text-2xl font-bold">랭킹</div>
            <ul className="grid grid-cols-3 gap-2 md:flex my-7 text-center text-xs sm:text-sm">
                {menuList && menuList.map((item) =>
                    <li className={
                        item.title === selectedCategory
                            ? "text-white bg-[#333333] border border-[#333333] rounded-3xl py-1 px-3 cursor-pointer"
                            : "border border-[#dddddd] rounded-3xl py-1 px-3 cursor-pointer"}
                        onClick={() => { setSelectedCategory(item.title) }}
                    >
                        {item.title}
                    </li>
                )}
            </ul>
        </section>
    )
}
// 반응형 관련 : md:px-6 lg:px-8
// 모바일 기준으로 잡고 lg로 pc 잡기
// mx-auto w-full max-w-screen-xl px-4 md:px-6 lg:px-8
// className="mx-auto w-full max-w-screen-xl border border-red-500"