import { useState } from "react";

export default function MovieRanking() {
    // 임시 데이터
    interface MenuList {
        title: string;
    }

    interface MovieRanking {
        poster: string;
        ranking: number;
        title: string;
        openDate: string;
        audience: number;
    }

    const menuList: MenuList[] = [
        { title: "NEW" },
        { title: "인기급상승🔥" },
        { title: "일별" },
        { title: "주간" },
        { title: "2026" },
    ];

    const movieRaking: MovieRanking[] = [
        {
            poster: "/assets/poster.svg",
            ranking: 1,
            title: "영화 제목",
            openDate: "2026-01-01",
            audience: 1000
        },
        {
            poster: "/assets/poster.svg",
            ranking: 2,
            title: "영화 제목",
            openDate: "2026-01-01",
            audience: 1000
        },
        {
            poster: "/assets/poster.svg",
            ranking: 3,
            title: "영화 제목",
            openDate: "2026-01-01",
            audience: 1000
        },
        {
            poster: "/assets/poster.svg",
            ranking: 4,
            title: "영화 제목",
            openDate: "2026-01-01",
            audience: 1000
        },
        {
            poster: "/assets/poster.svg",
            ranking: 5,
            title: "영화 제목",
            openDate: "2026-01-01",
            audience: 1000
        },
        {
            poster: "/assets/poster.svg",
            ranking: 6,
            title: "영화 제목",
            openDate: "2026-01-01",
            audience: 1000
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState<string>("NEW");

    return (
        <section className="mx-auto w-full max-w-screen-xl mt-8 mb-24 px-4 md:px-6 lg:px-8 border border-red-500">
            {/* 랭킹 타이틀 & 카테고리 버튼 */}
            <div className="text-2xl font-bold">랭킹</div>
            <ul className="grid grid-cols-3 gap-2 md:flex my-7 text-center text-xs md:text-sm">
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

            {/* 랭킹 목록(슬라이더) - 슬라이더 미적용 상태 */}
            <ul className="flex gap-3 overflow-x-auto">
                {movieRaking && movieRaking.map((item) =>
                    <li className="shrink-0 w-[150px] h-auto lg:shrink lg:w-auto lg:h-auto">
                        <div className="relative">
                            <img src={item.poster} alt="poster" />
                            <p className="absolute bottom-2 left-2 text-2xl md:text-3xl font-extrabold text-white text-shadow-lg">
                                {item.ranking}
                            </p>
                        </div>
                        <div className="flex flex-col gap-1 text-center mt-4">
                            <p className="text-sm md:text-base font-bold">{item.title}</p>
                            <p className="text-xs md:text-sm">개봉일 {item.openDate}</p>
                            <p className="text-xs md:text-sm">누적 {item.audience}</p>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    )
}
// 모바일 기준으로 잡고 lg로 pc 잡기