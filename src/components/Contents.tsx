import { useState } from "react";

export default function Contents() {
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
        <>
            <div className="pt-[54px]">
                <div>랭킹</div>
                <ul className="flex my-[30px]">
                    { menuList && menuList.map((item) =>
                        <li className={
                            item.title === selectedCategory 
                                ? "text-white bg-[#333333] border border-[#333333] rounded-[30px] py-[6px] px-[14px] mr-[6px] cursor-pointer" 
                                : "border border-[#dddddd] rounded-[30px] py-[6px] px-[14px] mr-[6px] cursor-pointer"}
                            onClick={() => {setSelectedCategory(item.title)}}
                        >
                            {item.title}
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}
// 반응형 관련 : md:px-6 lg:px-8
// 모바일 기준으로 잡고 lg로 pc 잡기
// mx-auto w-full max-w-screen-xl px-4 md:px-6 lg:px-8
// className="mx-auto w-full max-w-screen-xl border border-red-500"