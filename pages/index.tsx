import {CenterContainer} from "@/component/atom/centerContainer";
import Link from "next/link";

export default function Home() {
  return (
    <CenterContainer>
        <Link href="/chatPage">
             <a>채팅 페이지로 이동하기</a>
        </Link>
    </CenterContainer>
  )
}
